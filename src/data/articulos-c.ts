import type { Articulo } from './articulos';

export const ARTICULOS_C: Articulo[] = [
  {
    slug: 'como-organizar-facturas-y-comprobantes',
    titulo: 'Cómo Organizar Facturas sin Volverse Loco | KL Contable',
    descripcion:
      'Un sistema sencillo para guardar facturas y comprobantes de su empresa en Panamá, de forma que al cierre de mes no haya que buscar nada a última hora.',
    h1: 'Cómo organizar facturas y comprobantes sin volverse loco',
    entradilla:
      'El problema casi nunca es que falten papeles. Es que están en seis sitios distintos y nadie sabe en cuál.',
    fecha: '2026-08-30',
    minutos: 4,
    servicio: 'servicios-de-contabilidad-outsourcing-en-panama',
    resumen:
      'Para organizar las facturas y comprobantes de su empresa en Panamá basta con tres hábitos: guardarlo todo en un único lugar, hacerlo el mismo día en que llega y ordenarlo por mes, separando ventas de compras y gastos. Así el cierre de mes consiste en entregar una carpeta, no en buscar papeles a última hora.',
    claves: [
      'Todos los comprobantes deben ir a un único lugar, sea una carpeta en la nube o una caja física.',
      'Un comprobante guardado el día que llega tarda segundos; buscado semanas después puede no aparecer.',
      'Ordenar por mes, y dentro de cada mes por ventas y por compras y gastos, facilita el cierre contable.',
      'Una factura sin los datos fiscales correctos de la empresa puede no servir para deducir ese gasto.',
      'El sistema tiene que funcionar aunque el dueño no esté pendiente, con reglas claras para quien hace gastos.',
    ],
    faqs: [
      {
        p: '¿Cuánto tiempo hay que guardar las facturas de una empresa en Panamá?',
        r: 'Depende del tipo de documento y de la norma que le aplique, así que conviene confirmarlo con su contador antes de desechar nada. Mientras tanto, lo prudente es no tirar ningún comprobante. Escríbanos por WhatsApp y le decimos qué aplica a su caso.',
      },
      {
        p: '¿Sirve una foto del recibo como comprobante?',
        r: 'Una foto sirve para no perder el registro y para que su contador lo tenga a tiempo. Si además hay que conservar el original o la factura electrónica depende del tipo de documento, y eso conviene confirmarlo con su contador.',
      },
      {
        p: '¿Qué datos debe tener una factura para poder deducir el gasto?',
        r: 'Como mínimo, el nombre correcto de su empresa y sus datos fiscales, además del detalle de lo comprado. Revíselo al recibirla: pedir que la corrijan semanas después cuesta mucho más.',
      },
      {
        p: '¿Es mejor guardar las facturas en papel o en digital?',
        r: 'Lo importante es que estén en un solo lugar y ordenadas por mes. Una carpeta en la nube tiene la ventaja de que otras personas pueden enviar sus comprobantes en el momento, sin esperar a volver a la oficina.',
      },
    ],
    secciones: [
      {
        t: 'Todos los comprobantes en un solo lugar',
        p: [
          'Facturas en el correo, recibos en la guantera, fotos en el teléfono del encargado y una carpeta en la oficina que nadie abre desde marzo. Así llega la documentación de muchas empresas al final de mes.',
          'La primera regla es la más aburrida y la que más funciona: todo comprobante va a un único lugar. Puede ser una carpeta en la nube o una caja física, pero una sola.',
        ],
      },
      {
        t: 'Guardarlo el mismo día',
        p: [
          'Un comprobante que se guarda el día que llega tarda diez segundos. El mismo comprobante buscado tres semanas después puede costar una tarde entera, y a veces no aparece.',
          'Si el gasto lo hace otra persona —un vendedor, un chofer—, acuerde con ella que la foto del recibo se envía en el momento, no cuando vuelva a la oficina.',
        ],
      },
      {
        t: 'Ordenar por mes, no por proveedor',
        p: [
          'La contabilidad se cierra por períodos. Si sus documentos están separados por mes, el cierre es entregar una carpeta; si están por proveedor, alguien tiene que desarmarlos y volver a armarlos.',
          'Dentro de cada mes basta con dos grupos: lo que entró (ventas) y lo que salió (compras y gastos).',
        ],
        enlace: {
          detalle: 'Si factura con un sistema, las ventas pueden salir de ahí ya ordenadas por mes. Esto es lo que conviene exigirle:',
          texto: 'Qué le pide un contador a su sistema de facturación',
          href: '/blog/que-pide-un-contador-al-sistema-de-facturacion/',
        },
      },
      {
        t: 'Revise los datos antes de guardar',
        p: [
          'Un comprobante con el nombre de la empresa mal escrito o sin sus datos fiscales puede no servir para deducir ese gasto. Mirarlo al recibirlo cuesta un segundo; pedir que lo corrijan un mes después, bastante más.',
        ],
      },
      {
        t: 'Que el sistema no dependa de usted',
        p: [
          'Si el orden existe solo porque usted se acuerda, se cae la primera semana que se enferme o se vaya de viaje. Un buen sistema es uno que funciona aunque el dueño no esté mirando.',
          'En nuestros clientes de contabilidad externa acordamos desde el primer mes cómo y cuándo nos llega la documentación. Si quiere que le ayudemos a montar el suyo, escríbanos por WhatsApp.',
        ],
      },
    ],
  },
  {
    slug: 'como-leer-estados-financieros',
    titulo: 'Cómo Leer sus Estados Financieros en 15 Minutos | KL Contable',
    descripcion:
      'Una guía sencilla para entender los estados financieros de su empresa en Panamá sin ser contador: qué mirar primero y qué preguntas hacerle a su contador.',
    h1: 'Cómo leer sus estados financieros en quince minutos',
    entradilla:
      'No hace falta entender cada línea. Hace falta saber cuáles mirar y qué preguntar cuando algo no cuadra.',
    fecha: '2026-08-28',
    minutos: 5,
    servicio: 'asesoria-contable-panama',
    resumen:
      'Para leer los estados financieros de su empresa en Panamá sin ser contador, mire tres documentos y hágale a cada uno una pregunta: el estado de resultados dice si ganó o perdió dinero, el balance general dice qué tiene y qué debe, y el flujo de efectivo dice por dónde entró y salió el dinero de verdad.',
    claves: [
      'El estado de resultados muestra si la empresa ganó o perdió dinero en un período.',
      'El balance general muestra lo que la empresa tiene y lo que debe en una fecha concreta.',
      'El flujo de efectivo explica por qué se puede tener utilidad y, aun así, quedarse sin dinero en la cuenta.',
      'Comparar con el mismo período del año anterior dice más que mirar solo la última línea.',
      'Si no entiende sus estados financieros, pida a su contador que se los explique con sus palabras.',
    ],
    faqs: [
      {
        p: '¿Cuál es la diferencia entre utilidad y flujo de efectivo?',
        r: 'La utilidad dice si el negocio ganó dinero según lo vendido y lo gastado; el flujo de efectivo dice cuánto dinero entró y salió realmente. Se puede tener utilidad y quedarse sin caja si se vende a crédito y se cobra tarde.',
      },
      {
        p: '¿Qué es el balance general de una empresa?',
        r: 'Es el documento que muestra, en una fecha concreta, lo que la empresa tiene —dinero, cuentas por cobrar, inventario, equipo— y lo que debe. Sirve para saber si puede cubrir sus deudas a corto plazo.',
      },
      {
        p: '¿Por qué mi empresa tiene ganancias pero no tiene dinero?',
        r: 'Normalmente porque el dinero está en cuentas por cobrar, en inventario o en compras de equipo. El flujo de efectivo es el documento que muestra adónde se fue.',
      },
      {
        p: '¿Qué debo preguntarle a mi contador sobre los estados financieros?',
        r: 'Qué cambió respecto al período anterior y por qué, cuánto le deben sus clientes y desde cuándo, y si el dinero disponible alcanza para lo que debe pagar pronto.',
      },
    ],
    secciones: [
      {
        t: 'Tres documentos, tres preguntas',
        p: [
          'Los estados financieros básicos son tres, y cada uno responde una pregunta distinta. El estado de resultados dice si ganó o perdió dinero en el período. El balance general dice qué tiene la empresa y qué debe en una fecha concreta. El flujo de efectivo dice por dónde entró y salió el dinero de verdad.',
          'Si solo tiene quince minutos, dedíquelos a esas tres preguntas y deje los detalles para la conversación con su contador.',
        ],
      },
      {
        t: 'Estado de resultados: mire el orden, no solo el final',
        p: [
          'La tentación es ir directo a la última línea, la utilidad. Es importante, pero dice más cómo se llegó a ella: cuánto se vendió, cuánto costó lo vendido y cuánto se fue en gastos de operación.',
          'Compárelo con el mismo período del año anterior. Una utilidad parecida con ventas mucho mayores significa que algo se está comiendo el margen, y eso vale la pena averiguarlo.',
        ],
      },
      {
        t: 'Balance general: lo que tiene contra lo que debe',
        p: [
          'Mire dos cosas. Primero, si el dinero disponible y lo que le deben sus clientes alcanza para cubrir lo que usted debe a corto plazo. Segundo, cuánto le deben sus clientes y desde cuándo: una cuenta por cobrar que no se cobra no es dinero, es una esperanza.',
        ],
      },
      {
        t: 'Flujo de efectivo: por qué gané y no tengo dinero',
        p: [
          'Es la pregunta más frecuente de un empresario, y la respuesta casi siempre está aquí. Se puede tener utilidad y quedarse sin caja si se vende a crédito y se cobra tarde, o si el dinero se fue a inventario o a comprar equipo.',
          'Ganar y tener liquidez —dinero disponible para pagar— son dos cosas distintas, y este documento es el que las separa.',
        ],
      },
      {
        t: 'Lo que debe pedirle a su contador',
        p: [
          'Unos estados financieros que usted no entiende no le sirven para decidir. Pida que se los expliquen en una conversación corta, con sus palabras, y que le señalen lo que cambió respecto al período anterior.',
          'Si quiere una segunda lectura de los suyos, escríbanos por WhatsApp y le decimos qué vemos.',
        ],
      },
    ],
  },
  {
    slug: 'cuando-necesita-mi-empresa-una-auditoria-externa',
    titulo: 'Auditoría Externa: Cuándo la Necesita su Empresa | KL Contable',
    descripcion:
      'Qué es una auditoría externa, en qué situaciones se la van a pedir a su empresa en Panamá y cómo prepararse antes de que un banco o un socio la exija.',
    h1: '¿Cuándo necesita mi empresa una auditoría externa?',
    entradilla:
      'Casi nadie la busca por gusto. Llega porque alguien la pide, y casi siempre con prisa.',
    fecha: '2026-08-26',
    minutos: 4,
    servicio: 'servicios-de-auditoria-contable-en-panama',
    resumen:
      'Una empresa en Panamá necesita una auditoría externa cuando un tercero se la exige —un banco que evalúa un crédito, un inversionista o socio nuevo, una licitación, un cliente grande o la venta de la empresa— o cuando su actividad está regulada y la norma de esa actividad lo pide. También conviene cuando hay socios que no están en el día a día.',
    claves: [
      'Una auditoría externa es la revisión de sus estados financieros por un contador público independiente, que emite una opinión sobre si reflejan razonablemente la realidad.',
      'Los bancos, inversionistas, licitaciones y clientes grandes son quienes más a menudo la exigen.',
      'Algunas actividades reguladas tienen la obligación propia de presentar estados auditados, y eso depende de a qué se dedica la empresa.',
      'Aunque nadie la pida, es útil cuando hay varios socios o cuando el dueño sospecha que algo no cuadra.',
      'Sin una contabilidad ordenada y al día no se puede auditar, así que conviene prepararse con tiempo.',
    ],
    faqs: [
      {
        p: '¿Qué diferencia hay entre auditoría interna y auditoría externa?',
        r: 'La auditoría interna la hace alguien de la propia empresa o contratado por ella para revisar sus procesos. La externa la hace un contador público independiente, que no preparó los números, y por eso su opinión tiene valor ante terceros como un banco.',
      },
      {
        p: '¿Cuánto tarda una auditoría externa en Panamá?',
        r: 'Depende del tamaño de la empresa y, sobre todo, de lo ordenada que esté su contabilidad. Si está atrasada, primero hay que ponerla al día. Escríbanos por WhatsApp con su caso y le damos una idea concreta.',
      },
      {
        p: '¿Quién puede hacer una auditoría externa en Panamá?',
        r: 'Un contador público autorizado que sea independiente de la empresa, es decir, que no haya preparado esos estados financieros ni trabaje para usted en el día a día.',
      },
      {
        p: '¿Qué necesito tener listo antes de una auditoría?',
        r: 'La contabilidad al día, los comprobantes que la respaldan y los estados financieros del período a revisar. Cuanto más ordenado esté todo, más rápida y menos costosa suele ser la revisión.',
      },
    ],
    secciones: [
      {
        t: 'Qué es, sin tecnicismos',
        p: [
          'Una auditoría externa es la revisión de los estados financieros de su empresa por un contador público independiente, alguien que no los preparó y que no trabaja para usted en el día a día. Al terminar emite una opinión: si esos números reflejan razonablemente la realidad de la empresa.',
          'El valor está en la palabra «independiente». Es un tercero diciendo que sus números se sostienen.',
        ],
      },
      {
        t: 'Cuándo se la van a pedir',
        p: [
          'Los casos más comunes: un banco que evalúa un crédito, un inversionista o un socio nuevo que quiere saber en qué entra, una licitación o un cliente grande que la exige como requisito, o una empresa que se está vendiendo.',
          'Algunas actividades reguladas tienen además obligaciones propias de presentar estados auditados. Si ese es su caso depende de a qué se dedica su empresa, y es algo que conviene confirmar con su actividad concreta en la mano.',
        ],
      },
      {
        t: 'Cuándo conviene aunque nadie la pida',
        p: [
          'Cuando hay varios socios y no todos están en la operación diaria. Una revisión independiente evita que la confianza dependa solo de la palabra de quien lleva los números.',
          'También cuando el dueño sospecha que algo no cuadra y quiere saberlo con certeza, no con intuiciones.',
        ],
      },
      {
        t: 'Cómo prepararse antes de una auditoría',
        p: [
          'Una auditoría necesita una contabilidad ordenada y documentada detrás. Si la contabilidad está atrasada, primero hay que ponerla al día, y eso lleva su tiempo.',
          'Si sabe que en los próximos meses va a pedir financiamiento o a sumar un socio, pregunte ahora. Escríbanos por WhatsApp con su caso y le decimos qué necesitaría.',
        ],
      },
    ],
  },
  {
    slug: 'contratar-en-planilla-o-por-servicios-profesionales',
    titulo: '¿Planilla o Servicios Profesionales? Qué Cambia | KL Contable',
    descripcion:
      'Qué cambia para su empresa en Panamá entre contratar a alguien en planilla o por servicios profesionales, y el riesgo de elegir la figura equivocada.',
    h1: '¿Contratar en planilla o por servicios profesionales? Lo que cambia para la empresa',
    entradilla:
      'La elección no depende de cómo se llame el contrato. Depende de cómo se trabaja en la práctica.',
    fecha: '2026-08-24',
    minutos: 5,
    servicio: 'servicios-de-planilla-en-panama',
    resumen:
      'En Panamá, contratar en planilla obliga a la empresa a pagar, además del salario, la cuota patronal a la CSS —13.25 % hasta febrero de 2027, según la Ley 462 de 2025—, el seguro educativo, el riesgo profesional y las provisiones laborales. Por servicios profesionales solo paga la factura. Pero no lo decide el contrato: lo decide cómo se trabaja en la práctica.',
    claves: [
      'En planilla la persona es trabajador de la empresa; por servicios profesionales es independiente y factura su trabajo.',
      'La cuota patronal a la CSS es del 13.25 % del salario, sube al 14.25 % desde marzo de 2027 y al 15.25 % desde marzo de 2029, según la Ley 462 de 2025.',
      'Al trabajador en planilla se le descuenta el 9.75 % de su salario para el Seguro Social.',
      'Si quien factura por servicios cumple horario, recibe órdenes y trabaja solo para usted, la relación puede considerarse laboral.',
      'Servicios profesionales encaja con trabajos concretos y acotados; planilla, con funciones permanentes bajo su dirección.',
    ],
    faqs: [
      {
        p: '¿Cuánto paga el empleador a la CSS en Panamá?',
        r: 'La cuota patronal al Seguro Social es del 13.25 % del salario hasta el 28 de febrero de 2027, del 14.25 % hasta el 28 de febrero de 2029 y del 15.25 % después, según la Ley 462 de 2025. A eso se suman otras obligaciones como el seguro educativo y el riesgo profesional.',
      },
      {
        p: '¿Cuánto se le descuenta al trabajador para el Seguro Social en Panamá?',
        r: 'Al trabajador se le descuenta el 9.75 % de su salario como cuota al Seguro Social. Es distinto de la cuota patronal, que paga la empresa aparte.',
      },
      {
        p: '¿Qué pasa si un trabajador por servicios profesionales es en realidad un empleado?',
        r: 'Si en la práctica cumple horario, recibe órdenes y trabaja solo para usted, la relación puede considerarse laboral aunque el contrato diga otra cosa. En ese caso la empresa puede tener que asumir las obligaciones que no pagó, con lo acumulado encima.',
      },
      {
        p: '¿Un profesional independiente paga su propio Seguro Social?',
        r: 'Sí: cuando alguien trabaja por servicios profesionales, sus obligaciones fiscales y de seguridad social son asunto suyo, no de la empresa que le paga la factura.',
      },
    ],
    secciones: [
      {
        t: 'La diferencia de fondo',
        p: [
          'En planilla, la persona es un trabajador de la empresa: tiene horario, recibe instrucciones, usa sus herramientas y forma parte de la organización. Por servicios profesionales, la persona es independiente: entrega un trabajo o un resultado, organiza su tiempo y factura por ello.',
          'No es una cuestión de preferencia. Es una descripción de cómo es la relación.',
        ],
      },
      {
        t: 'Lo que cambia en los números',
        p: [
          'En planilla, la empresa paga el salario y además sus obligaciones como empleador: la cuota patronal al Seguro Social —hoy el 13.25 % del salario, y la Ley 462 de 2025 la sube al 14.25 % desde marzo de 2027 y al 15.25 % desde marzo de 2029—, el seguro educativo, el riesgo profesional y las provisiones de décimo tercer mes, vacaciones y prima de antigüedad. Al trabajador, por su parte, se le descuenta el 9.75 % de su salario para el Seguro Social.',
          'Por servicios profesionales, la empresa paga la factura que recibe, y las obligaciones fiscales y de seguridad social del profesional son asunto suyo.',
        ],
      },
      {
        t: 'El riesgo de la figura equivocada',
        p: [
          'Aquí está la trampa. Si alguien factura por servicios pero en la práctica cumple horario, recibe órdenes y trabaja solo para usted, esa relación puede considerarse laboral aunque el papel diga otra cosa.',
          'Si eso ocurre —por una reclamación del propio trabajador o por una revisión—, la empresa puede tener que asumir las obligaciones que no pagó, con lo que se haya acumulado encima. El ahorro de hoy puede salir bastante caro después.',
        ],
      },
      {
        t: 'Cuándo tiene sentido cada una',
        p: [
          'Servicios profesionales encaja con trabajos concretos y acotados: un proyecto, una asesoría puntual, alguien que atiende a varios clientes y trabaja con sus propios medios.',
          'Planilla encaja con quien hace una función permanente dentro de la empresa, en su horario y bajo su dirección.',
        ],
      },
      {
        t: 'Antes de decidir',
        p: [
          'Pida el cálculo de las dos opciones con el puesto real, no con uno hipotético. Escríbanos por WhatsApp con la función y el monto que tiene en mente, y le decimos qué figura corresponde y cuánto le cuesta cada una.',
        ],
      },
    ],
  },
  {
    slug: 'declaracion-de-renta-independiente-panama',
    titulo: 'Declaración de Renta de Independientes en Panamá | KL Contable',
    descripcion:
      'Lo que debe saber sobre la declaración de renta si trabaja como independiente en Panamá: qué se declara, qué gastos cuentan y los errores más comunes.',
    h1: 'Declaración de renta siendo independiente en Panamá: lo que debe saber',
    entradilla:
      'Cuando nadie le retiene nada, nadie le recuerda nada. La declaración pasa a ser responsabilidad suya por completo.',
    fecha: '2026-08-22',
    minutos: 5,
    servicio: 'servicios-de-gestion-tributaria-en-panama',
    resumen:
      'Si trabaja como independiente en Panamá, usted mismo debe declarar a la DGI todos los ingresos de su actividad, incluidos los cobros en efectivo, y puede restar los gastos necesarios para ejercerla si están documentados a su nombre. Si otras obligaciones como el ITBMS o el Seguro Social le corresponden depende de su actividad y de cuánto factura.',
    claves: [
      'El independiente no tiene un empleador que le retenga el impuesto: la declaración ante la Dirección General de Ingresos (DGI) es responsabilidad suya.',
      'Se declaran todos los ingresos de la actividad, también los cobrados en efectivo.',
      'Si en el mismo año tuvo salario e ingresos como independiente, los dos entran en la declaración.',
      'Los gastos necesarios para la actividad pueden restarse si están documentados a su nombre.',
      'Separar una cuenta bancaria para la actividad y guardar cada comprobante el mismo día evita la mayoría de los errores.',
    ],
    faqs: [
      {
        p: '¿Tengo que declarar renta si soy independiente en Panamá?',
        r: 'Si obtiene ingresos por su actividad, lo prudente es dar por hecho que sí y confirmarlo con sus datos: que nadie le haya avisado no significa que no le toque. Escríbanos por WhatsApp y le decimos qué le corresponde presentar.',
      },
      {
        p: '¿Qué gastos puede deducir un independiente en Panamá?',
        r: 'Los gastos necesarios para ejercer su actividad, siempre que estén documentados a su nombre y con sus datos. Qué gastos concretos entran depende de a qué se dedica.',
      },
      {
        p: '¿Cómo declarar si tuve salario e ingresos como independiente el mismo año?',
        r: 'Los dos tipos de ingreso entran en la declaración ante la DGI, aunque el empleador ya le haya retenido impuesto del salario. Es una combinación frecuente y una fuente habitual de errores, así que conviene revisarla con un contador.',
      },
      {
        p: '¿Un independiente en Panamá tiene que cobrar ITBMS?',
        r: 'Depende de su actividad y de cuánto factura. Conviene resolverlo con sus datos concretos antes de emitir facturas, no después.',
      },
    ],
    secciones: [
      {
        t: 'Qué cambia al dejar de ser asalariado',
        p: [
          'Un empleado en planilla tiene a su empleador haciendo buena parte del trabajo: le retiene el impuesto del salario y lo entrega al Estado. El independiente no tiene a nadie en medio.',
          'Eso significa que usted mismo tiene que llevar la cuenta de lo que ingresa, guardar sus comprobantes y presentar su declaración a la Dirección General de Ingresos en el plazo que corresponde.',
        ],
      },
      {
        t: 'Qué se declara',
        p: [
          'Todos los ingresos de su actividad, no solo los que llegaron con factura formal o por transferencia. Los cobros en efectivo también cuentan, y son los que más se olvidan.',
          'Si en el mismo año tuvo un salario y además ingresos como independiente, los dos entran en la declaración. Es una combinación frecuente y una fuente habitual de errores.',
        ],
      },
      {
        t: 'Los gastos que sí cuentan',
        p: [
          'Los gastos necesarios para ejercer su actividad pueden restarse, siempre que estén documentados a su nombre. La lógica es la misma que en una empresa: el gasto tiene que existir porque su trabajo existe.',
          'Aquí es donde más se paga de más. Muchos independientes no registran gastos legítimos porque no guardaron el comprobante o porque lo pidieron sin sus datos.',
        ],
      },
      {
        t: 'Los errores más comunes',
        p: [
          'Mezclar la cuenta personal con la de la actividad, dejar todo para el último momento y dar por hecho que, si nadie le avisó, no tenía que declarar.',
          'Otro frecuente: no saber si además le corresponden otras obligaciones, como el ITBMS o sus aportes al Seguro Social como independiente. Depende de su actividad y de cuánto factura, y conviene resolverlo con sus datos concretos.',
        ],
      },
      {
        t: 'Cómo hacerlo sin sustos',
        p: [
          'Guarde cada comprobante el día que lo recibe, separe una cuenta para su actividad y pregunte las fechas antes de que lleguen. Escríbanos por WhatsApp con a qué se dedica y le decimos qué le toca presentar y cuándo.',
        ],
      },
    ],
  },
  {
    slug: 'como-cambiar-de-contador-sin-perder-informacion',
    titulo: 'Cómo Cambiar de Contador sin Perder Información | KL Contable',
    descripcion:
      'Qué pedir, en qué orden y qué revisar al cambiar de contador en Panamá, para que la transición no deje huecos en su contabilidad ni en sus declaraciones.',
    h1: 'Cómo cambiar de contador sin perder información',
    entradilla:
      'Cambiar de contador no es el riesgo. El riesgo es cambiar sin saber qué se llevó el anterior y qué quedó pendiente.',
    fecha: '2026-08-20',
    minutos: 4,
    servicio: 'asesoria-contable-panama',
    resumen:
      'Para cambiar de contador en Panamá sin perder información, pida al anterior los registros contables, los estados financieros, las declaraciones presentadas ante la DGI con su constancia, los accesos a las plataformas del Estado y una lista de pendientes. Después cambie las claves, haga el cambio lejos de un vencimiento y pida al nuevo contador una revisión inicial.',
    claves: [
      'Los registros contables, las declaraciones y los comprobantes pertenecen a su empresa, no al despacho que los llevaba.',
      'Además de los documentos, pida por escrito una lista de lo que quedó pendiente.',
      'Al recibir los accesos a las plataformas del Estado, cambie las contraseñas para que queden en manos de la empresa.',
      'El mejor momento para cambiar es justo después de un cierre y lejos de un vencimiento.',
      'El nuevo contador debe revisar lo recibido antes de continuar, para no heredar errores sin saberlo.',
    ],
    faqs: [
      {
        p: '¿Mi contador anterior está obligado a entregarme la contabilidad?',
        r: 'Los registros contables, las declaraciones y los comprobantes son de su empresa, así que tiene derecho a pedirlos. Hacerlo es parte normal de cualquier cambio, no una muestra de desconfianza.',
      },
      {
        p: '¿Qué pasa con las claves de la DGI y la CSS al cambiar de contador?',
        r: 'Una vez que las reciba, cámbielas y guárdelas en la empresa. Las claves de su empresa no deberían quedar en manos de alguien que ya no trabaja para usted.',
      },
      {
        p: '¿Cuándo es mejor cambiar de contador?',
        r: 'Justo después de un cierre y lejos de un vencimiento. Si el cambio es urgente se puede hacer en cualquier momento, ordenando primero lo que vence antes.',
      },
      {
        p: '¿Qué debe revisar el nuevo contador al recibir la contabilidad?',
        r: 'Qué está completo, qué falta y qué hay que corregir en lo recibido, antes de seguir registrando. Así no hereda errores sin saberlo.',
      },
    ],
    secciones: [
      {
        t: 'Los documentos son de su empresa',
        p: [
          'Es lo primero que conviene tener claro, y a veces lo que más cuesta decir en voz alta. Los registros contables, las declaraciones presentadas y los comprobantes pertenecen a la empresa, no al despacho que los llevaba.',
          'Pedirlos no es una ofensa ni una desconfianza. Es parte normal de cualquier cambio.',
        ],
      },
      {
        t: 'Qué pedir',
        p: [
          'Los registros contables al día de la última entrega, los estados financieros más recientes, copia de las declaraciones presentadas con su constancia, los accesos a las plataformas del Estado que se usaban a nombre de la empresa y la documentación de planilla si la llevaba el mismo despacho.',
          'Pida también una lista de lo que quedó pendiente. Esa lista, aunque sea corta, es la que evita sorpresas.',
        ],
      },
      {
        t: 'Cambie las claves de acceso de la empresa',
        p: [
          'Una vez recibidos los accesos, cambie las contraseñas y deje que las tenga la empresa. No es por pensar mal de nadie: es que las claves de su empresa no deberían estar en manos de alguien que ya no trabaja para usted.',
        ],
      },
      {
        t: 'Elija bien el momento',
        p: [
          'El mejor momento es justo después de un cierre y lejos de un vencimiento. Cambiar la semana antes de una declaración obliga al nuevo contador a presentar algo que todavía no conoce.',
          'Si el cambio es urgente, se puede hacer en cualquier momento; solo hay que ordenar primero lo que vence antes.',
        ],
      },
      {
        t: 'Que el nuevo revise antes de continuar',
        p: [
          'Un contador que recibe una contabilidad y sigue adelante sin revisarla hereda cualquier error sin saberlo. Lo sensato es un repaso inicial de lo recibido: qué está completo, qué falta y qué hay que corregir.',
          'Si está pensando en cambiar, escríbanos por WhatsApp. Le decimos qué necesitamos recibir y cómo lo hacemos para que no se pierda nada por el camino.',
        ],
      },
    ],
  },
  {
    slug: 'que-pide-un-contador-al-sistema-de-facturacion',
    titulo: 'Sistema de Facturación: Qué Pide su Contador | KL Contable',
    descripcion:
      'Numeración sin huecos, ITBMS separado y cobros ligados a cada factura: lo que su contador necesita del sistema con que usted factura en Panamá.',
    h1: 'Qué le pide un contador a su sistema de facturación',
    entradilla:
      'Muchos problemas del cierre de mes no nacen en la contabilidad. Nacen el día en que se facturó.',
    fecha: '2026-09-29',
    minutos: 6,
    servicio: 'servicios-de-contabilidad-outsourcing-en-panama',
    resumen:
      'Un contador necesita que el sistema de facturación de su empresa numere sin huecos, separe el ITBMS en cada línea, identifique bien a cada cliente y ligue cada cobro a su factura. También necesita sacar esos datos sin volver a escribirlos. Y en Panamá, antes de elegir, hay que saber si el sistema emite la factura electrónica fiscal o si esa sale aparte, de un PAC o del Facturador Gratuito de la DGI.',
    claves: [
      'Cada factura lleva su número, en orden y sin saltos; si tiene un error, se anula o se corrige con otro documento, nunca se borra.',
      'El subtotal, el ITBMS y el total van separados, línea por línea, para distinguir lo gravado de lo exento.',
      'Cada cobro, completo o en abonos, queda anotado en su factura con la fecha, la forma de pago y la referencia.',
      'Su contador descarga los datos en Excel o CSV, o entra con un acceso de solo lectura, sin pedirle su contraseña.',
      'Si el sistema no emite la factura electrónica fiscal, esa sale de su PAC o del Facturador Gratuito, y las dos tienen que cuadrar.',
    ],
    faqs: [
      {
        p: '¿Puedo facturar en Excel?',
        r:
          'Puede llevar ahí el control al principio, pero Excel no impide saltarse un número, repetirlo o borrar un cobro, y lo que sale de una hoja de cálculo no es una factura fiscal. Si su empresa está obligada a la factura electrónica, esa tiene que salir de un PAC o del Facturador Gratuito de la DGI.',
      },
      {
        p: '¿Mi sistema de facturación tiene que ser el mismo que usa mi contador?',
        r:
          'No. Lo que importa es que su contador pueda consultar o descargar los datos sin volver a escribirlos: un archivo de Excel o CSV con facturas, cobros y clientes, o un acceso de solo lectura.',
      },
      {
        p: '¿Un sistema de facturación reemplaza al contador?',
        r:
          'No. El sistema ordena la información de ventas y cobros. El registro contable, las declaraciones y los estados financieros siguen siendo trabajo del contador, que los hace mejor y más rápido si esa información le llega completa.',
      },
      {
        p: '¿Qué hago si ya emití una factura con un error?',
        r:
          'No la borre ni reutilice su número. Según el caso, se anula dejando el motivo o se corrige con otro documento, como una nota de crédito, y el número original queda registrado. Si es una factura electrónica, la corrección se hace también por medio del PAC o del Facturador Gratuito.',
      },
    ],
    secciones: [
      {
        t: 'Una numeración sin huecos',
        p: [
          'Cada factura necesita su número, y los números tienen que seguir en orden, sin saltos ni repetidos. Cuando falta la 0152 o la 0153 aparece dos veces, su contador tiene que averiguar qué pasó con cada una antes de poder cerrar el mes.',
          'Una factura con error no se borra, y su número no se vuelve a usar. Se anula dejando el motivo, o se corrige con otro documento, y el número original queda a la vista. Antes de elegir un sistema, pregunte qué pasa cuando se anula una factura. Si la respuesta es «desaparece», ese sistema le va a dar problemas.',
        ],
      },
      {
        t: 'El ITBMS separado, línea por línea',
        p: [
          'Su contador necesita ver en cada factura el subtotal, el impuesto y el total por separado. Si el sistema solo guarda el total con el impuesto adentro, hay que recalcularlo a mano, y de ahí salen las diferencias de centavos que después no cuadran con la declaración.',
          'Conviene que el impuesto se calcule en cada línea y no solo al final, porque no todo lo que usted vende lleva la misma tarifa, y hay bienes y servicios exentos. Una factura que mezcla algo gravado con algo exento solo se declara bien si el sistema distingue uno de otro.',
        ],
      },
      {
        t: 'Cada cliente bien identificado',
        p: [
          'Una factura a nombre de «cliente varios», o con el RUC incompleto, le sirve poco a la empresa que la recibe, porque sin sus datos le cuesta sustentar ese gasto. El sistema debería guardar de cada cliente el nombre o la razón social y el RUC con su dígito verificador (DV), y llenarlos por usted en cada factura.',
          'Guardarlos una sola vez evita el error más común: escribir el RUC de memoria y equivocarse en un dígito.',
        ],
      },
      {
        t: 'Cada cobro ligado a su factura',
        p: [
          'Al cierre, su contador cuadra lo que entró al banco con lo que usted facturó. Si un depósito no dice a qué factura corresponde, alguien tiene que averiguarlo, y mientras tanto esa factura sigue apareciendo como pendiente.',
          'Por eso cada cobro, completo o en abonos, debería quedar anotado en su factura con la fecha, la forma de pago y la referencia de la transferencia o del recibo. Así el saldo de cada factura sale de lo que de verdad se cobró, y lo que le deben a fin de mes se lee sin hacer cuentas.',
          'Vender y cobrar son dos hechos distintos. En la contabilidad, la venta cuenta en el mes en que se factura, aunque el cliente pague después. Un buen sistema le muestra las dos cosas por separado, lo facturado y lo cobrado, mes a mes.',
        ],
      },
      {
        t: 'Datos que su contador pueda sacar sin volver a escribirlos',
        p: [
          'Copiar facturas de un PDF a una hoja de cálculo es donde más errores se cuelan. Lo que su contador necesita es descargar las facturas, los cobros y los clientes en un archivo de Excel o CSV, con la fecha de cada documento, para filtrar el mes que va a cerrar.',
          'Mejor todavía si el sistema le da a su contador un acceso propio de solo lectura. Así su contador ve lo que necesita cuando lo necesita, usted no comparte su contraseña ni manda capturas de pantalla, y nadie cambia nada por error.',
        ],
      },
      {
        t: 'Quién emite la factura fiscal',
        p: [
          'Esta es la pregunta que más confusión causa. En Panamá, la factura que cuenta ante la DGI es la factura electrónica, que se emite por medio de un PAC o del Facturador Gratuito de la propia DGI, o la que sale de una impresora fiscal para quien todavía la usa. Muchos sistemas de facturación y cobros emiten documentos comerciales muy completos que no son facturas fiscales.',
          'Eso no es un problema si se sabe desde el principio. La fiscal se emite con el PAC o con el Facturador Gratuito, y el otro sistema lleva las cotizaciones, los cobros y lo que le deben. Lo importante es que las dos cuadren: el mismo cliente, los mismos montos y el mismo ITBMS.',
          'Antes de elegir, pregunte sin rodeos: «¿Lo que emite su sistema es la factura electrónica fiscal, o tengo que emitirla aparte?».',
        ],
        enlace: {
          detalle:
            'Cómo funciona la validación de la factura electrónica y qué cambia para su empresa:',
          texto: 'Qué cambia con la facturación electrónica en Panamá',
          href: '/blog/facturacion-electronica-en-panama-que-cambia/',
        },
      },
      {
        t: 'Qué opciones hay',
        p: [
          'No hay un sistema correcto para todas las empresas. Depende de cuánto factura, de si le pagan en abonos y de si lleva una o varias empresas. Estas son las opciones más comunes en Panamá.',
          'Una hoja de cálculo. Sirve al principio y no cuesta nada, pero nada le impide saltarse un número, repetirlo o borrar un cobro, y no es una factura fiscal.',
          'El Facturador Gratuito de la DGI. Emite la factura electrónica fiscal sin costo y está pensado para quien emite pocos documentos. Su trabajo es emitir: el control de quién le debe y cuánto hay que llevarlo aparte.',
          'La plataforma de un PAC. Emite la factura electrónica fiscal. Algunas incluyen cuentas por cobrar y reportes, y otras solo emiten; pregunte qué puede descargar su contador.',
          'Un sistema contable con módulo de facturación. Junta la facturación y la contabilidad, lo que ahorra pasos, pero suele costar más y pide más tiempo para aprenderlo.',
          'Un sistema de facturación y cobros. Lleva cotizaciones, facturas, abonos y lo vencido, a veces de varias empresas a la vez. Si no emite la factura fiscal, se usa junto con un PAC o con el Facturador Gratuito.',
        ],
        enlace: {
          detalle:
            'Un ejemplo de este último tipo es NousCRM, hecho en Panamá. Lleva cotizaciones, facturas con su propia numeración y el ITBMS por línea, abonos ligados a cada factura y mensualidades, de una o varias empresas. Su contador entra gratis con acceso de solo lectura y descarga facturas, abonos y clientes en CSV. No emite la factura electrónica de la DGI ni lleva la contabilidad: la fiscal sigue saliendo de su PAC o del Facturador Gratuito.',
          texto: 'Ver cómo funciona NousCRM',
          href:
            'https://nouscrm.app/?utm_source=klcontable&utm_medium=web&utm_campaign=blog-sistema-de-facturacion',
          nota:
            'NousCRM lo desarrolla Elemento Web, la misma agencia que hizo la web de KL Contable.',
        },
      },
      {
        t: 'Antes de cambiar de sistema',
        p: [
          'Pídale a su contador que vea una factura de prueba y el archivo que exporta el sistema antes de pagar la primera mensualidad. Con eso sabrá si le sirve o si le va a costar horas en cada cierre.',
          'Si cambia a mitad de año, cierre primero el mes en el sistema anterior y empiece el nuevo con una numeración que no se cruce con la anterior.',
          'Si quiere que revisemos con usted cómo factura hoy y qué le conviene, escríbanos por WhatsApp.',
        ],
      },
    ],
  },
];
