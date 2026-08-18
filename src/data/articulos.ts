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
export type Seccion = { t: string; p: string[] };

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
};

export const ARTICULOS: Articulo[] = [
  {
    slug: 'cuanto-cuesta-un-empleado-en-panama',
    titulo: 'Cuánto Cuesta Realmente un Empleado en Panamá | KL Contable',
    descripcion:
      'El salario es solo una parte. Le explicamos todo lo que suma al costo real de contratar en Panamá, para que no le descuadre las cuentas al segundo mes.',
    h1: 'Cuánto cuesta realmente un empleado en Panamá',
    entradilla:
      'La cifra que un empresario tiene en la cabeza casi nunca es la que acaba pagando. Y la diferencia no es pequeña.',
    fecha: '2026-08-17',
    minutos: 5,
    servicio: 'servicios-de-planilla-en-panama',
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
        t: 'Un dato importante que cambió hace poco',
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
    titulo: 'Qué Pasa si Presento Tarde una Declaración a la DGI | KL Contable',
    descripcion:
      'Presentar fuera de plazo tiene consecuencias que crecen con el tiempo. Le explicamos qué ocurre y qué hacer si ya se le pasó la fecha.',
    h1: 'Qué pasa si presento tarde una declaración a la DGI',
    entradilla:
      'Casi ninguna multa que hemos visto vino de no querer pagar. Vino de enterarse tarde.',
    fecha: '2026-08-16',
    minutos: 4,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
    secciones: [
      {
        t: 'Lo caro casi nunca es el impuesto',
        p: [
          'Cuando un empresario recibe una notificación de la Dirección General de Ingresos, la cifra que le asusta rara vez es el impuesto en sí. Es lo que se le ha ido sumando encima por haber presentado fuera de plazo.',
          'Esa parte era completamente evitable, y es la que más rabia da, porque no compró nada con ella.',
        ],
      },
      {
        t: 'Crece con el tiempo',
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
      'La decisión que más consecuencias tiene al abrir un negocio en Panamá, y la que más se toma sin información. Le explicamos qué cambia con cada una.',
    h1: '¿Persona natural o sociedad anónima?',
    entradilla:
      'Es la primera decisión que toma quien abre un negocio, y muchas veces la toma en una ventanilla, en dos minutos y sin saber qué implica.',
    fecha: '2026-08-15',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
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
      'Muchas empresas pagan más impuesto del que les toca por no registrar gastos que sí podían deducir. Le explicamos la lógica y qué se necesita.',
    h1: 'Qué gastos puede deducir su empresa',
    entradilla:
      'Hay empresas que pagan de más, no por generosidad, sino porque nadie les explicó qué podían restar.',
    fecha: '2026-08-14',
    minutos: 4,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
    secciones: [
      {
        t: 'La regla de fondo',
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
    titulo: 'Cómo Elegir un Contador en Panamá | 7 Señales | KL Contable',
    descripcion:
      'Qué preguntar antes de entregarle sus números a alguien, y qué señales indican que conviene buscar en otro lado.',
    h1: 'Cómo elegir un contador en Panamá',
    entradilla:
      'Le va a entregar la información más sensible de su empresa a un desconocido. Vale la pena hacer unas preguntas antes.',
    fecha: '2026-08-13',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
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
    titulo: 'Tengo la Contabilidad Atrasada: Qué Hacer | KL Contable',
    descripcion:
      'Es el caso más común y tiene solución. Le explicamos por dónde se empieza a ordenar una contabilidad atrasada en Panamá.',
    h1: 'Tengo la contabilidad atrasada. ¿Qué hago?',
    entradilla:
      'Es lo que más llega a un despacho contable, y casi siempre viene con una disculpa que no hace falta.',
    fecha: '2026-08-12',
    minutos: 4,
    servicio: 'servicios-de-contabilidad-outsourcing-en-panama',
    secciones: [
      {
        t: 'Primero: no es raro',
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
        t: 'Cuánto tarda',
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
      'Los papeles contables que le van a pedir al solicitar financiamiento empresarial en Panamá, y cómo llegar preparado.',
    h1: 'Qué pide un banco panameño para dar un crédito a una empresa',
    entradilla:
      'El crédito no se decide el día que usted lo pide. Se decide con los papeles que lleva ese día.',
    fecha: '2026-08-11',
    minutos: 4,
    servicio: 'servicios-de-auditoria-contable-en-panama',
    secciones: [
      {
        t: 'Estados financieros que se sostengan',
        p: [
          'Es lo primero que miran, y no solo el resultado: miran si están bien preparados y si cuadran con lo que la empresa declaró.',
          'Unos estados financieros que dicen una cosa y unas declaraciones que dicen otra son la forma más rápida de que una solicitud se caiga.',
        ],
      },
      {
        t: 'A veces, auditados',
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
    titulo: '¿Tengo que Declarar ITBMS? | Guía Clara | KL Contable',
    descripcion:
      'Muchos empresarios no saben si les corresponde declarar ITBMS en Panamá. Le explicamos de qué depende y por qué conviene resolverlo pronto.',
    h1: '¿Tengo que declarar ITBMS?',
    entradilla:
      'Es de las dudas que más nos llegan, y de las que peor envejecen cuando no se resuelven.',
    fecha: '2026-08-10',
    minutos: 4,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
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
    titulo: 'Sociedad Inactiva en Panamá: ¿Tiene Obligaciones? | KL Contable',
    descripcion:
      'Tener una sociedad panameña que no opera no significa no tener obligaciones. Le explicamos qué sigue corriendo y qué pasa si se acumula.',
    h1: 'Tengo una sociedad que no opera. ¿Tengo obligaciones?',
    entradilla:
      'Es la sorpresa más frecuente entre quienes abrieron una sociedad panameña «por si acaso».',
    fecha: '2026-08-09',
    minutos: 4,
    servicio: 'servicio-de-mensajeria-y-tramites-empresariales-en-panama',
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
      'Qué debe saber un extranjero antes de constituir y operar una empresa en Panamá, incluido lo que casi nadie le cuenta.',
    h1: 'Abrir una empresa en Panamá siendo extranjero',
    entradilla:
      'Constituir la sociedad es la parte fácil y rápida. Lo que viene después es lo que conviene entender antes de empezar.',
    fecha: '2026-08-08',
    minutos: 5,
    servicio: 'servicio-de-mensajeria-y-tramites-empresariales-en-panama',
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
        t: 'La cuenta bancaria',
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
      'El décimo tercer mes no es un extra que se paga si el año fue bueno. Le explicamos cómo funciona y por qué hay que provisionarlo.',
    h1: 'El décimo tercer mes: cómo funciona',
    entradilla:
      'Se genera todos los meses aunque se pague en tres momentos del año. Ahí está el problema para quien no lo aparta.',
    fecha: '2026-08-07',
    minutos: 4,
    servicio: 'servicios-de-planilla-en-panama',
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
        t: 'Y cuando alguien sale',
        p: [
          'En una liquidación entra la parte proporcional generada y no pagada. Es uno de los puntos donde más se equivocan las liquidaciones hechas a mano.',
          'Si tiene una liquidación pendiente y no está seguro del cálculo, es mejor consultarla antes de pagarla que corregirla después.',
        ],
      },
    ],
  },
  {
    slug: 'senales-de-que-su-contabilidad-tiene-problemas',
    titulo: '7 Señales de que su Contabilidad Tiene un Problema | KL Contable',
    descripcion:
      'Señales tempranas de que la contabilidad de su empresa no está bien, para detectarlas antes de que se conviertan en un problema caro.',
    h1: 'Siete señales de que su contabilidad tiene un problema',
    entradilla:
      'Los problemas contables avisan antes de estallar. El detalle es que avisan bajito.',
    fecha: '2026-08-06',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
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

export const articuloPorSlug = (slug: string) => ARTICULOS.find((a) => a.slug === slug);
