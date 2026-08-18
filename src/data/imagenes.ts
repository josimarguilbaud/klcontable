/**
 * Las fotos de la web anterior, rescatadas de web.archive.org.
 *
 * Son las originales del sitio caido, no banco de imagenes: llevaban anos
 * asociadas a esta marca. Autoalojadas en `public/img/`, nunca enlazadas al
 * archivo — una peticion externa por imagen castiga los Core Web Vitals.
 *
 * ⚠️ Ninguna muestra a personas presentadas como «el equipo de KL Contable».
 * Son ambientes y objetos. Poner caras de banco de imagenes como si fueran los
 * socios es el mismo engano que un testimonio inventado.
 */
export const IMG_SERVICIO: Record<string, string> = {
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

/** La de la portada. Vivia justo ahi en el sitio anterior. */
export const IMG_PORTADA = '/img/contador-en-panama_bg.jpg';
