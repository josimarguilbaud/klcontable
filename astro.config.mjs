// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// La fecha de cada artículo y guía, para el <lastmod> del sitemap. Se lee del
// código fuente con una expresión regular porque la config no puede importar
// los .ts de datos. Solo las páginas con fecha real la llevan: un lastmod
// inventado (la del build, por ejemplo) hace que Google deje de fiarse de él.
const FECHAS = {};
for (const f of ['articulos', 'articulos-a', 'articulos-b', 'articulos-c']) {
  const src = readFileSync(new URL(`./src/data/${f}.ts`, import.meta.url), 'utf8');
  for (const bloque of src.split(/\n  \{\n/).slice(1)) {
    const slug = bloque.match(/slug: '([^']+)'/)?.[1];
    const fecha = bloque.match(/actualizado: '([^']+)'/)?.[1] ?? bloque.match(/fecha: '([^']+)'/)?.[1];
    if (slug && fecha) FECHAS[`/blog/${slug}/`] = fecha;
  }
}
for (const g of ['para-emprendedores', 'para-pymes', 'para-extranjeros']) {
  const src = readFileSync(new URL(`./src/data/guias/${g}.ts`, import.meta.url), 'utf8');
  const fecha = src.match(/actualizado: '([^']+)'/)?.[1];
  if (fecha) FECHAS[`/${g}/`] = fecha;
}


export default defineConfig({
  site: 'https://klcontable.com',
  // Las URLs indexadas terminaban en barra. Cambiarlas tiraria lo unico que
  // sobrevivio a la caida del hosting.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // El 404 no entra en el sitemap: pedirle a Google que rastree la pagina de
  // error es justo lo contrario de lo que hace.
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes('/404'),
      serialize(item) {
        const fecha = FECHAS[new URL(item.url).pathname];
        return fecha ? { ...item, lastmod: fecha } : item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
