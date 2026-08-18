/**
 * Los seis servicios, con el slug EXACTO que tenía la web indexada.
 *
 * Los slugs NO se tocan, ni siquiera el `/servicios/` en inglés dentro de una
 * web en español. Chirría, sí; pero es la ruta que Google tiene y lo único que
 * sobrevivió a la caída del hosting. Cambiarla es tirar justo lo que venimos a
 * recuperar.
 *
 * El texto está escrito para el dueño de una pyme, no para un colega contador.
 * Los tecnicismos (NIIF, ITBMS, SIPE, e-Tax) aparecen porque son lo que la
 * gente busca en Google, pero SIEMPRE explicados en la misma frase. Un cliente
 * que no entiende la web no llama.
 */
export type Faq = { p: string; r: string };

export type Servicio = {
  slug: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  h1: string;
  gancho: string;
  resumen: string;
  icono: string;
  paraQuien: string;
  incluye: string[];
  senales: string[];
  faqs: Faq[];
};

export const SERVICIOS: Servicio[] = [
  {
    slug: 'asesoria-contable-panama',
    nombre: 'Asesoría Contable',
    titulo: 'Asesoría Contable en Panamá | Contador de Confianza — KL Contable',
    descripcion:
      'Asesoría contable en Panamá para empresas y emprendedores. Un contador que le explica sus números en palabras claras y le avisa antes de que haya problema.',
    h1: 'Asesoría contable en Panamá',
    gancho:
      'Un contador que no solo registra sus números: se los explica y le dice qué hacer con ellos.',
    resumen: 'Alguien que le explique sus números y le avise a tiempo.',
    icono: 'brujula',
    paraQuien:
      'Para el dueño que tiene la contabilidad al día pero no sabe qué le están diciendo esos informes, y para el que quiere consultar antes de decidir en vez de después.',
    incluye: [
      'Revisión mensual de sus estados financieros, explicada en lenguaje normal',
      'Aviso anticipado de vencimientos y obligaciones antes de que venzan',
      'Acompañamiento cuando el banco, un cliente o una licitación le piden papeles',
      'Consulta abierta: preguntar sale gratis y evita errores caros',
    ],
    senales: [
      'Recibe informes contables que no entiende',
      'Se entera de los vencimientos cuando ya pasaron',
      'Toma decisiones sin saber si el negocio da o no da',
    ],
    faqs: [
      {
        p: '¿En qué se diferencia de llevar la contabilidad?',
        r: 'Llevar la contabilidad es registrar lo que ya pasó. La asesoría es lo que se hace con esa información: qué conviene, qué se puede deducir, cuándo es mejor esperar y cuándo no. Van juntas, pero no son lo mismo.',
      },
      {
        p: '¿Sirve si mi empresa es pequeña?',
        r: 'Sobre todo si es pequeña. Una empresa grande tiene departamento contable; una pequeña toma las mismas decisiones sin nadie a quien preguntar, y ahí es donde se cometen los errores que salen caros.',
      },
      {
        p: '¿Tengo que cambiar de contador para contratarla?',
        r: 'No necesariamente. Se puede trabajar junto a quien ya le lleva los registros.',
      },
    ],
  },
  {
    slug: 'servicios-de-contabilidad-outsourcing-en-panama',
    nombre: 'Contabilidad Outsourcing',
    titulo: 'Contabilidad Outsourcing en Panamá | Su Departamento Contable — KL Contable',
    descripcion:
      'Externalice su contabilidad en Panamá. Registros al día, estados financieros y cumplimiento con la DGI, sin el costo fijo de un departamento propio.',
    h1: 'Contabilidad outsourcing en Panamá',
    gancho: 'Su departamento contable completo, sin tenerlo en planilla.',
    resumen: 'Todo el trabajo contable, sin contratar a nadie.',
    icono: 'engranaje',
    paraQuien:
      'Para empresas que necesitan contabilidad seria todos los meses pero no tienen volumen —ni ganas— para sostener un contador en planilla con su salario, sus prestaciones y sus vacaciones.',
    incluye: [
      'Registro de todas sus operaciones y conciliación de cuentas bancarias',
      'Estados financieros mensuales bajo NIIF, las normas que piden los bancos',
      'Declaraciones ante la DGI presentadas en plazo',
      'Un interlocutor fijo que conoce su negocio, no una centralita',
    ],
    senales: [
      'Su contador actual desaparece semanas y reaparece en la fecha límite',
      'Paga un salario completo por un trabajo de medio tiempo',
      'Cierra el año sin saber si los libros están cuadrados',
    ],
    faqs: [
      {
        p: '¿Sale más barato que contratar un contador?',
        r: 'En la mayoría de las pymes, sí. Un contador en planilla cuesta su salario más la cuota patronal, el décimo, las vacaciones y la prima de antigüedad. El outsourcing es una cuota fija sin ninguno de esos extras.',
      },
      {
        p: '¿Quién guarda mis documentos?',
        r: 'Usted. Trabajamos sobre sus registros y le entregamos todo organizado; la información es de la empresa, no del despacho. Es la pregunta correcta: cambiar de contador y no poder llevarse sus propios papeles es un problema real.',
      },
      {
        p: '¿Qué pasa si vengo con la contabilidad atrasada?',
        r: 'Se pone al día primero. Es lo más común y no hay nada de qué avergonzarse: se revisa cuánto hay pendiente, se ordena y desde ahí se sigue al día.',
      },
    ],
  },
  {
    slug: 'servicios-de-auditoria-contable-en-panama',
    nombre: 'Auditoría Contable',
    titulo: 'Auditoría Contable en Panamá | Estados Financieros Auditados — KL Contable',
    descripcion:
      'Auditoría de estados financieros en Panamá para bancos, licitaciones y juntas directivas. Un examen independiente con informe claro y recomendaciones aplicables.',
    h1: 'Auditoría contable en Panamá',
    gancho: 'Un examen independiente de sus números, con un informe que se entiende y sirve.',
    resumen: 'Cuando el banco o una licitación le piden estados auditados.',
    icono: 'lupa',
    paraQuien:
      'Para empresas a las que un banco, un socio, una junta directiva o una licitación les exige estados financieros auditados, y para quien quiere saber si sus números aguantan una revisión antes de que alguien más la haga.',
    incluye: [
      'Revisión independiente de sus estados financieros',
      'Informe con la opinión profesional que le piden',
      'Lista concreta de lo que conviene corregir, en orden de importancia',
      'Acompañamiento si el banco o la entidad pide aclaraciones',
    ],
    senales: [
      'Le pidieron estados auditados y no sabe por dónde empezar',
      'Va a entrar en una licitación y le exigen respaldo contable',
      'Quiere vender o dar entrada a un socio y necesita números creíbles',
    ],
    faqs: [
      {
        p: '¿Cuánto tarda una auditoría?',
        r: 'Depende del tamaño de la empresa y de cómo estén los registros. Con la contabilidad ordenada es cuestión de semanas; con los libros atrasados, lo primero es ponerlos al día. En la primera reunión se puede dar un plazo real.',
      },
      {
        p: '¿Es lo mismo que llevar la contabilidad?',
        r: 'No, y por diseño no puede hacerlo el mismo que lleva los libros: la auditoría es un examen independiente. Quien revisa no puede ser quien registró.',
      },
      {
        p: '¿Y si aparecen errores?',
        r: 'Aparecen casi siempre, y es el objetivo. Encontrarlos en una auditoría es infinitamente más barato que encontrarlos en una fiscalización.',
      },
    ],
  },
  {
    slug: 'servicios-de-gestion-tributaria-en-panama',
    nombre: 'Gestión Tributaria',
    titulo: 'Gestión Tributaria en Panamá | Declaraciones e ITBMS ante la DGI — KL Contable',
    descripcion:
      'Gestión tributaria en Panamá: declaración de renta, ITBMS y trámites ante la DGI presentados en plazo, sin multas y sin pagar de más.',
    h1: 'Gestión tributaria en Panamá',
    gancho:
      'Sus impuestos al día ante la DGI: ni una multa por olvido, ni un dólar de más por desconocimiento.',
    resumen: 'Declaraciones e ITBMS al día, sin multas por olvido.',
    icono: 'edificio',
    paraQuien:
      'Para cualquier empresa o persona con actividad económica en Panamá que quiera dormir tranquila con la Dirección General de Ingresos.',
    incluye: [
      'Declaración de renta anual preparada y presentada',
      'ITBMS mensual, el impuesto sobre las ventas que se declara todos los meses',
      'Trámites en e-Tax 2.0, la plataforma en línea de la DGI',
      'Aviso anticipado de cada vencimiento, antes de que sea tarde',
    ],
    senales: [
      'Ya pagó una multa por presentar fuera de plazo',
      'No está seguro de si le corresponde declarar ITBMS',
      'Sospecha que está pagando más impuesto del que le toca',
    ],
    faqs: [
      {
        p: '¿Qué pasa si presento tarde?',
        r: 'La DGI aplica recargos por mora, y crecen con el tiempo. Lo más caro casi nunca es el impuesto: es el recargo evitable por no haber presentado a tiempo.',
      },
      {
        p: '¿Me pueden ayudar si ya tengo deuda con la DGI?',
        r: 'Sí. Lo primero es saber exactamente cuánto se debe y por qué concepto, porque muchas veces la cifra que asusta incluye recargos que se pueden ordenar. A partir de ahí se plantea el camino.',
      },
      {
        p: '¿Puedo pagar menos impuestos legalmente?',
        r: 'A veces sí: hay gastos deducibles que muchas empresas no aprovechan por desconocimiento. Lo que no se hace es esconder ingresos. Una cosa es planificación y la otra es un problema con fecha.',
      },
    ],
  },
  {
    slug: 'servicios-de-planilla-en-panama',
    nombre: 'Planilla',
    titulo: 'Servicio de Planilla en Panamá | Nómina, CSS y SIPE — KL Contable',
    descripcion:
      'Gestión de planilla en Panamá: cálculo de nómina, cuotas de la CSS por el sistema SIPE, décimo tercer mes, vacaciones y liquidaciones. Sin errores y a tiempo.',
    h1: 'Servicio de planilla en Panamá',
    gancho: 'Su gente cobra bien y a tiempo, y usted deja de perder los viernes cuadrando números.',
    resumen: 'Nómina, CSS, décimo y liquidaciones, calculados y presentados.',
    icono: 'personas',
    paraQuien:
      'Para cualquier empresa con empleados en Panamá, desde el primero. La planilla es donde un error pequeño se convierte en un problema laboral grande.',
    incluye: [
      'Cálculo de la nómina con sus descuentos y su cuota patronal',
      'Presentación ante la CSS por el SIPE, el sistema en línea del Seguro Social',
      'Décimo tercer mes, vacaciones y prima de antigüedad calculados en su fecha',
      'Liquidaciones cuando alguien sale, hechas conforme a la ley',
    ],
    senales: [
      'Calcula la planilla en una hoja de Excel heredada que nadie entiende',
      'Le ha pasado pagar de menos y tener que corregirlo con el empleado delante',
      'Tiene una liquidación pendiente y no sabe cuánto le corresponde',
    ],
    faqs: [
      {
        p: '¿Desde cuántos empleados conviene?',
        r: 'Desde uno. Con un solo empleado ya hay que inscribirlo, calcular su cuota, presentar por SIPE y provisionar el décimo. El número de empleados no cambia las obligaciones, solo el volumen.',
      },
      {
        p: '¿Cuánto cuesta realmente un empleado?',
        r: 'Bastante más que su salario: hay que sumar la cuota patronal del Seguro Social, el riesgo profesional, el décimo tercer mes y la provisión de prima de antigüedad. Ese cálculo se lo entregamos antes de contratar, para que no haya sorpresas.',
      },
      {
        p: '¿Se encargan también de las liquidaciones?',
        r: 'Sí, y es donde más conviene tener a alguien que sepa: una liquidación mal calculada es la vía más rápida a una demanda laboral.',
      },
    ],
  },
  {
    slug: 'servicio-de-mensajeria-y-tramites-empresariales-en-panama',
    nombre: 'Mensajería y Trámites',
    titulo: 'Trámites Empresariales y Mensajería en Panamá | Gestoría — KL Contable',
    descripcion:
      'Gestión de trámites empresariales en Panamá: paz y salvos, avisos de operación, registros y diligencias. Nos hacemos las colas por usted.',
    h1: 'Mensajería y trámites empresariales en Panamá',
    gancho: 'Las colas y las ventanillas las hacemos nosotros. Usted siga con su negocio.',
    resumen: 'Nos ocupamos de las colas, las ventanillas y los papeles.',
    icono: 'sobre',
    paraQuien:
      'Para el empresario cuyo tiempo vale más que una mañana entera en una fila, y para quien está fuera de la ciudad y necesita a alguien de confianza que gestione en persona.',
    incluye: [
      'Paz y salvos y certificaciones ante entidades públicas',
      'Aviso de operación y trámites en Panamá Emprende',
      'Diligencias en el Registro Público y en municipios',
      'Entrega y recogida de documentos, con confirmación de cada paso',
    ],
    senales: [
      'Tiene un trámite parado hace semanas por no poder ir en persona',
      'Perdió una mañana en una fila para que le faltara un papel',
      'Opera desde fuera de Panamá y necesita quien gestione allí',
    ],
    faqs: [
      {
        p: '¿Puedo contratarlo sin llevar la contabilidad con ustedes?',
        r: 'Sí, es un servicio independiente.',
      },
      {
        p: '¿Cómo sé en qué va mi trámite?',
        r: 'Le avisamos en cada paso por WhatsApp, con el comprobante cuando lo hay. La incertidumbre es la mitad del problema de un trámite.',
      },
      {
        p: '¿Qué pasa si la entidad rechaza el trámite?',
        r: 'Se le informa el motivo exacto y qué falta. Muchos rechazos son por un documento vencido o un formulario mal llenado, y se resuelven en una segunda vuelta.',
      },
    ],
  },
];

// Los cuatro que faltaban frente al prototipo de AI Studio. Viven en su propio
// fichero porque sus slugs son nuevos y en espanol: los seis de arriba llevan
// el slug heredado y no se tocan.
import { SERVICIOS_NUEVOS } from './servicios-nuevos';

/** Los diez servicios, que es lo que ve la web. */
export const TODOS: Servicio[] = [...SERVICIOS, ...SERVICIOS_NUEVOS];

export const porSlug = (slug: string) => TODOS.find((s) => s.slug === slug);
