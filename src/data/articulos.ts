/**
 * Los artículos del blog.
 *
 * Cada uno responde UNA pregunta que un empresario panameño escribe en Google
 * tal cual. No son artículos de relleno: si el título promete una respuesta, el
 * texto la da, y si la respuesta depende de un dato que no está verificado, se
 * dice en vez de inventarlo.
 *
 * Ninguno cita porcentajes o fechas que no estén en `fiscal.ts` con su fuente.
 * Los que necesitan esos datos los piden por WhatsApp en vez de estimarlos.
 */
import type { Faq } from './servicios';
import { ARTICULOS_A } from './articulos-a';
import { ARTICULOS_B } from './articulos-b';
import { ARTICULOS_C } from './articulos-c';

/**
 * Un enlace destacado al final de una sección: se ve como un recuadro, con una
 * frase opcional antes (`detalle`) y letra chica debajo (`nota`), por ejemplo
 * quién hace el producto al que se enlaza. Los párrafos siguen siendo texto
 * plano: el enlace va aquí para no tocar cómo se pinta cada artículo.
 */
export type Enlace = { texto: string; href: string; detalle?: string; nota?: string };
export type Seccion = { t: string; p: string[]; enlace?: Enlace };

export type Articulo = {
  slug: string;
  titulo: string;
  descripcion: string;
  h1: string;
  entradilla: string;
  fecha: string;
  minutos: number;
  secciones: Seccion[];
  servicio?: string;
  /**
   * La respuesta directa a la pregunta del título, en 2-3 frases que se
   * entienden solas. Va arriba del todo: es lo que Google saca en el fragmento
   * destacado y lo que un asistente de IA cita cuando le preguntan lo mismo.
   */
  resumen?: string;
  /** Lo esencial en viñetas, para quien solo lee en diagonal. */
  claves?: string[];
  /** Preguntas relacionadas, visibles y declaradas como `FAQPage`. */
  faqs?: Faq[];
  /** Fecha de la última revisión del contenido, si es posterior a `fecha`. */
  actualizado?: string;
};

const ORIGINALES: Articulo[] = [
  {
    slug: 'cuanto-cuesta-un-empleado-en-panama',
    titulo: 'Cuánto Cuesta Realmente un Empleado en Panamá | KL Contable',
    descripcion:
      'Cuánto cuesta un empleado en Panamá además del salario: cuota patronal a la CSS, riesgo profesional y provisiones. Pida el cálculo real antes de contratar.',
    h1: 'Cuánto cuesta realmente un empleado en Panamá',
    entradilla:
      'La cifra que un empresario tiene en la cabeza casi nunca es la que acaba pagando. Y la diferencia no es pequeña.',
    fecha: '2026-08-17',
    minutos: 5,
    servicio: 'servicios-de-planilla-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'En Panamá, un empleado cuesta bastante más que su salario. Encima, la empresa paga la cuota patronal a la CSS (13.25 % hasta el 28 de febrero de 2027, según la Ley 462 de 2025), el seguro educativo, la prima de riesgo profesional y las provisiones de décimo tercer mes, vacaciones y prima de antigüedad. El total exacto depende del salario y de la actividad.',
    claves: [
      'La cuota patronal a la CSS la paga la empresa aparte del 9.75 % que se le descuenta al trabajador de su salario.',
      'Según la Ley 462 de 2025, la cuota patronal es del 13.25 % hasta el 28 de febrero de 2027, del 14.25 % hasta el 28 de febrero de 2029 y del 15.25 % después.',
      'La prima de riesgo profesional depende de la actividad: no cuesta lo mismo un puesto de oficina que uno de obra.',
      'El décimo tercer mes, las vacaciones y la prima de antigüedad se generan cada mes aunque no se paguen cada mes, así que conviene apartarlos.',
      'Lo prudente es pedir el cálculo completo del costo antes de contratar, no después.',
    ],
    faqs: [
      {
        p: '¿Cuánto es la cuota patronal de la CSS en Panamá?',
        r: 'Es del 13.25 % hasta el 28 de febrero de 2027, según la Ley 462 de 18 de marzo de 2025. Después sube al 14.25 % hasta el 28 de febrero de 2029 y, a partir de ahí, al 15.25 %.',
      },
      {
        p: '¿Cuánto se le descuenta al trabajador para el Seguro Social en Panamá?',
        r: 'El 9.75 % de su salario. Es un descuento al trabajador y no sustituye a la cuota patronal, que la empresa paga aparte.',
      },
      {
        p: '¿Qué provisiones debe apartar una empresa por cada empleado?',
        r: 'Las del décimo tercer mes, las vacaciones y la prima de antigüedad. Se generan todos los meses aunque se paguen en otros momentos, y si no se apartan llegan de golpe.',
      },
      {
        p: '¿Puedo saber el costo de un empleado antes de contratarlo?',
        r: 'Sí. Con el salario que piensa ofrecer y la actividad de su empresa se calcula el costo mensual y anual. Escríbanos por WhatsApp y se lo damos sin costo.',
      },
    ],
    secciones: [
      {
        t: 'El salario es el punto de partida, no el total',
        p: [
          'Cuando alguien decide contratar, hace la cuenta con el salario acordado. Es el error más común y el más caro, porque encima de esa cifra la ley panameña añade varias obligaciones que no son opcionales ni negociables.',
          'La consecuencia práctica: una empresa que presupuestó por el salario descubre al segundo o tercer mes que le falta dinero, y ahí empiezan los atrasos con la Caja de Seguro Social, que es exactamente donde no conviene tenerlos.',
        ],
      },
      {
        t: 'Qué se suma al salario',
        p: [
          'Por un lado está la cuota patronal al Seguro Social, que la paga la empresa aparte de lo que se le descuenta al trabajador de su salario. Son dos cosas distintas y se confunden mucho.',
          'A eso se le añade el seguro educativo, la prima de riesgo profesional —que depende del tipo de actividad, porque no es lo mismo una oficina que una obra— y las provisiones que hay que ir guardando: el décimo tercer mes, las vacaciones y la prima de antigüedad.',
          'Esas provisiones son las que más sorprenden. No se pagan todos los meses, pero se generan todos los meses. Si no se apartan, llegan de golpe.',
        ],
      },
      {
        t: 'La cuota patronal a la CSS subió en 2025',
        p: [
          'La cuota patronal al Seguro Social subió con la reforma de 2025 y va a seguir subiendo de forma escalonada en 2027 y en 2029. Si usted hizo sus cuentas con los porcentajes de hace dos años, están desactualizadas.',
          'Es el tipo de cambio que no se anuncia por la puerta grande y que descoloca a quien planificó su nómina con la tabla vieja.',
        ],
      },
      {
        t: 'Qué hacer antes de contratar',
        p: [
          'Pida el cálculo completo antes de firmar, no después. Con el salario que piensa ofrecer y el tipo de actividad de su empresa, se puede saber con precisión cuánto le costará esa persona al mes y cuánto al año.',
          'Se lo damos sin costo y sin compromiso: escríbanos por WhatsApp con el puesto y el salario que tiene en mente y le devolvemos la cifra real.',
        ],
      },
    ],
  },
  {
    slug: 'que-pasa-si-presento-tarde-a-la-dgi',
    titulo: 'Presentar Tarde a la DGI: Qué Pasa y Qué Hacer | KL Contable',
    descripcion:
      'Qué pasa si presenta tarde una declaración a la DGI en Panamá: cómo crece el recargo por mora y qué hacer, paso a paso, si ya se le pasó la fecha.',
    h1: 'Qué pasa si presento tarde una declaración a la DGI',
    entradilla:
      'Casi ninguna multa que hemos visto vino de no querer pagar. Vino de enterarse tarde.',
    fecha: '2026-08-16',
    minutos: 4,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'Si presenta tarde una declaración a la DGI en Panamá, además del impuesto se le suma un recargo por mora que sigue creciendo mientras la obligación esté pendiente. Lo que conviene es saber cuanto antes qué debe y por qué concepto, ponerse al día y no dejar que se acumule otro período encima.',
    claves: [
      'Lo caro de presentar tarde casi nunca es el impuesto: es el recargo que se suma por hacerlo fuera de plazo.',
      'El recargo por mora no es una cantidad fija: crece mientras la obligación siga pendiente.',
      'Esperar a tener el dinero para ponerse al día suele salir más caro, porque cada mes que pasa la deuda aumenta.',
      'Si ya se le pasó la fecha, lo primero es saber exactamente qué se debe y por qué concepto.',
      'La forma de que no se repita es recibir el aviso antes del vencimiento, no depender de la memoria.',
    ],
    faqs: [
      {
        p: '¿Cuánto es la multa por declarar tarde en Panamá?',
        r: 'Depende del tipo de declaración, del monto y del tiempo de atraso, así que no le vamos a dar una cifra de memoria. Escríbanos por WhatsApp con su caso y le decimos qué le corresponde.',
      },
      {
        p: '¿Puedo presentar una declaración vencida a la DGI?',
        r: 'Sí, y conviene hacerlo cuanto antes. Presentar tarde tiene recargo, pero no presentar deja que ese recargo siga creciendo.',
      },
      {
        p: '¿Cómo sé si tengo declaraciones pendientes con la DGI?',
        r: 'Revisando su situación período por período: qué se presentó, qué no y qué sigue abierto. Es lo primero que hacemos cuando un cliente llega con atrasos.',
      },
      {
        p: '¿Qué hago si recibo una notificación de la DGI?',
        r: 'No la deje para después. Lo primero es entender qué conceptos incluye la cifra, porque no todo lo que aparece es necesariamente lo que termina pagándose.',
      },
    ],
    secciones: [
      {
        t: 'Lo caro casi nunca es el impuesto',
        p: [
          'Cuando un empresario recibe una notificación de la Dirección General de Ingresos, la cifra que le asusta rara vez es el impuesto en sí. Es lo que se le ha ido sumando encima por haber presentado fuera de plazo.',
          'Esa parte era completamente evitable, y es la que más rabia da, porque no compró nada con ella.',
        ],
      },
      {
        t: 'El recargo por mora crece con el tiempo',
        p: [
          'El recargo por mora no es una cantidad fija que se paga y se acabó: aumenta mientras la obligación siga pendiente. Dos meses de retraso cuestan más del doble que uno.',
          'Por eso el peor consejo que puede seguir es «lo dejo para cuando tenga el dinero». Cada mes que pasa, hace falta más dinero.',
        ],
      },
      {
        t: 'Ya se me pasó. ¿Qué hago?',
        p: [
          'Lo primero es saber exactamente qué se debe y por qué concepto. Muchas veces la cifra total incluye conceptos que se pueden ordenar, y no todo lo que aparece es lo que finalmente se paga.',
          'Lo segundo es no dejar que se acumule otro período encima. Un atraso se resuelve; dos atrasos apilados se convierten en un problema distinto.',
        ],
      },
      {
        t: 'La forma de que no vuelva a pasar',
        p: [
          'No es tener mejor memoria: es que alguien le avise antes. En nuestros clientes el aviso sale con antelación, por WhatsApp, con lo que hay que presentar y para cuándo.',
          'Suena simple porque lo es. Y es la diferencia entre pagar impuestos y pagar impuestos con recargo.',
        ],
      },
    ],
  },
  {
    slug: 'persona-natural-o-sociedad-anonima-en-panama',
    titulo: '¿Persona Natural o Sociedad Anónima en Panamá? | KL Contable',
    descripcion:
      '¿Persona natural o sociedad anónima en Panamá? La decisión depende de tres cosas: facturación, riesgo y socios. Le explicamos qué cambia con cada figura.',
    h1: '¿Persona natural o sociedad anónima?',
    entradilla:
      'Es la primera decisión que toma quien abre un negocio, y muchas veces la toma en una ventanilla, en dos minutos y sin saber qué implica.',
    fecha: '2026-08-15',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
    actualizado: '2026-09-28',
    resumen:
      'En Panamá, elegir entre persona natural y sociedad anónima depende de tres cosas: cuánto espera facturar, cuánto riesgo asume el negocio y si va a tener socios. Con varios dueños, lo sensato es la sociedad; con poca facturación y poco riesgo, mantener una sociedad puede costarle más de lo que le ahorra.',
    claves: [
      'No hay una figura que convenga a todos: la decisión depende de la facturación, el riesgo y los socios.',
      'El volumen de facturación cambia la carga fiscal de cada figura, y es una cuenta que se hace con números, no con opiniones.',
      'Como persona natural, su patrimonio personal responde por el negocio; una sociedad separa los dos patrimonios.',
      'Si va a haber más de un dueño, la sociedad anónima es lo que deja claro a quién pertenece qué.',
      'Se puede cambiar de figura después, pero cuesta más que elegir bien al principio.',
    ],
    faqs: [
      {
        p: '¿Qué conviene más para empezar un negocio en Panamá, persona natural o sociedad anónima?',
        r: 'Depende de cuánto va a facturar, del riesgo de su actividad y de si tendrá socios. Para una actividad pequeña y de poco riesgo, empezar como persona natural puede bastar; con socios o con riesgo alto, la sociedad suele ser lo sensato.',
      },
      {
        p: '¿Una sociedad anónima protege mi patrimonio personal?',
        r: 'Separa el patrimonio de la empresa del suyo, de modo que lo que debe el negocio no es, en principio, deuda personal suya. Como persona natural, esa separación no existe.',
      },
      {
        p: '¿Mantener una sociedad anónima en Panamá tiene costos aunque facture poco?',
        r: 'Sí: tiene obligaciones y trámites anuales aunque facture poco, y por eso con poca facturación puede costar más de lo que ahorra. Pídanos el cálculo para su caso por WhatsApp.',
      },
      {
        p: '¿Puedo pasar de persona natural a sociedad anónima más adelante?',
        r: 'Sí, pero exige trámites y reorganizar la contabilidad. Suele salir más barato decidirlo bien antes de abrir.',
      },
    ],
    secciones: [
      {
        t: 'No hay una respuesta buena para todos',
        p: [
          'Quien le diga que la sociedad anónima siempre conviene, o que para empezar siempre es mejor persona natural, le está dando una respuesta de plantilla. Depende de tres cosas concretas.',
        ],
      },
      {
        t: 'Cuánto espera facturar',
        p: [
          'El volumen cambia la carga fiscal de una figura y de la otra, y a partir de cierto punto la balanza se inclina. Antes de ese punto, montar y mantener una sociedad puede costarle más de lo que le ahorra.',
          'Es una cuenta que se puede hacer con números en la mano, no una cuestión de opinión.',
        ],
      },
      {
        t: 'Qué riesgo asume',
        p: [
          'Como persona natural, su patrimonio personal y el del negocio son la misma cosa. Si el negocio responde por algo, responde usted.',
          'Una sociedad separa esos dos patrimonios. Para una consultoría desde casa quizá no importe; para una empresa que maneja obra, inventario o vehículos, importa mucho.',
        ],
      },
      {
        t: 'Si va a tener socios',
        p: [
          'Aquí la respuesta es más directa: si va a haber más de un dueño, la sociedad no es una opción, es lo que evita que en dos años nadie sepa a quién le pertenece qué.',
          'Los acuerdos de palabra entre socios funcionan perfectamente hasta el día en que dejan de funcionar.',
        ],
      },
      {
        t: 'Se puede cambiar después',
        p: [
          'Sí, pero cuesta más que hacerlo bien al principio. Media hora de conversación antes de abrir ahorra bastante más que eso después.',
        ],
      },
    ],
  },
  {
    slug: 'que-gastos-puede-deducir-su-empresa-en-panama',
    titulo: 'Qué Gastos Puede Deducir su Empresa en Panamá | KL Contable',
    descripcion:
      'Qué gastos puede deducir su empresa en Panamá: la regla de fondo, el comprobante que hace falta y el error que le hace pagar más impuesto del que le toca.',
    h1: 'Qué gastos puede deducir su empresa',
    entradilla:
      'Hay empresas que pagan de más, no por generosidad, sino porque nadie les explicó qué podían restar.',
    fecha: '2026-08-14',
    minutos: 4,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'En Panamá, su empresa puede deducir los gastos relacionados con la actividad que genera sus ingresos, siempre que estén respaldados con un comprobante a nombre de la empresa. Si el gasto existe porque su negocio existe y está bien documentado, en principio se puede restar; si es personal o no tiene soporte, no, y aparece en cuanto la DGI hace una revisión.',
    claves: [
      'Un gasto es deducible cuando está relacionado con la actividad que genera el ingreso de la empresa.',
      'Sin un comprobante a nombre de la empresa y con sus datos correctos, el gasto no se puede deducir aunque sea legítimo.',
      'Mezclar gastos personales y del negocio en la misma cuenta es lo que más complica deducir bien.',
      'Aprovechar lo que la ley permite es planificación; deducir gastos ajenos a la actividad es un riesgo que sale a la luz en una revisión.',
    ],
    faqs: [
      {
        p: '¿Qué necesito para que un gasto sea deducible en Panamá?',
        r: 'Que esté relacionado con la actividad de la empresa y que tenga un comprobante válido a nombre de la empresa, con sus datos correctos. Si falta cualquiera de las dos cosas, a efectos prácticos no se puede restar.',
      },
      {
        p: '¿Puedo deducir gastos del negocio pagados con mi cuenta personal?',
        r: 'Complica mucho las cosas, porque luego hay que demostrar que el gasto era del negocio. Lo recomendable es pagar lo del negocio desde la cuenta de la empresa.',
      },
      {
        p: '¿Qué pasa si deduzco un gasto que no corresponde?',
        r: 'Si la DGI hace una revisión, ese gasto se rechaza y el impuesto se recalcula, normalmente con recargos. Por eso conviene deducir solo lo que se puede sostener con papeles.',
      },
      {
        p: '¿Cómo sé si mi empresa paga más impuesto del que le toca?',
        r: 'Revisando qué gastos de la actividad no se están registrando o no tienen el comprobante correcto. Escríbanos por WhatsApp y lo miramos con sus números.',
      },
    ],
    secciones: [
      {
        t: 'Qué hace que un gasto sea deducible',
        p: [
          'Un gasto es deducible cuando está relacionado con la actividad que genera el ingreso. Esa es la lógica, y casi todas las dudas concretas se resuelven volviendo a ella.',
          'La pregunta útil no es «¿esto se puede deducir?», sino «¿este gasto existe porque mi negocio existe?».',
        ],
      },
      {
        t: 'Sin comprobante no hay deducción',
        p: [
          'Aquí se cae la mayoría. El gasto puede ser perfectamente legítimo, pero si no está documentado como corresponde, a efectos prácticos no existe.',
          'Un comprobante a nombre de la empresa, con sus datos correctos, no es burocracia: es la diferencia entre restar ese gasto o no.',
        ],
      },
      {
        t: 'La mezcla que causa problemas',
        p: [
          'Pagar cosas del negocio con la cuenta personal y cosas personales con la del negocio es lo que más enreda las contabilidades pequeñas.',
          'Separar las cuentas no es un formalismo de contador: es lo que hace que al cierre del año se sepa qué era qué sin tener que reconstruirlo de memoria.',
        ],
      },
      {
        t: 'Dónde está el límite',
        p: [
          'Aprovechar lo que la ley permite es planificación. Registrar gastos que no corresponden a la actividad es otra cosa, y tiene fecha de caducidad: aparece en cuanto hay una revisión.',
          'Un buen contador le consigue lo primero y le quita las ganas de lo segundo.',
        ],
      },
    ],
  },
  {
    slug: 'como-elegir-contador-en-panama',
    titulo: 'Cómo Elegir un Contador en Panamá: Qué Preguntar | KL Contable',
    descripcion:
      'Cómo elegir un contador en Panamá: las preguntas que conviene hacer antes de entregarle sus números y las señales de que debe buscar en otro lado.',
    h1: 'Cómo elegir un contador en Panamá',
    entradilla:
      'Le va a entregar la información más sensible de su empresa a un desconocido. Vale la pena hacer unas preguntas antes.',
    fecha: '2026-08-13',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
    actualizado: '2026-09-28',
    resumen:
      'Para elegir un contador en Panamá, pregunte quién le va a atender, cómo le avisan de los vencimientos ante la DGI y de quién son sus documentos, y fíjese en si le explica las cosas de forma que usted las entienda. Desconfíe de quien le prometa un ahorro concreto, o que nunca tendrá una revisión, antes de ver sus números.',
    claves: [
      'Un interlocutor fijo que conozca su negocio vale más que un equipo donde cada vez le atiende alguien distinto.',
      'Un buen contador le avisa de los vencimientos antes de la fecha, sin que usted tenga que acordarse.',
      'Sus documentos son de su empresa y debe poder llevárselos completos si cambia de despacho.',
      'Si no entiende lo que le explican en la primera conversación, no va a mejorar con el tiempo.',
      'Nadie puede garantizarle un ahorro fiscal concreto ni que nunca tendrá una revisión.',
    ],
    faqs: [
      {
        p: '¿Qué preguntas hacerle a un contador antes de contratarlo?',
        r: 'Quién le va a atender, cómo le avisará de los vencimientos, de quién son los documentos y qué incluye exactamente el servicio. Una respuesta vaga a cualquiera de ellas ya es una señal.',
      },
      {
        p: '¿Qué debe hacer un contador por mi empresa en Panamá?',
        r: 'Llevar la contabilidad al día, presentar a tiempo las declaraciones ante la DGI y explicarle sus números para que usted pueda decidir. Según el caso, también la planilla y los trámites con la CSS.',
      },
      {
        p: '¿Puedo cambiar de contador si no estoy conforme?',
        r: 'Sí. Su información es de la empresa, y el despacho anterior debe entregársela completa y ordenada para que el nuevo pueda continuar.',
      },
      {
        p: '¿Es mala señal que un contador prometa pagar menos impuestos?',
        r: 'Si lo promete antes de ver sus números, sí. Un buen contador aprovecha lo que la ley permite, pero no puede comprometer un resultado que no controla.',
      },
    ],
    secciones: [
      {
        t: 'Pregunte quién le va a atender',
        p: [
          'No es lo mismo tener un interlocutor fijo que conoce su negocio, que caer cada vez en una persona distinta que tiene que releer su expediente.',
          'Si la respuesta es vaga, ya sabe qué va a pasar cuando tenga una urgencia.',
        ],
      },
      {
        t: 'Pregunte cómo avisan de los vencimientos',
        p: [
          'La respuesta correcta incluye la palabra «antes». Si el sistema consiste en que usted se acuerde y llame, el sistema es usted.',
        ],
      },
      {
        t: 'Pregunte de quién son sus documentos',
        p: [
          'De la empresa, siempre. Si algún día decide cambiar de despacho, debe poder llevarse su información completa y ordenada.',
          'Que esto suene obvio no quiere decir que siempre ocurra. Preguntarlo al principio evita un problema desagradable al final.',
        ],
      },
      {
        t: 'Fíjese en cómo le explican las cosas',
        p: [
          'Si en la primera conversación no entiende nada de lo que le dicen, no va a mejorar con el tiempo. Un buen contador traduce; uno que solo repite tecnicismos le está enseñando el vocabulario, no ayudándole a decidir.',
        ],
      },
      {
        t: 'Desconfíe de quien promete lo que no controla',
        p: [
          'Nadie puede garantizarle que nunca tendrá una revisión, ni prometerle un ahorro fiscal concreto antes de ver sus números.',
          'La promesa que sí se puede cumplir es más aburrida: presentar bien y a tiempo.',
        ],
      },
    ],
  },
  {
    slug: 'contabilidad-atrasada-que-hacer',
    titulo: 'Contabilidad Atrasada en Panamá: Qué Hacer | KL Contable',
    descripcion:
      'Contabilidad atrasada en Panamá: por dónde empezar, qué se ordena primero para evitar recargos de la DGI y de qué depende el tiempo para ponerse al día.',
    h1: 'Tengo la contabilidad atrasada. ¿Qué hago?',
    entradilla:
      'Es lo que más llega a un despacho contable, y casi siempre viene con una disculpa que no hace falta.',
    fecha: '2026-08-12',
    minutos: 4,
    servicio: 'servicios-de-contabilidad-outsourcing-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'Si tiene la contabilidad atrasada en Panamá, lo primero es medir qué períodos faltan, qué se presentó ante la DGI y qué obligaciones siguen abiertas. Después se ordena lo pendiente empezando por lo que corre riesgo de recargo, mientras el mes en curso se mantiene al día. Con los comprobantes disponibles, suele ser cuestión de semanas.',
    claves: [
      'Una contabilidad atrasada es un caso común y tiene solución; lo que empeora las cosas es dejar pasar más tiempo.',
      'El primer paso es un diagnóstico: qué períodos faltan, qué se presentó y qué sigue abierto.',
      'Se ordena primero lo que corre riesgo de recargo y, en paralelo, se deja el mes corriente al día.',
      'El tiempo para ponerse al día depende de cuántos períodos falten y del estado de los comprobantes.',
    ],
    faqs: [
      {
        p: '¿Cuánto se tarda en poner al día una contabilidad atrasada?',
        r: 'Depende de cuántos períodos falten y de en qué estado esté la documentación. Con los comprobantes disponibles, suele ser cuestión de semanas.',
      },
      {
        p: '¿Qué documentos necesito para ponerme al día con la contabilidad?',
        r: 'Las facturas de compras y ventas, los estados de cuenta bancarios y lo que se haya presentado ante la DGI en esos períodos. Si falta algo, se reconstruye en lo posible a partir de lo que haya.',
      },
      {
        p: '¿Me pueden multar por tener la contabilidad atrasada en Panamá?',
        r: 'Si hay declaraciones sin presentar, se generan recargos que crecen mientras sigan pendientes. Por eso se empieza por lo que corre ese riesgo.',
      },
      {
        p: '¿Puedo cambiar de contador si tengo la contabilidad atrasada?',
        r: 'Sí. Es uno de los momentos más habituales para hacerlo, y el nuevo despacho empieza por el diagnóstico de lo pendiente.',
      },
    ],
    secciones: [
      {
        t: 'Tener la contabilidad atrasada es más común de lo que cree',
        p: [
          'Las contabilidades se atrasan por motivos normales. El contador anterior renunció, el negocio creció más rápido de lo previsto, hubo un año complicado.',
          'Lo que sí es un error es dejarlo pasar otro trimestre por vergüenza. El atraso no mejora solo.',
        ],
      },
      {
        t: 'Saber cuánto hay pendiente',
        p: [
          'Antes de arreglar nada hay que medir: qué períodos faltan, qué se presentó y qué no, y qué obligaciones siguen abiertas.',
          'Ese diagnóstico suele ser menos grave de lo que el dueño teme, porque el miedo trabaja con estimaciones y aquí se trabaja con datos.',
        ],
      },
      {
        t: 'Ordenar hacia atrás y sostener hacia adelante',
        p: [
          'Las dos cosas a la vez. Ponerse al día con lo viejo mientras lo nuevo se sigue atrasando es correr en una cinta.',
          'Lo habitual es cerrar primero lo que corre riesgo de recargo y en paralelo dejar el mes corriente al día.',
        ],
      },
      {
        t: 'Cuánto tarda ponerse al día',
        p: [
          'Depende de cuántos períodos falten y de en qué estado esté la documentación. Con los comprobantes disponibles, es cuestión de semanas.',
          'Escríbanos con cuánto tiempo lleva sin presentar y le decimos qué tan grande es el trabajo. Saberlo ya quita la mitad del peso.',
        ],
      },
    ],
  },
  {
    slug: 'que-pide-un-banco-panameno-para-dar-credito',
    titulo: 'Qué Pide un Banco en Panamá para Dar un Crédito | KL Contable',
    descripcion:
      'Qué pide un banco en Panamá para dar un crédito a su empresa: estados financieros, a veces auditados, y estar al día con la DGI. Cómo llegar preparado.',
    h1: 'Qué pide un banco panameño para dar un crédito a una empresa',
    entradilla:
      'El crédito no se decide el día que usted lo pide. Se decide con los papeles que lleva ese día.',
    fecha: '2026-08-11',
    minutos: 4,
    servicio: 'servicios-de-auditoria-contable-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'Para dar un crédito a una empresa, un banco en Panamá suele pedir estados financieros bien preparados y coherentes con lo declarado a la DGI, a veces auditados por un contador público independiente, y la constancia de estar al día con sus obligaciones fiscales. Qué exige exactamente depende del banco y del monto solicitado.',
    claves: [
      'Los estados financieros son lo primero que revisa el banco, y deben cuadrar con lo que la empresa declaró a la DGI.',
      'Según el monto y el banco, pueden exigir estados financieros auditados por un contador público independiente.',
      'Estar al día con la DGI es un requisito habitual, y las obligaciones pendientes pueden frenar la solicitud.',
      'Una empresa con la contabilidad ordenada está en mejor posición para negociar las condiciones del crédito.',
    ],
    faqs: [
      {
        p: '¿Qué documentos piden los bancos en Panamá para un préstamo empresarial?',
        r: 'Normalmente estados financieros, declaraciones de renta presentadas y constancia de estar al día con la DGI, además de la documentación de la sociedad. Cada banco tiene su lista, así que conviene pedirla antes de empezar.',
      },
      {
        p: '¿Los estados financieros tienen que estar auditados para pedir un crédito?',
        r: 'No siempre: depende del banco y del monto. Cuando lo exigen, la auditoría la hace un contador público independiente y lleva tiempo, así que conviene preguntarlo al principio.',
      },
      {
        p: '¿Por qué un banco puede rechazar el crédito de mi empresa?',
        r: 'Dos motivos habituales son unos estados financieros que no cuadran con lo declarado a la DGI y tener obligaciones fiscales pendientes. Ambos se pueden ordenar antes de presentar la solicitud.',
      },
      {
        p: '¿Con cuánta antelación debo preparar los papeles para pedir un crédito?',
        r: 'Con la mayor posible, no el mes anterior. Si hay que auditar estados financieros o ponerse al día con la DGI, eso no se resuelve en una semana.',
      },
    ],
    secciones: [
      {
        t: 'Estados financieros que se sostengan',
        p: [
          'Es lo primero que miran, y no solo el resultado: miran si están bien preparados y si cuadran con lo que la empresa declaró.',
          'Unos estados financieros que dicen una cosa y unas declaraciones que dicen otra son la forma más rápida de que una solicitud se caiga.',
        ],
      },
      {
        t: 'Estados financieros auditados, según el caso',
        p: [
          'Según el monto y el banco, pueden exigir que un contador público independiente los haya revisado y emitido su opinión.',
          'Eso no se improvisa en una semana, así que conviene preguntarlo antes de empezar el trámite y no a mitad de camino.',
        ],
      },
      {
        t: 'Estar al día con la DGI',
        p: [
          'Un paz y salvo o la constancia de estar al día es un requisito habitual. Si hay obligaciones pendientes, aparecen aquí.',
          'Es otra razón para no dejar atrasos abiertos: bloquean cosas que no tienen nada que ver con los impuestos.',
        ],
      },
      {
        t: 'Cómo llegar preparado',
        p: [
          'Los bancos no premian la improvisación. Una empresa con la contabilidad al día, sus declaraciones presentadas y sus papeles ordenados negocia mejores condiciones, no solo aprueba más rápido.',
          'Si está pensando en pedir financiamiento este año, empiece a ordenar ahora y no el mes anterior.',
        ],
      },
    ],
  },
  {
    slug: 'necesito-declarar-itbms',
    titulo: '¿Tengo que Declarar ITBMS en Panamá? | KL Contable',
    descripcion:
      '¿Tiene que declarar ITBMS en Panamá? Le explicamos de qué depende, el error que sale más caro y cómo salir de dudas hoy con solo dos datos de su negocio.',
    h1: '¿Tengo que declarar ITBMS?',
    entradilla:
      'Es de las dudas que más nos llegan, y de las que peor envejecen cuando no se resuelven.',
    fecha: '2026-08-10',
    minutos: 4,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'En Panamá, tiene que declarar ITBMS si su actividad está gravada y su facturación alcanza el umbral que marca la norma; no todas las actividades están gravadas ni todos los que facturan quedan obligados desde el primer día. Con dos datos, a qué se dedica y cuánto factura al mes, se puede responder con precisión.',
    claves: [
      'El ITBMS es el impuesto sobre la transferencia de bienes y la prestación de servicios en Panamá: lo cobra la empresa y lo entrega al Estado.',
      'Estar obligado a declararlo depende de su actividad y de su nivel de facturación.',
      'El error más caro es cobrar el ITBMS y no declararlo, porque ese dinero nunca fue de la empresa.',
      'No cobrarlo cuando correspondía también cuesta: el impuesto termina saliendo del bolsillo de la empresa.',
      'Como los umbrales y las excepciones cambian, conviene confirmarlo con alguien que trabaje con ellos todos los meses.',
    ],
    faqs: [
      {
        p: '¿Qué es el ITBMS en Panamá?',
        r: 'Es el Impuesto de Transferencia de Bienes Corporales Muebles y la Prestación de Servicios. La empresa lo cobra a su cliente y luego lo entrega a la DGI.',
      },
      {
        p: '¿Todas las actividades pagan ITBMS en Panamá?',
        r: 'No. Hay actividades gravadas y otras que no lo están, y además influye el nivel de facturación. Por eso la respuesta depende de su caso concreto.',
      },
      {
        p: '¿Qué pasa si cobré ITBMS y no lo declaré?',
        r: 'La obligación sigue existiendo aunque el dinero se haya gastado, y se le suman recargos mientras siga pendiente. Conviene regularizarlo cuanto antes.',
      },
      {
        p: '¿Cómo sé si tengo que cobrar ITBMS a mis clientes?',
        r: 'Con su actividad y su facturación mensual se puede saber. Escríbanos por WhatsApp con esos dos datos y le respondemos sin costo.',
      },
    ],
    secciones: [
      {
        t: 'Qué es, en una frase',
        p: [
          'El ITBMS es el impuesto que se aplica sobre la transferencia de bienes y la prestación de servicios en Panamá. Lo cobra la empresa a su cliente y luego lo entrega al Estado.',
          'La idea clave: ese dinero nunca fue suyo. Pasa por su cuenta, pero está de camino a otro sitio.',
        ],
      },
      {
        t: 'De qué depende que le corresponda',
        p: [
          'Depende de su actividad y de su nivel de facturación. No todas las actividades están gravadas, y no todos los que facturan quedan obligados desde el primer día.',
          'Como los umbrales y las excepciones cambian, es una pregunta que conviene hacerle a alguien que trabaje con eso todos los meses en vez de deducirla de un foro.',
        ],
      },
      {
        t: 'El error que sale caro',
        p: [
          'Cobrarlo y no declararlo. Ahí el dinero entró a la empresa, se gastó como si fuera propio, y la obligación siguió existiendo.',
          'El otro error, menos grave pero también costoso, es no cobrarlo cuando correspondía: entonces sale del bolsillo de la empresa.',
        ],
      },
      {
        t: 'Cómo salir de dudas hoy',
        p: [
          'Con dos datos —a qué se dedica y cuánto factura al mes— se puede responder con precisión. Escríbanos por WhatsApp y se lo decimos sin costo.',
        ],
      },
    ],
  },
  {
    slug: 'obligaciones-de-una-sociedad-inactiva-en-panama',
    titulo: 'Sociedad Inactiva en Panamá: Sus Obligaciones | KL Contable',
    descripcion:
      'Una sociedad inactiva en Panamá sigue teniendo obligaciones aunque no facture. Qué se acumula sin avisar y cuándo conviene mantenerla o cerrarla en regla.',
    h1: 'Tengo una sociedad que no opera. ¿Tengo obligaciones?',
    entradilla:
      'Es la sorpresa más frecuente entre quienes abrieron una sociedad panameña «por si acaso».',
    fecha: '2026-08-09',
    minutos: 4,
    servicio: 'servicio-de-mensajeria-y-tramites-empresariales-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'Sí. En Panamá, una sociedad que no opera sigue teniendo obligaciones mientras exista: sigue registrada, tiene un estatus que mantener ante el Estado y sus pendientes se acumulan aunque nadie avise. Si piensa usarla, conviene mantenerla al día; si no, lo sensato es cerrarla en regla, porque abandonarla no la elimina.',
    claves: [
      'Una sociedad panameña no deja de tener obligaciones porque no facture: mientras exista, tiene un estatus que mantener.',
      'Estas obligaciones no se avisan: se descubren el día que necesita usar la sociedad para vender, abrir una cuenta o hacer un trámite.',
      'Si va a usarla algún día, mantenerla al día cuesta poco y evita acumulaciones caras.',
      'Si no la va a usar, lo sensato es cerrarla en regla, porque abandonarla no la elimina.',
    ],
    faqs: [
      {
        p: '¿Una sociedad anónima sin operaciones tiene que pagar la tasa única en Panamá?',
        r: 'Sí. La tasa única anual se debe mientras la sociedad exista, opere o no, y lo que no se paga se acumula con recargos.',
      },
      {
        p: '¿Qué pasa si no mantengo al día una sociedad inactiva?',
        r: 'Los pendientes se acumulan durante años sin que nadie avise, y hay que regularizarlos antes de poder usarla para cualquier trámite.',
      },
      {
        p: '¿Cómo cerrar una sociedad anónima que no uso en Panamá?',
        r: 'Se pone al día con lo pendiente y después se disuelve formalmente, inscribiendo la disolución en el Registro Público. Escríbanos por WhatsApp y le decimos qué le falta a la suya.',
      },
      {
        p: '¿Puedo reactivar una sociedad que dejé abandonada?',
        r: 'En la mayoría de los casos sí, poniéndola al día con todo lo que se haya acumulado. Cuanto más tiempo pasa, más cuesta.',
      },
    ],
    secciones: [
      {
        t: 'Existir ya genera obligaciones',
        p: [
          'Una sociedad no deja de existir porque no facture. Sigue registrada, sigue teniendo un estatus que mantener y sigue apareciendo en los sistemas del Estado.',
          'La idea de que «como no opera, no hay nada que hacer» es la que produce las acumulaciones más caras, porque durante años nadie mira.',
        ],
      },
      {
        t: 'Lo que se acumula sin avisar',
        p: [
          'El problema de estas obligaciones es que no llaman a la puerta. Nadie le escribe cada año recordándole que su sociedad dormida sigue ahí.',
          'El aviso llega el día que necesita usarla —vender algo, abrir una cuenta, hacer un trámite— y descubre que primero hay que ponerla al día.',
        ],
      },
      {
        t: 'Dos caminos honestos',
        p: [
          'Si va a usarla algún día, manténgala al día: cuesta poco al año y evita el susto.',
          'Si no la va a usar nunca, plantéese cerrarla en condiciones en vez de dejarla abandonada. Abandonar una sociedad no la elimina, solo la convierte en una deuda que espera.',
        ],
      },
    ],
  },
  {
    slug: 'abrir-empresa-en-panama-siendo-extranjero',
    titulo: 'Abrir una Empresa en Panamá Siendo Extranjero | KL Contable',
    descripcion:
      'Abrir una empresa en Panamá siendo extranjero: lo que viene después de constituir, los trámites en persona, la cuenta bancaria y cómo presupuestar el año.',
    h1: 'Abrir una empresa en Panamá siendo extranjero',
    entradilla:
      'Constituir la sociedad es la parte fácil y rápida. Lo que viene después es lo que conviene entender antes de empezar.',
    fecha: '2026-08-08',
    minutos: 5,
    servicio: 'servicio-de-mensajeria-y-tramites-empresariales-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'Un extranjero puede abrir una empresa en Panamá, y constituir la sociedad es la parte rápida. Lo que conviene prever es lo que viene después: obligaciones locales que corren aunque usted viva fuera, trámites que exigen presentarse en persona ante las entidades y una cuenta bancaria que suele ser lo más lento. Presupueste el primer año completo antes de empezar.',
    claves: [
      'Constituir una sociedad en Panamá es relativamente rápido, pero desde ese día empiezan a correr obligaciones locales.',
      'Muchos trámites panameños todavía exigen que alguien se presente en persona, así que necesitará a alguien en el país.',
      'Abrir la cuenta bancaria suele ser lo más lento y depende de la actividad y la documentación de la empresa.',
      'Conviene calcular antes lo que cuesta mantener la empresa al día durante un año: obligaciones, trámites y contabilidad.',
    ],
    faqs: [
      {
        p: '¿Puede un extranjero ser dueño de una empresa en Panamá?',
        r: 'En general sí, aunque hay actividades que la ley reserva a panameños, como el comercio al por menor. Conviene revisar la suya antes de constituir.',
      },
      {
        p: '¿Necesito vivir en Panamá para tener una empresa panameña?',
        r: 'No necesariamente, pero sus obligaciones locales siguen corriendo y muchos trámites requieren presencia física. Por eso quien vive fuera suele apoyarse en alguien en el país.',
      },
      {
        p: '¿Por qué tarda tanto abrir una cuenta bancaria empresarial en Panamá?',
        r: 'Los bancos revisan con detalle la actividad, el origen de los fondos y la documentación de la empresa y de sus dueños. Llegar con todo ordenado desde el principio ayuda a acortar el proceso.',
      },
      {
        p: '¿Cuánto cuesta mantener una empresa en Panamá al año?',
        r: 'Depende de la actividad, de sus obligaciones y de los servicios que necesite. Escríbanos por WhatsApp y le damos la cifra para su caso antes de constituir.',
      },
    ],
    secciones: [
      {
        t: 'La constitución no es el final',
        p: [
          'Panamá tiene fama de facilitar la apertura de sociedades, y es cierta. El malentendido aparece después: mucha gente asume que con la sociedad constituida ya está todo resuelto.',
          'Desde ese momento empiezan a correr obligaciones locales que no se detienen porque el dueño viva en otro país.',
        ],
      },
      {
        t: 'Lo que casi nadie le cuenta: las ventanillas',
        p: [
          'Buena parte de los trámites panameños siguen requiriendo que alguien se presente físicamente. Documentos que se recogen en persona, filas, entidades con horarios concretos.',
          'Si usted no está en el país, necesita a alguien que vaya. No es un lujo: es la diferencia entre un trámite de tres días y uno de tres meses.',
        ],
      },
      {
        t: 'La cuenta bancaria, la parte más lenta',
        p: [
          'Suele ser la parte más lenta del proceso, y depende bastante de la actividad de la empresa y de la documentación que se presente.',
          'Llegar con la contabilidad ordenada desde el principio ayuda más de lo que parece.',
        ],
      },
      {
        t: 'Presupueste el año completo',
        p: [
          'Antes de constituir, pida el cálculo de lo que le costará mantener la empresa al día durante un año: obligaciones, trámites y contabilidad.',
          'Es una cifra que se puede dar con precisión, y saberla antes evita la sensación de que aparecen costos nuevos cada trimestre.',
        ],
      },
    ],
  },
  {
    slug: 'que-es-el-decimo-tercer-mes-en-panama',
    titulo: 'Décimo Tercer Mes en Panamá: Cómo Funciona | KL Contable',
    descripcion:
      'Décimo tercer mes en Panamá: por qué es una obligación laboral y no un bono, cómo se genera cada mes, cómo provisionarlo y qué entra en una liquidación.',
    h1: 'El décimo tercer mes: cómo funciona',
    entradilla:
      'Se genera todos los meses aunque se pague en tres momentos del año. Ahí está el problema para quien no lo aparta.',
    fecha: '2026-08-07',
    minutos: 4,
    servicio: 'servicios-de-planilla-en-panama',
    actualizado: '2026-09-28',
    resumen:
      'El décimo tercer mes en Panamá es una obligación laboral, no un bono: cada trabajador lo va generando con cada mes trabajado y la empresa lo paga en fechas fijas del año. Como se acumula aunque todavía no se pague, lo prudente es provisionarlo cada mes. Si el trabajador sale, su liquidación incluye la parte generada y no pagada.',
    claves: [
      'El décimo tercer mes es una obligación laboral en Panamá, no una gratificación que la empresa decide según el año.',
      'Se genera con cada mes trabajado, aunque se pague en fechas concretas del año.',
      'Apartar cada mes la parte proporcional evita que el pago llegue como un golpe a la caja.',
      'En una liquidación se incluye la parte proporcional generada y todavía no pagada.',
    ],
    faqs: [
      {
        p: '¿Quién tiene derecho al décimo tercer mes en Panamá?',
        r: 'Los trabajadores con relación laboral, en proporción al tiempo trabajado. No depende de que a la empresa le haya ido bien el año.',
      },
      {
        p: '¿Cómo se calcula el décimo tercer mes?',
        r: 'Se calcula sobre lo que el trabajador ha devengado, es decir, ganado, en el período correspondiente, en proporción al tiempo trabajado. Si tiene un caso concreto, escríbanos por WhatsApp y se lo revisamos.',
      },
      {
        p: '¿Se paga el décimo tercer mes en una liquidación?',
        r: 'Sí. Cuando un trabajador sale, se le paga la parte proporcional que generó y todavía no cobró.',
      },
      {
        p: '¿Qué pasa si la empresa no paga el décimo tercer mes?',
        r: 'Sigue siendo una deuda con el trabajador y puede terminar en un reclamo ante el Ministerio de Trabajo (MITRADEL). Lo que no se pagó sigue debiéndose.',
      },
    ],
    secciones: [
      {
        t: 'No es un bono discrecional',
        p: [
          'El décimo tercer mes es una obligación laboral, no una gratificación que la empresa decide según cómo haya ido el año.',
          'Confundir las dos cosas es el origen de bastantes conflictos laborales evitables.',
        ],
      },
      {
        t: 'Se genera a diario, se paga a plazos',
        p: [
          'Cada mes que un empleado trabaja, va generando su parte. El pago se hace en momentos concretos del año, pero el derecho se acumula sin parar.',
          'Por eso una empresa que no lo provisiona se encuentra con un desembolso grande justo cuando le toca, como si hubiera aparecido de la nada.',
        ],
      },
      {
        t: 'La provisión es la solución',
        p: [
          'Apartar la parte proporcional cada mes convierte un golpe en un gasto ordinario. Contablemente es simple; el problema es que casi nadie lo hace hasta que le pasa una vez.',
        ],
      },
      {
        t: 'El décimo tercer mes en una liquidación',
        p: [
          'En una liquidación entra la parte proporcional generada y no pagada. Es uno de los puntos donde más se equivocan las liquidaciones hechas a mano.',
          'Si tiene una liquidación pendiente y no está seguro del cálculo, es mejor consultarla antes de pagarla que corregirla después.',
        ],
      },
    ],
  },
  {
    slug: 'senales-de-que-su-contabilidad-tiene-problemas',
    titulo: '7 Señales de que su Contabilidad Va Mal | KL Contable',
    descripcion:
      'Siete señales de que la contabilidad de su empresa en Panamá tiene un problema, para detectarlo a tiempo y antes de que se convierta en una multa cara.',
    h1: 'Siete señales de que su contabilidad tiene un problema',
    entradilla:
      'Los problemas contables avisan antes de estallar. El detalle es que avisan bajito.',
    fecha: '2026-08-06',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
    actualizado: '2026-09-28',
    resumen:
      'Las señales más claras de que la contabilidad de su empresa en Panamá tiene un problema son: no saber si ganó dinero el mes pasado, recibir informes que no entiende, enterarse de los vencimientos de la DGI por la multa, mezclar cuentas personales y del negocio, esperar días a su contador, no conocer el costo real de cada empleado y evitar preguntar.',
    claves: [
      'Si tiene que estimar si su negocio ganó dinero el mes pasado, la contabilidad no le está sirviendo para decidir.',
      'Enterarse de un vencimiento por la notificación de la DGI significa que el aviso llegó tarde.',
      'Mezclar cuentas personales y del negocio obliga a reconstruir de memoria qué era de quién al cierre del año.',
      'Un contador que tarda días en contestar puede hacerle perder fechas que no esperan.',
      'Si evita llamar a su contador porque la conversación va a ser incómoda, el problema ya no es técnico.',
    ],
    faqs: [
      {
        p: '¿Cómo saber si mi contador está haciendo bien su trabajo?',
        r: 'Si usted entiende sus números, recibe los avisos antes de los vencimientos y le contestan a tiempo, va bien. Si se entera de las cosas por la DGI, no.',
      },
      {
        p: '¿Qué informes debería recibir de mi contador cada mes?',
        r: 'Como mínimo, uno que le diga si el negocio ganó o perdió dinero y qué obligaciones vienen. Lo importante no es cuántos reciba, sino que los entienda.',
      },
      {
        p: '¿Cuándo conviene cambiar de contador en Panamá?',
        r: 'Cuando las señales se repiten: avisos tardíos, respuestas que no llegan o informes que nadie le explica. Su información es de su empresa y puede llevársela.',
      },
    ],
    secciones: [
      {
        t: 'No sabe si su negocio ganó dinero el mes pasado',
        p: [
          'Si tiene que estimarlo, la contabilidad no le está sirviendo para lo único que debería servirle: decidir con información.',
        ],
      },
      {
        t: 'Recibe informes que no entiende',
        p: [
          'Un informe que nadie lee no es un informe, es un archivo. Y si nadie lo lee, nadie detecta cuando algo va mal en él.',
        ],
      },
      {
        t: 'Se entera de los vencimientos por la multa',
        p: [
          'El aviso debería llegar antes de la fecha. Si su fuente de información es la notificación de la DGI, ya llegó tarde por definición.',
        ],
      },
      {
        t: 'Mezcla las cuentas personales y las del negocio',
        p: [
          'Es cómodo durante seis meses y carísimo al cierre del año, cuando hay que reconstruir de memoria qué era de quién.',
        ],
      },
      {
        t: 'Su contador tarda días en contestar',
        p: [
          'En contabilidad muchas preguntas tienen fecha. Una respuesta que llega en cinco días a veces ya no sirve para nada.',
        ],
      },
      {
        t: 'No sabe cuánto le cuesta realmente cada empleado',
        p: [
          'Si su cuenta es el salario, le falta una parte importante. Y si le falta en la cuenta, le va a faltar en la caja.',
        ],
      },
      {
        t: 'Le da pereza preguntar',
        p: [
          'Esta es la más reveladora de todas. Si evita llamar a su contador porque la conversación va a ser incómoda, el problema ya no es técnico.',
          'Preguntar debería ser lo barato de la relación.',
        ],
      },
    ],
  },
];

/** Los nuevos (septiembre 2026) en archivos aparte, para no tener un fichero de 2.000 líneas. */
export const ARTICULOS: Articulo[] = [...ARTICULOS_A, ...ARTICULOS_B, ...ARTICULOS_C, ...ORIGINALES];

export const articuloPorSlug = (slug: string) => ARTICULOS.find((a) => a.slug === slug);
