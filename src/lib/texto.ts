/** El `id` de un H2 a partir de su texto: sin tildes, en minúsculas y con guiones. */
export const ancla = (t: string) =>
  t
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Fecha ISO en largo, como se lee en Panamá: «28 de septiembre de 2026». */
export const fechaLarga = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('es-PA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
