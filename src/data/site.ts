/**
 * Los datos del negocio.
 *
 * Regla dura: lo que no se pudo verificar NO se inventa. Va como `null` y la
 * web simplemente no lo muestra.
 *
 * Motivo: en las tres fuentes que teníamos (el archivo de la web caída, el
 * prototipo de AI Studio y la maqueta HTML) los datos NO coincidían. Cuatro
 * antigüedades distintas —25, 35, 18 y 15 años—, tres teléfonos y dos
 * direcciones. Publicar cualquiera de esas cifras es apostar. Y en una firma
 * contable la apuesta es cara: un número de idoneidad o un «cero multas»
 * inventado no es marketing, es atribuirse una credencial profesional.
 *
 * El teléfono de abajo SÍ es real: sale de la web archivada.
 */
export const SITE = {
  nombre: 'KL Contable',
  nombreLargo: 'KL Contable — Servicios de Contabilidad en Panamá',
  dominio: 'https://klcontable.com',
  ciudad: 'Ciudad de Panamá',
  pais: 'PA',

  // Verificado en el archivo de la web.
  correo: 'info@klcontable.com',
  telefono: '6931-7568',
  telefonoE164: '+50769317568',
  whatsapp: '50769317568',
  horario: 'Lunes a viernes',

  // ── PENDIENTES DE JOSIMAR ──────────────────────────────────────────────
  // Mientras sean null, la web no los muestra. Nada de cifras de relleno.
  // Confirmado por Josimar el 17/08/2026: son 35. La web vieja se contradecía
  // (35 en la portada, 25 en /nosotros/) y las otras fuentes decían 18 y 15.
  anosExperiencia: 35 as number | null,
  direccion: null as string | null,
  ruc: null as string | null,
  clientesAtendidos: null as number | null,
} as const;

/**
 * La contadora responsable y fundadora. Confirmado por Josimar el 28/09/2026.
 *
 * Es la credencial que más pesa en una firma contable: la idoneidad de
 * Contador Público Autorizado. Sale en la barra superior, la portada, cada
 * servicio, /nosotros/, el pie y el schema del negocio.
 *
 * `foto` va en null a propósito: la foto tiene que ser real. Nunca una
 * generada con IA ni de banco de imágenes: es una persona concreta con una
 * credencial concreta.
 */
export const CONTADORA = {
  tratamiento: 'Licda.',
  nombre: 'Luris Escudero Muñoz',
  nombreCompleto: 'Licda. Luris Escudero Muñoz',
  iniciales: 'LE',
  cargo: 'Contadora Pública Autorizada y fundadora',
  idoneidadCPA: '0630-2010',
  foto: null as string | null,
} as const;

/** La credencial en una línea, igual en toda la web. */
export const CREDENCIAL = `Idoneidad CPA No. ${CONTADORA.idoneidadCPA}`;

/** Enlaces oficiales. Son de instituciones panameñas: no caducan y dan contexto. */
export const OFICIALES = [
  { nombre: 'Dirección General de Ingresos (DGI)', url: 'https://dgi.mef.gob.pa/' },
  { nombre: 'Caja de Seguro Social (CSS)', url: 'https://www.css.gob.pa/' },
  { nombre: 'Panamá Emprende', url: 'https://www.panamaemprende.gob.pa/' },
];
