/**
 * Novedades DGI y CSS: cambios normativos con fecha y fuente.
 *
 * A diferencia del blog (temas que no caducan), aquí va lo que CAMBIA: una ley,
 * una resolución, un plazo nuevo. Es el contenido que se comparte y el que
 * Google premia por ser reciente.
 *
 * REGLA DURA, más estricta aún que en el resto de la web: una novedad sin
 * `fuente` oficial leída y sin `comprobado` no se publica. El tipo lo exige.
 * Un resumen de un buscador, un grupo de WhatsApp o la web de otro despacho no
 * cuentan como fuente: hay que haber leído la norma o el comunicado oficial.
 * Aquí un error no es una errata, es una multa para quien se fió.
 */
import type { Fuente } from './fiscal';
import { FUENTE_CSS } from './fiscal';
import type { Seccion } from './articulos';
import type { Faq } from './servicios';

export type Novedad = {
  slug: string;
  titulo: string;
  descripcion: string;
  h1: string;
  /** Qué cambia, en una o dos frases que se entienden solas. */
  resumen: string;
  /** Día en que publicamos la nota. */
  fecha: string;
  /** Institución que emite el cambio. */
  entidad: 'DGI' | 'CSS' | 'MEF' | 'MITRADEL' | 'Municipio' | 'Asamblea Nacional';
  /** A quién le afecta, dicho en claro. */
  aQuien: string[];
  secciones: Seccion[];
  faqs?: Faq[];
  fuente: Fuente;
  /** Servicio de la firma relacionado, para el cierre de la nota. */
  servicio?: string;
  /** Artículos del blog que amplían la nota. */
  articulos?: string[];
};

export const NOVEDADES: Novedad[] = [
  {
    slug: 'ley-462-cuota-patronal-css-sube-por-tramos',
    titulo: 'Ley 462: Cuota Patronal CSS Sube por Tramos | KL Contable',
    descripcion:
      'La Ley 462 de 2025 subió la cuota patronal a la CSS al 13.25 % y fija dos aumentos más: 14.25 % desde marzo de 2027 y 15.25 % desde marzo de 2029.',
    h1: 'Ley 462 de 2025: la cuota patronal a la CSS sube por tramos',
    resumen:
      'La Ley 462 de 18 de marzo de 2025 reformó la Ley Orgánica de la Caja de Seguro Social. La cuota que paga la empresa por cada trabajador es hoy del 13.25 % del salario, sube al 14.25 % el 1 de marzo de 2027 y al 15.25 % el 1 de marzo de 2029. La cuota del trabajador es del 9.75 %.',
    fecha: '2026-09-28',
    entidad: 'CSS',
    aQuien: [
      'Toda empresa o persona con trabajadores en planilla en Panamá.',
      'Quien esté presupuestando contrataciones para 2027 o más adelante.',
      'Quien calcule el costo de un empleado con tablas anteriores a la reforma.',
    ],
    secciones: [
      {
        t: 'Qué cambió',
        p: [
          'La Ley 462 de 18 de marzo de 2025 modificó la Ley 51 de 2005, que es la Ley Orgánica de la Caja de Seguro Social. Entre otras cosas, cambió la cuota que aporta el empleador por cada trabajador, que está en el artículo 96 del texto único de esa ley.',
          'El cambio no es de una sola vez: la ley fija tres tramos, cada uno con su fecha. Por eso una tabla de cuotas que era correcta hace dos años hoy da un costo de planilla más bajo del real, y dentro de unos meses se quedará corta otra vez.',
        ],
      },
      {
        t: 'Los tramos, con sus fechas',
        p: [
          'Hasta el 28 de febrero de 2027, la cuota patronal es del 13.25 % del salario.',
          'Desde el 1 de marzo de 2027 y hasta el 28 de febrero de 2029, es del 14.25 %.',
          'Desde el 1 de marzo de 2029, es del 15.25 %.',
          'La cuota que se descuenta al trabajador de su salario es del 9.75 %. Son dos aportes distintos: uno lo paga la empresa encima del salario y el otro sale del salario del trabajador.',
        ],
      },
      {
        t: 'Qué hacer en su empresa',
        p: [
          'Revise con qué porcentaje está calculada su planilla hoy. Si su sistema o su hoja de cálculo tiene una cuota patronal distinta del 13.25 %, está desactualizada.',
          'Si está presupuestando el año que viene, tenga en cuenta que el aumento de marzo de 2027 cae a mitad de año: los dos primeros meses van con una cuota y el resto con otra.',
          'Y si va a contratar, calcule el costo con la cuota que estará vigente cuando esa persona lleve un año en la empresa, no solo con la de hoy.',
        ],
      },
      {
        t: 'Lo que esta nota no cubre',
        p: [
          'La reforma de la CSS tiene más contenido que la cuota patronal. Esta nota se limita a lo que afecta directamente al costo de la planilla. Para el resto de cambios, o para saber cómo le afectan a su caso, escríbanos.',
          'El costo total de un empleado incluye además otros conceptos, como el seguro educativo y la prima de riesgo profesional, que no dependen de esta ley y que calculamos con usted caso por caso.',
        ],
      },
    ],
    faqs: [
      {
        p: '¿Cuánto es la cuota patronal de la CSS hoy en Panamá?',
        r: 'Es del 13.25 % del salario, y se mantiene así hasta el 28 de febrero de 2027, según la Ley 462 de 18 de marzo de 2025.',
      },
      {
        p: '¿Cuándo vuelve a subir la cuota patronal?',
        r: 'El 1 de marzo de 2027 pasa al 14.25 %, y el 1 de marzo de 2029 al 15.25 %.',
      },
      {
        p: '¿La reforma cambió lo que se le descuenta al trabajador?',
        r: 'La cuota del trabajador, según el texto vigente de la ley, es del 9.75 % de su salario. Lo que sube por tramos es la cuota que paga la empresa.',
      },
    ],
    fuente: FUENTE_CSS,
    servicio: 'servicios-de-planilla-en-panama',
    articulos: [
      'subio-la-cuota-patronal-css-en-panama',
      'cuanto-cuesta-un-empleado-en-panama',
      'contratar-en-planilla-o-por-servicios-profesionales',
    ],
  },
];

export const novedadPorSlug = (slug: string) => NOVEDADES.find((n) => n.slug === slug);
