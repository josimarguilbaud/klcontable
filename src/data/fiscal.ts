/**
 * Tasas y cuotas oficiales de Panamá.
 *
 * REGLA DURA: aquí solo entra lo que se ha leído en la fuente oficial, con su
 * enlace y la fecha en que se comprobó. Nada de memoria y nada del prototipo.
 *
 * Por qué importa tanto: la Ley 462 de 18 de marzo de 2025 reformó la Ley
 * Orgánica de la CSS y subió la cuota patronal de forma ESCALONADA. La cifra
 * que circula por ahí —12.25%— es la de ANTES de la reforma. Una calculadora
 * con ese número le dice a un empresario que un empleado cuesta un 1% menos de
 * lo que cuesta, y a partir de marzo de 2027 se equivoca aún más.
 *
 * Por eso la cuota patronal NO es una constante: es una función de la fecha.
 */

export type Fuente = {
  nombre: string;
  url: string;
  articulo?: string;
  comprobado: string; // ISO
};

export const FUENTE_CSS: Fuente = {
  nombre: 'Texto Único de la Ley 51 de 2005, reformada por la Ley 462 de 18 de marzo de 2025',
  url: 'https://www.css.gob.pa/wp-content/uploads/2025/05/TEXTO-UNICO-DE-LA-LEY-51-DE-2005-CSS-GACETA-OFICIAL-22-5-25.pdf',
  articulo: 'Artículo 96',
  comprobado: '2026-08-17',
};

/** Cuota del TRABAJADOR al Seguro Social. Artículo 96, verificado. */
export const CUOTA_TRABAJADOR_SS = 9.75;

/**
 * Cuota del EMPLEADOR al Seguro Social, por tramos. Artículo 96, verificado.
 * Los tramos son textuales de la ley, no interpolados.
 */
export const TRAMOS_PATRONAL_SS = [
  { hasta: '2027-02-28', tasa: 13.25 },
  { hasta: '2029-02-28', tasa: 14.25 },
  { hasta: null, tasa: 15.25 },
] as const;

/** La cuota patronal vigente en una fecha dada. */
export function cuotaPatronalSS(fecha: Date = new Date()): number {
  const hoy = fecha.toISOString().slice(0, 10);
  for (const t of TRAMOS_PATRONAL_SS) {
    if (t.hasta === null || hoy <= t.hasta) return t.tasa;
  }
  return TRAMOS_PATRONAL_SS[TRAMOS_PATRONAL_SS.length - 1].tasa;
}

/**
 * ⚠️ PENDIENTE DE VERIFICAR — no se publica nada que dependa de esto.
 *
 * El Seguro Educativo NO está en la Ley de la CSS: es una contribución aparte,
 * con su propia norma. Las cifras que traía el prototipo (1.25% trabajador,
 * 1.50% empleador) NO se han podido comprobar en fuente oficial, así que se
 * dejan en null y la calculadora se niega a estimar el costo total hasta que
 * estén. Poner un número plausible aquí es exactamente el error que este
 * fichero existe para evitar.
 */
export const CUOTA_TRABAJADOR_SE: number | null = null;
export const CUOTA_PATRONAL_SE: number | null = null;

/**
 * ⚠️ PENDIENTE — el riesgo profesional varía por clase de actividad (I a V) y
 * lo fija la CSS por resolución. Sin la tabla oficial no se estima.
 */
export const RIESGO_PROFESIONAL: Record<string, number> | null = null;

/** ¿Hay bastante dato verificado para calcular el costo TOTAL de un empleado? */
export const PUEDE_CALCULAR_COSTO_TOTAL =
  CUOTA_TRABAJADOR_SE !== null && CUOTA_PATRONAL_SE !== null && RIESGO_PROFESIONAL !== null;
