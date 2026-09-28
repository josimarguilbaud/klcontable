/**
 * Las imágenes de la web.
 *
 * Dos orígenes, y no se mezclan:
 *
 * 1. `public/img/*.jpg` — las fotos de la web anterior, rescatadas de
 *    web.archive.org. Llevaban años asociadas a esta marca.
 * 2. `public/img/ia/**` — las que faltaban, generadas con IA (fal.ai) con
 *    `npm run imagenes`. Las descripciones están en `imagenes-ia.json`, que es
 *    lo que lee el script: para añadir una imagen se añade ahí una entrada y se
 *    vuelve a correr; las que ya existen no se regeneran.
 *
 * Todas autoalojadas, nunca enlazadas a un CDN ajeno — una petición externa por
 * imagen castiga los Core Web Vitals, y un hotlink roto sale en la cara del
 * cliente.
 *
 * Si una imagen de IA todavía no está generada, `fotoIA()` devuelve `undefined`
 * y la página se pinta sin ella: el build nunca se rompe por una foto.
 *
 * ⚠️ Ninguna muestra a personas presentadas como «el equipo de KL Contable».
 * Son ambientes y objetos. Poner caras de banco de imágenes —o inventadas por
 * una IA— como si fueran los socios es el mismo engaño que un testimonio falso.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import MANIFIESTO from './imagenes-ia.json';

/** `srcset` solo existe en las generadas: llevan una versión de 800 px para móvil. */
export type Foto = { src: string; alt: string; srcset?: string };

type EntradaIA = { clave: string; archivo: string; alt: string; escena: string };

// `process.cwd()` y no `import.meta.url`: al construir, Astro empaqueta este
// módulo en otra carpeta y la ruta relativa dejaría de apuntar a `public/`.
const PUBLIC = join(process.cwd(), 'public');
const IA = new Map((MANIFIESTO as EntradaIA[]).map((e) => [e.clave, e]));

/** La imagen de IA de una clave (`blog/<slug>`, `pagina/nosotros`…), si ya existe. */
export function fotoIA(clave: string): Foto | undefined {
  const e = IA.get(clave);
  if (!e) return undefined;
  const src = `/img/ia/${e.archivo}`;
  if (!existsSync(join(PUBLIC, src))) return undefined;
  const chica = src.replace(/\.webp$/, '-800.webp');
  return {
    src,
    alt: e.alt,
    ...(existsSync(join(PUBLIC, chica)) ? { srcset: `${chica} 800w, ${src} 1600w` } : {}),
  };
}

/**
 * La foto de un servicio.
 *
 * Primero la generada para ese servicio; si todavía no existe, la rescatada de
 * la web anterior, y en los cuatro servicios nuevos (que nunca tuvieron una) la
 * prestada de otro servicio.
 */
const RESPALDO: Record<string, string> = {
  'asesoria-contable-panama': '/img/servicios-de-contabilidad-empresarial.jpg',
  'servicios-de-contabilidad-outsourcing-en-panama': '/img/contabilidad-outsourcing-en-panama.jpg',
  'servicios-de-auditoria-contable-en-panama': '/img/auditoria-contable-1.jpg',
  'servicios-de-gestion-tributaria-en-panama': '/img/gestion-tributaria-panama.jpg',
  'servicios-de-planilla-en-panama': '/img/planilla.jpg',
  'servicio-de-mensajeria-y-tramites-empresariales-en-panama':
    '/img/servicio-de-mensajeria-y-tramites-empresariales-en-panama.jpg',
  'facturacion-electronica-panama': '/img/servicio-de-declaracion-de-itbms-en-panama.jpg',
  'precios-de-transferencia-panama':
    '/img/creacion-y-presentacion-de-declaracion-de-renta-en-panama.jpg',
  'regimenes-especiales-panama': '/img/contador-servicios.jpg',
  'impuestos-municipales-panama': '/img/planilla2.jpg',
};

export function fotoServicio(slug: string): Foto | undefined {
  return fotoIA(`servicio/${slug}`) ?? (RESPALDO[slug] ? { src: RESPALDO[slug], alt: '' } : undefined);
}

/** La de la portada. Vivía justo ahí en el sitio anterior. */
export const IMG_PORTADA = '/img/contador-en-panama_bg.jpg';

/** La que sale al compartir un enlace cuando la página no tiene una propia. */
export const IMG_COMPARTIR = '/img/compartir.jpg';
