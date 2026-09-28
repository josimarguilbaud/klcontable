import type { GuiaDesarrollo } from '../guias';

export const DESARROLLO: GuiaDesarrollo = {
  titulo: 'Contabilidad para Emprendedores en Panamá | KL Contable',
  descripcion:
    'Contabilidad para emprendedores en Panamá: qué decidir antes de abrir, qué trámites y obligaciones llegan con la DGI y la CSS, y cómo empezar ordenado.',
  resumen:
    'Un emprendedor en Panamá tiene que decidir antes de abrir si opera como persona natural o como sociedad, inscribirse ante la DGI, sacar su aviso de operación en Panamá Emprende y registrarse en el municipio. Después vienen las declaraciones, el posible ITBMS y, si contrata, la CSS. Qué le toca y desde cuándo depende de su figura, su actividad y su facturación, y conviene saberlo antes del primer cobro.',
  claves: [
    'La elección entre persona natural y sociedad es la decisión con más consecuencias, y conviene tomarla con números antes de abrir.',
    'Abrir un negocio en Panamá suele pasar por varias instituciones: la DGI, Panamá Emprende del MICI, el municipio y, si contrata, la CSS.',
    'Tener que declarar ITBMS depende de su actividad y de su facturación, no de que el negocio sea nuevo.',
    'Un empleado le cuesta a la empresa su salario más la cuota patronal a la CSS, que según la Ley 462 de 2025 es del 13.25 % hasta el 28 de febrero de 2027, además de otras cargas.',
    'Separar las cuentas del negocio de las personales desde el primer día evita la mayoría de los problemas contables del primer año.',
    'Llevar la contabilidad uno mismo al principio es posible; lo difícil es saber qué se presenta, cuándo y dónde.',
  ],
  secciones: [
    {
      t: 'Qué necesita saber un emprendedor antes de abrir su negocio en Panamá',
      p: [
        'Casi todo lo que complica el primer año de un negocio se decide en las primeras semanas: con qué figura abre, dónde se registra, qué cuenta usa para cobrar y qué papeles guarda. Son decisiones pequeñas cuando se toman y caras cuando hay que deshacerlas.',
        'No hace falta saberlo todo antes de empezar. Hace falta saber qué preguntas tienen respuesta distinta según su caso, y hacerlas a tiempo.',
        'Esta guía recorre ese camino en orden: la figura, los registros, los impuestos, el primer empleado y el orden del día a día. Donde la respuesta depende de sus datos, se lo decimos en vez de darle una cifra de plantilla.',
      ],
      imagen: {
        alt: 'Emprendedora revisando planes de su negocio en una mesa de café en Ciudad de Panamá',
        escena:
          'A young entrepreneur sketching plans in a blank notebook at a small café table in Casco Viejo, Panama City, morning light through colonial shutters, seen from behind and slightly to the side. No readable text, no signs, no logos.',
      },
    },
    {
      t: 'Persona natural o sociedad anónima: cómo decidir al empezar',
      p: [
        'Es la primera decisión y la que más consecuencias tiene. Depende de tres cosas: cuánto espera facturar, cuánto riesgo asume el negocio y si va a tener socios.',
        'Como persona natural, su patrimonio personal y el del negocio son el mismo. Una sociedad separa los dos, pero tiene obligaciones y trámites anuales aunque facture poco, así que con poca facturación puede costarle más de lo que le ahorra.',
        'Si va a haber más de un dueño, la sociedad es lo que deja por escrito a quién pertenece qué. Se puede cambiar de figura más adelante, pero cuesta más que elegir bien ahora. Esa cuenta se hace con sus números en la mano, y es la conversación que conviene tener antes de ir a ninguna ventanilla.',
      ],
    },
    {
      t: 'Trámites para abrir un negocio en Panamá: DGI, Panamá Emprende y municipio',
      p: [
        'Abrir un negocio no es un solo trámite. Si abre con sociedad, primero se constituye e inscribe en el Registro Público. Después, el negocio necesita su inscripción ante la Dirección General de Ingresos (DGI), que es la que le asigna el RUC, su número de contribuyente.',
        'Para ejercer una actividad comercial o industrial hace falta el aviso de operación, que se tramita en Panamá Emprende, el sistema del Ministerio de Comercio e Industrias (MICI). Recoge quién es el titular, a qué se dedica el negocio y dónde. Y el municipio donde opera tiene su propio registro y sus propios impuestos, aparte de la DGI.',
        'El orden exacto y los requisitos cambian según la figura, la actividad y el municipio. Lo que no cambia es que cada registro tiene que describir el negocio tal como es: si el aviso dice una actividad y usted hace otra, el problema aparece en la primera inspección o en el primer trámite bancario.',
      ],
    },
    {
      t: 'Qué impuestos paga un negocio nuevo en Panamá',
      p: [
        'Un negocio nuevo convive con dos cobradores distintos: la DGI, que cobra los impuestos del Estado, y el municipio, que cobra los suyos. Estar al día con uno no dice nada del otro.',
        'Ante la DGI, lo habitual es la declaración de renta de cada año y, si le corresponde, el ITBMS. El ITBMS es el impuesto sobre la venta de bienes y la prestación de servicios: usted lo cobra a su cliente y lo entrega al Estado. Que le toque declararlo depende de su actividad y de su facturación, y no todos los que facturan quedan obligados desde el primer día.',
        'El error más caro del primer año es cobrar ITBMS y no declararlo: ese dinero nunca fue del negocio. El segundo es no cobrarlo cuando correspondía, porque entonces sale de su bolsillo. Con dos datos, a qué se dedica y cuánto espera facturar al mes, se puede saber qué le aplica.',
      ],
      imagen: {
        alt: 'Dueño de una pequeña tienda en Panamá atendiendo una venta en el mostrador',
        escena:
          'The owner of a small neighborhood shop in Panama City handing a paper bag across a wooden counter to a customer, shot from behind the customer at waist height, warm afternoon light. No readable text, no signs, no logos, no faces in focus.',
      },
    },
    {
      t: 'Facturación y comprobantes desde el primer día',
      p: [
        'La factura es la prueba de lo que vendió y de lo que gastó. Una factura de compra sin el nombre correcto de su negocio y sus datos fiscales puede no servir para deducir ese gasto, así que conviene revisarla el día que la recibe.',
        'En Panamá la facturación electrónica cambia cómo se valida cada venta: la factura pasa por un proveedor autorizado por la DGI, llamado PAC, antes de ser válida. Cuándo le toca a su negocio depende de su tipo de contribuyente y de su actividad, así que es una pregunta para hacer al abrir.',
        'El sistema para guardar comprobantes puede ser muy sencillo: un único lugar, guardarlos el mismo día y ordenarlos por mes, separando ventas de compras y gastos. Así, cuando llega el cierre, se entrega una carpeta en vez de buscar papeles.',
      ],
    },
    {
      t: 'Su primer empleado: qué cambia con la CSS',
      p: [
        'Contratar a alguien en planilla convierte al negocio en empleador ante la Caja de Seguro Social (CSS). A partir de ahí hay que reportar cada mes la planilla, hoy a través del SIPE, y pagar las cuotas.',
        'Al trabajador se le descuenta el 9.75 % de su salario para el Seguro Social. La empresa paga aparte su cuota patronal, que según la Ley 462 de 18 de marzo de 2025 es del 13.25 % hasta el 28 de febrero de 2027, del 14.25 % hasta el 28 de febrero de 2029 y del 15.25 % después. A eso se suman el seguro educativo, el riesgo profesional según la actividad y las provisiones de décimo tercer mes, vacaciones y prima de antigüedad.',
        'Por eso un empleado cuesta bastante más que su salario. Pida el cálculo completo con el salario que piensa ofrecer antes de contratar, no cuando llega la primera planilla. Y si piensa pagar por servicios profesionales en vez de planilla, conviene entender antes qué cambia y qué riesgos tiene.',
      ],
    },
    {
      t: 'Cómo llevar la contabilidad de un negocio que empieza',
      p: [
        'Lo primero es separar: una cuenta bancaria para el negocio y otra para usted. Mezclarlas es el origen de casi todos los desórdenes que vemos en el primer año, porque después nadie sabe qué gasto era de quién.',
        'Lo segundo es mirar dos números distintos: la utilidad y el flujo de caja. Un negocio puede ganar dinero en el papel y quedarse sin efectivo para pagar, sobre todo al principio, cuando se cobra tarde y se paga pronto.',
        'Puede llevar los registros usted mismo al principio, y muchos lo hacen. Lo que suele fallar no es anotar, sino saber qué se presenta, cuándo y en qué formulario. Una revisión a tiempo cuesta mucho menos que ponerse al día con la contabilidad atrasada.',
      ],
      imagen: {
        alt: 'Emprendedor separando recibos en carpetas por mes sobre un escritorio en su casa en Panamá',
        escena:
          'Hands sorting blank receipts into color-coded folders on a home desk in a Panama City apartment, a laptop closed to one side and tropical plants by the window. No readable text, no screens with letters, no logos, no faces.',
      },
    },
    {
      t: 'Cuándo contratar un contador si está empezando',
      p: [
        'Antes de abrir no hace falta un servicio mensual completo, pero sí una conversación: qué figura le conviene, qué registros necesita y qué le va a tocar declarar. Es la media hora que más ahorra.',
        'Cuando empiece a facturar con regularidad, a cobrar ITBMS o a contratar, el volumen de fechas y formularios crece rápido. Ahí suele compensar que alguien le avise antes de cada vencimiento en vez de enterarse después.',
        'Si quiere saber qué le toca a usted, escríbanos por WhatsApp con su actividad y cuánto espera facturar. Le decimos qué obligaciones tendrá y desde cuándo, antes de que se acumulen.',
      ],
    },
  ],
  pasos: [
    {
      t: 'Decida la figura con números',
      d: 'Antes de registrar nada, compare persona natural y sociedad según lo que espera facturar, el riesgo de su actividad y si tendrá socios.',
    },
    {
      t: 'Haga los registros en orden',
      d: 'Constitución en el Registro Público si abre con sociedad, inscripción ante la DGI para obtener el RUC, aviso de operación en Panamá Emprende y registro en el municipio.',
    },
    {
      t: 'Abra una cuenta solo para el negocio',
      d: 'Cobre y pague todo lo del negocio desde ella. Separar las cuentas desde el primer día evita la mayoría de los desórdenes del primer año.',
    },
    {
      t: 'Confirme qué va a declarar',
      d: 'Pregunte si su actividad y su facturación le obligan a declarar ITBMS, cómo le afecta la facturación electrónica y qué debe presentar al municipio.',
    },
    {
      t: 'Monte su sistema de comprobantes',
      d: 'Un único lugar, guardado el mismo día y ordenado por mes, separando ventas de compras y gastos.',
    },
    {
      t: 'Calcule el costo real antes de contratar',
      d: 'Con el salario que piensa ofrecer, pida el costo completo con la cuota patronal a la CSS y las provisiones antes de su primer empleado.',
    },
  ],
  faqsExtra: [
    {
      p: '¿Qué trámites necesito para abrir un negocio en Panamá?',
      r: 'Por lo general, la inscripción ante la DGI para obtener el RUC, el aviso de operación en Panamá Emprende y el registro en el municipio donde opera; si abre con sociedad, antes hay que constituirla en el Registro Público. Los requisitos concretos dependen de su figura y de su actividad.',
    },
    {
      p: '¿Qué es el RUC en Panamá y para qué lo necesito?',
      r: 'Es el Registro Único de Contribuyente, su número ante la DGI. Lo necesita para facturar, declarar impuestos y hacer la mayoría de los trámites del negocio.',
    },
    {
      p: '¿Cuánto cuesta contratar a mi primer empleado en Panamá?',
      r: 'Su salario más la cuota patronal a la CSS, que es del 13.25 % hasta el 28 de febrero de 2027 según la Ley 462 de 2025, más el seguro educativo, el riesgo profesional y las provisiones. El total depende del salario y de la actividad: escríbanos por WhatsApp y se lo calculamos.',
    },
    {
      p: '¿Puedo usar mi cuenta bancaria personal para mi negocio?',
      r: 'Poder, se puede, pero es el error más común del primer año. Mezclar cuentas hace que no se sepa qué gasto era del negocio, y ordenarlo después cuesta mucho más.',
    },
    {
      p: '¿Un emprendedor en Panamá tiene que pagar impuestos al municipio?',
      r: 'Sí. El municipio donde opera cobra sus propios impuestos, aparte de la DGI. Cuánto paga depende de su actividad, de cómo esté clasificada y del municipio.',
    },
  ],
  articulos: [
    'persona-natural-o-sociedad-anonima-en-panama',
    'que-es-el-aviso-de-operacion-en-panama',
    'necesito-declarar-itbms',
    'cuanto-cuesta-un-empleado-en-panama',
    'como-organizar-facturas-y-comprobantes',
    'utilidad-vs-flujo-de-caja',
  ],
  actualizado: '2026-09-28',
};
