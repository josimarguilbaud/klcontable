/**
 * Guías por tipo de cliente.
 *
 * La web vieja mandaba a todo el mundo a la misma página de servicios, y un
 * extranjero que abre sociedad en Panamá busca cosas muy distintas de las que
 * busca una pyme local. Cada guía captura un grupo de búsquedas propio y le
 * habla en sus términos.
 *
 * Estas rutas SÍ van en español: son nuevas, no había nada indexado que
 * conservar. El `/services/` en inglés se mantiene solo por herencia.
 */
import type { Faq } from './servicios';

export type Guia = {
  slug: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  h1: string;
  gancho: string;
  intro: string[];
  puntos: { t: string; d: string }[];
  servicios: string[];
  faqs: Faq[];
};

export const GUIAS: Guia[] = [
  {
    slug: 'para-emprendedores',
    nombre: 'Para emprendedores',
    titulo: 'Contabilidad para Emprendedores en Panamá | Empezar Bien — KL Contable',
    descripcion:
      'Va a abrir su negocio en Panamá y no sabe qué obligaciones tendrá. Le explicamos qué necesita desde el primer día y qué puede esperar.',
    h1: 'Contabilidad para emprendedores en Panamá',
    gancho: 'Empezar bien cuesta mucho menos que arreglarlo después.',
    intro: [
      'La mayoría de los negocios que abren en Panamá no fracasan por su idea. Se complican por lo de al lado: no saber qué hay que declarar, enterarse tarde de un vencimiento, o descubrir a los dos años que llevan mal los libros desde el principio.',
      'Nada de eso es difícil si alguien se lo explica al empezar. Lo caro es descubrirlo cuando ya hay recargos encima.',
    ],
    puntos: [
      { t: '¿Persona natural o sociedad?', d: 'La decisión que más consecuencias tiene, y casi siempre se toma sin información. Depende de cuánto espera facturar, de si tendrá socios y de qué riesgo asume.' },
      { t: 'Qué le va a tocar declarar', d: 'Antes de abrir conviene saber si tendrá que declarar ITBMS, cada cuánto y desde qué momento. Es lo que más sorprende al primer año.' },
      { t: 'Su primer empleado', d: 'Cuesta bastante más que su salario. Le damos la cifra real antes de contratar, para que no descuadre las cuentas del segundo mes.' },
      { t: 'Ordenado desde el día uno', d: 'Separar cuentas, guardar los comprobantes correctos y registrar como toca. Suena obvio y es lo que casi nadie hace.' },
    ],
    servicios: ['asesoria-contable-panama', 'servicios-de-contabilidad-outsourcing-en-panama', 'servicio-de-mensajeria-y-tramites-empresariales-en-panama'],
    faqs: [
      { p: '¿Necesito un contador si todavía no facturo?', r: 'Para empezar no hace falta un servicio mensual completo, pero sí una conversación antes de abrir. Media hora al principio evita meses de desorden.' },
      { p: '¿Cuándo tengo que empezar a declarar?', r: 'Depende de la figura con la que abra y de su actividad. Es exactamente la clase de pregunta que conviene hacer antes y no después.' },
      { p: '¿Puedo llevar la contabilidad yo mismo al principio?', r: 'Puede, y muchos lo hacen. El problema no suele ser registrar: es saber qué se presenta, cuándo y en qué formulario.' },
    ],
  },
  {
    slug: 'para-pymes',
    nombre: 'Para pymes',
    titulo: 'Contabilidad para Pymes en Panamá | Su Empresa al Día — KL Contable',
    descripcion:
      'Contabilidad, impuestos y planilla para pequeñas y medianas empresas en Panamá. Todo al día, con avisos antes de cada vencimiento.',
    h1: 'Contabilidad para pymes en Panamá',
    gancho: 'Todo el trabajo contable de su empresa, sin sostener un departamento.',
    intro: [
      'Una pyme está en la peor posición posible: tiene las mismas obligaciones que una empresa grande, y ninguna de sus estructuras. Las mismas declaraciones, la misma planilla, las mismas fechas, pero sin departamento contable ni nadie a quien preguntar a media mañana.',
      'Ese es justo el hueco que cubrimos.',
    ],
    puntos: [
      { t: 'Un interlocutor fijo', d: 'La misma persona que conoce su negocio, no una centralita distinta cada vez.' },
      { t: 'Avisos antes, no después', d: 'Le escribimos antes de cada vencimiento. Casi todas las multas que hemos visto fueron por enterarse tarde, no por no querer pagar.' },
      { t: 'Estados que el banco acepta', d: 'Cuando pida un crédito o entre en una licitación, los papeles ya están como los piden.' },
      { t: 'Su planilla resuelta', d: 'Nómina, Seguro Social, décimo y liquidaciones. Donde un error pequeño se vuelve un problema laboral grande.' },
    ],
    servicios: ['servicios-de-contabilidad-outsourcing-en-panama', 'servicios-de-gestion-tributaria-en-panama', 'servicios-de-planilla-en-panama'],
    faqs: [
      { p: '¿Desde qué tamaño de empresa trabajan?', r: 'Desde una persona. El tamaño cambia el volumen de trabajo, no las obligaciones.' },
      { p: '¿Puedo contratar solo la planilla?', r: 'Sí. Cada servicio se puede contratar por separado, aunque juntos salen mejor porque no hay que pasarse información entre despachos.' },
      { p: 'Mi contador actual renunció a mitad de año. ¿Qué hago?', r: 'Es más común de lo que parece. Se recibe lo que haya, se revisa en qué estado está y se sigue desde ahí, sin empezar de cero.' },
    ],
  },
  {
    slug: 'para-extranjeros',
    nombre: 'Para extranjeros',
    titulo: 'Contabilidad en Panamá para Extranjeros | Su Empresa Aquí — KL Contable',
    descripcion:
      'Servicios contables en Panamá para extranjeros y empresas con dueños fuera del país. Gestionamos sus obligaciones locales sin que tenga que estar aquí.',
    h1: 'Contabilidad en Panamá para extranjeros',
    gancho: 'Su empresa panameña al día, sin que usted tenga que estar en Panamá.',
    intro: [
      'Panamá recibe cada año a mucha gente que abre una empresa aquí sin vivir aquí. La sociedad se constituye rápido; lo que se subestima es lo que viene después: las obligaciones locales corren igual, aunque el dueño esté a nueve husos horarios.',
      'Y hay un detalle que sorprende a casi todos: muchos trámites panameños siguen exigiendo que alguien vaya en persona a una ventanilla.',
    ],
    puntos: [
      { t: 'Alguien que va en persona', d: 'Las diligencias, los paz y salvos y las ventanillas las hacemos aquí. Usted recibe el comprobante.' },
      { t: 'Obligaciones locales al día', d: 'Sus declaraciones ante la DGI se presentan en plazo, viva donde viva.' },
      { t: 'Comunicación en su horario', d: 'Coordinamos por WhatsApp y correo, con constancia escrita de cada paso.' },
      { t: 'Nada de sorpresas', d: 'Le decimos por adelantado qué obligaciones va a tener y cuánto le costarán al año.' },
    ],
    servicios: ['servicio-de-mensajeria-y-tramites-empresariales-en-panama', 'servicios-de-gestion-tributaria-en-panama', 'asesoria-contable-panama'],
    faqs: [
      { p: '¿Tengo que viajar a Panamá?', r: 'Para el trabajo contable y la mayoría de los trámites, no. Si algo exige su presencia o un poder, se lo decimos por adelantado.' },
      { p: 'Mi empresa panameña no opera todavía. ¿Debo declarar igual?', r: 'Una sociedad inactiva no está libre de obligaciones. Cuáles y cuántas depende de su caso, y conviene saberlo antes de que se acumulen.' },
      { p: '¿En qué idioma atienden?', r: 'En español. Los documentos oficiales panameños van en español, así que se los explicamos en un lenguaje claro.' },
    ],
  },
];

export const guiaPorSlug = (slug: string) => GUIAS.find((g) => g.slug === slug);
