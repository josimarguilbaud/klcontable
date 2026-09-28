/**
 * Genera con fal.ai las imágenes de `src/data/imagenes-ia.json` que todavía no
 * existen en `public/img/ia/`.
 *
 *   FAL_KEY=... npm run imagenes              # solo las que faltan
 *   FAL_KEY=... npm run imagenes -- blog/     # solo las claves que empiezan así
 *   FAL_KEY=... npm run imagenes -- --forzar blog/cuanto-cuesta-un-empleado-en-panama
 *
 * La clave NUNCA va en el repo: se pasa por variable de entorno.
 *
 * Cada imagen sale en WebP a 1600 px de ancho, más una copia de 800 px para
 * móvil (`-800.webp`). El estilo es común a todas
 * (ESTILO, abajo) para que la web no parezca un collage de bancos de imágenes;
 * lo que cambia por imagen es solo la escena.
 */
import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const RAIZ = new URL('..', import.meta.url).pathname;
const MODELO = process.env.FAL_MODEL ?? 'fal-ai/flux-pro/v1.1';
const CLAVE = process.env.FAL_KEY;
const PARALELO = Number(process.env.FAL_PARALELO ?? 3);

const ESTILO =
  'Editorial documentary photograph, shot on a 35mm lens with natural window light, ' +
  'set in Panama City, Panama. Calm, trustworthy, professional mood. Palette of warm neutrals, ' +
  'slate navy and muted teal accents. Shallow depth of field, realistic textures, uncluttered composition. ' +
  'No readable text, no letters, no numbers, no logos, no watermarks, no brand names. ' +
  'No recognizable faces in the foreground.';

if (!CLAVE) {
  console.error('Falta FAL_KEY. Ejemplo: FAL_KEY=xxxx npm run imagenes');
  process.exit(1);
}

const args = process.argv.slice(2);
const forzar = args.includes('--forzar');
const filtros = args.filter((a) => !a.startsWith('--'));

const manifiesto = JSON.parse(await readFile(join(RAIZ, 'src/data/imagenes-ia.json'), 'utf8'));
const existe = (p) => access(p).then(() => true, () => false);

const pendientes = [];
for (const e of manifiesto) {
  if (filtros.length && !filtros.some((f) => e.clave.startsWith(f))) continue;
  const destino = join(RAIZ, 'public/img/ia', e.archivo);
  if (!forzar && (await existe(destino))) continue;
  pendientes.push({ ...e, destino });
}

console.log(`${pendientes.length} imágenes por generar con ${MODELO}.`);

async function generar(e) {
  const r = await fetch(`https://fal.run/${MODELO}`, {
    method: 'POST',
    headers: { Authorization: `Key ${CLAVE}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: `${e.escena} ${ESTILO}`,
      image_size: 'landscape_16_9',
      num_images: 1,
      output_format: 'jpeg',
      enable_safety_checker: true,
    }),
  });
  if (!r.ok) throw new Error(`fal.ai ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const { images } = await r.json();
  if (!images?.[0]?.url) throw new Error('fal.ai no devolvió imagen');

  const img = await fetch(images[0].url);
  if (!img.ok) throw new Error(`descarga ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());

  await mkdir(dirname(e.destino), { recursive: true });
  await writeFile(
    e.destino,
    await sharp(buf).resize(1600, 900, { fit: 'cover' }).webp({ quality: 78 }).toBuffer(),
  );
  // La de 800 px es la que descarga un móvil (va en el `srcset`).
  await writeFile(
    e.destino.replace(/\.webp$/, '-800.webp'),
    await sharp(buf).resize(800, 450, { fit: 'cover' }).webp({ quality: 74 }).toBuffer(),
  );
}

let fallos = 0;
const cola = [...pendientes];
await Promise.all(
  Array.from({ length: PARALELO }, async () => {
    for (let e; (e = cola.shift()); ) {
      try {
        await generar(e);
        console.log(`✓ ${e.clave}`);
      } catch (err) {
        fallos++;
        console.error(`✗ ${e.clave}: ${err.message}`);
      }
    }
  }),
);

if (fallos) {
  console.error(`${fallos} fallaron. Vuelva a correr el comando: solo reintenta las que faltan.`);
  process.exit(1);
}
