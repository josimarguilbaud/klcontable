/**
 * El desarrollo largo de cada servicio.
 *
 * Las fichas tenían `paraQuien`, `incluye`, `senales` y FAQ: suficiente para
 * entender el servicio, corto para posicionar. Esto es el cuerpo del artículo
 * que va debajo, y multiplica por cuatro lo que Google puede leer de cada
 * página.
 *
 * Cómo está escrito, y por qué:
 * - Cada bloque responde una pregunta que el cliente ya trae en la cabeza. No
 *   hay secciones de relleno tipo «nuestra filosofía».
 * - Los términos que se buscan en Google (ITBMS, SIPE, NIIF, PAC, formulario
 *   930, paz y salvo) aparecen SIEMPRE explicados en la misma frase. Meter la
 *   palabra clave suelta posiciona para una visita que se va a los diez
 *   segundos, que es peor que no posicionar.
 * - Ni una cifra sin verificar: ni tarifas, ni plazos legales, ni umbrales, ni
 *   porcentajes. Donde haría falta un número concreto, se manda a la consulta.
 *   Es la misma regla que rige `fiscal.ts` y la portada.
 *
 * Va en un fichero aparte de `servicios.ts` para no volver ilegible el que
 * define las fichas. La clave es el slug.
 */
export type Bloque = { t: string; p: string[] };

export const DESARROLLO: Record<string, Bloque[]> = {
  'asesoria-contable-panama': [
    {
      t: 'Qué diferencia hay entre llevar la contabilidad y asesorar',
      p: [
        'Llevar la contabilidad es registrar lo que ya pasó: las facturas emitidas, los gastos, los movimientos del banco. Es imprescindible y es la base de todo lo demás, pero mira hacia atrás.',
        'Asesorar es lo otro: usar esos números para decidir lo que todavía no ha pasado. Si le conviene contratar ahora o en enero. Si ese contrato grande le va a dejar margen de verdad o solo movimiento. Si el precio al que está vendiendo cubre lo que realmente le cuesta producir.',
        'Muchas empresas panameñas pagan lo primero y nunca reciben lo segundo, y ni siquiera saben que faltaba. Se enteran cuando toman una decisión cara con información que tenían delante y nadie les tradujo.',
      ],
    },
    {
      t: 'Qué preguntas deberia poder responder su contabilidad',
      p: [
        '¿Ganó dinero el mes pasado, y cuánto? ¿Qué cliente le deja más margen y cuál le da más trabajo por menos? ¿Cuánto le cuesta de verdad tener a cada empleado, sumando todo? ¿Cuánto dinero tiene comprometido en pagos que aún no ha hecho?',
        'Si alguna de esas preguntas solo puede responderla estimando, no es que le falte información: es que la tiene registrada y nadie se la ha convertido en respuesta.',
        'Eso es exactamente lo que hace un asesor: coger lo que ya está en sus libros y devolvérselo en forma de decisión.',
      ],
    },
    {
      t: 'Cuándo conviene consultar antes y no después',
      p: [
        'Antes de contratar a alguien, porque el costo real de un empleado es bastante mayor que su salario y conviene saberlo antes de ofrecerlo, no al segundo mes.',
        'Antes de abrir una segunda sociedad, porque puede que le convenga y puede que le esté añadiendo obligaciones que no necesita.',
        'Antes de firmar un contrato grande, un préstamo o una compra de equipo. Y antes de cerrar el año, que es cuando todavía se puede hacer algo y no solo constatarlo.',
        'La consulta que llega después de la decisión ya no es asesoría: es explicar por qué salió como salió.',
      ],
    },
  ],

  'servicios-de-contabilidad-outsourcing-en-panama': [
    {
      t: 'Por qué a una pyme le sale mejor externalizar',
      p: [
        'Una empresa pequeña en Panamá tiene exactamente las mismas obligaciones que una grande: las mismas declaraciones, la misma planilla, las mismas fechas. Lo que no tiene es la estructura para atenderlas.',
        'Montar eso dentro de casa significa un sueldo con todas sus cargas, un programa contable, formación continua para no quedarse atrás con los cambios de norma, y el problema de qué pasa cuando esa persona se va de vacaciones o renuncia en agosto.',
        'Externalizar convierte todo eso en una cuota conocida. Y añade algo que un departamento de una sola persona no puede dar: cuando aparece un caso raro, hay más de una cabeza que ya lo ha visto antes.',
      ],
    },
    {
      t: 'Qué pasa exactamente cada mes',
      p: [
        'Usted nos hace llegar sus comprobantes y sus estados de cuenta, por el canal que le resulte cómodo. Nosotros registramos, cuadramos los bancos y detectamos lo que no encaja — que casi siempre es un gasto sin comprobante o un cobro que no aparece.',
        'De ahí salen sus estados financieros del mes, en palabras que se entienden, y la preparación de lo que haya que declarar.',
        'Y antes de cada vencimiento le llega un aviso diciéndole qué toca y para cuándo. Esa parte parece la menos técnica y es la que más dinero ahorra.',
      ],
    },
    {
      t: 'Su contabilidad sigue siendo suya',
      p: [
        'Trabajar con un despacho externo no significa perder de vista sus propios números ni quedar atado. Sus registros, sus comprobantes y sus estados financieros son de la empresa, y se los entregamos completos y ordenados cuando los pida, sin tener que dar explicaciones.',
        'Lo decimos porque el miedo a quedar atrapado es real y frena a mucha gente que necesita el servicio. Un despacho que retiene la información de un cliente para que no se vaya no está reteniendo a un cliente: está construyendo uno que se irá en cuanto pueda.',
      ],
    },
  ],

  'servicios-de-gestion-tributaria-en-panama': [
    {
      t: 'Las obligaciones que casi nadie tiene en la cabeza a la vez',
      p: [
        'La declaración anual de renta es la que todo el mundo recuerda. El problema son las otras: el ITBMS —el impuesto sobre bienes y servicios— cuando su actividad está gravada, los anticipos, las retenciones si le toca actuar como agente, y las declaraciones informativas que no llevan pago pero cuya ausencia sí se sanciona.',
        'Cada una tiene su propio calendario. Un empresario que las lleva de memoria acierta durante un tiempo y falla el mes que tiene el negocio complicado, que es justo cuando menos falta le hace un recargo.',
      ],
    },
    {
      t: 'Presentar a tiempo vale más que cualquier optimización',
      p: [
        'Se habla mucho de planificación fiscal y poco de lo que de verdad mueve la aguja en una pyme panameña: presentar dentro del plazo. El recargo por mora no es una cantidad fija que se paga y se olvida — aumenta mientras la obligación siga pendiente.',
        'Por eso el peor consejo posible es «lo dejo para cuando tenga el dinero». Cada mes que pasa hace falta más dinero del que hacía falta el mes anterior.',
        'Aprovechar lo que la ley permite es planificación y forma parte del trabajo. Pero llega después de lo básico, no en lugar de lo básico.',
      ],
    },
    {
      t: 'Si ya tiene un atraso o una notificación',
      p: [
        'Lo primero es saber exactamente qué se debe y por qué concepto, porque no todo lo que aparece en una notificación es lo que finalmente se paga: hay conceptos que se pueden ordenar y períodos que conviene mirar uno por uno.',
        'Lo segundo es impedir que se acumule otro período encima. Un atraso se resuelve; dos atrasos apilados se convierten en un problema distinto y bastante más caro.',
        'Y lo tercero, que es lo que evita la reincidencia, es que a partir de ahí el aviso llegue antes de la fecha y no después.',
      ],
    },
  ],

  'servicios-de-planilla-en-panama': [
    {
      t: 'Por qué la planilla es donde más caro sale equivocarse',
      p: [
        'Un error en un registro contable se corrige con un asiento. Un error en la planilla lo nota una persona en su bolsillo, y eso deja de ser un tema técnico para convertirse en un problema laboral.',
        'Además se acumula sin avisar: un cálculo mal hecho que se repite todos los meses se convierte en una diferencia grande al llegar la liquidación, cuando ya hay una relación laboral terminada y menos margen para conversar.',
      ],
    },
    {
      t: 'Lo que se paga aparte del salario',
      p: [
        'Por un lado está la cuota que se le descuenta al trabajador y la que aporta la empresa al Seguro Social, que son dos cosas distintas y se confunden constantemente. A eso se suman el seguro educativo y la prima de riesgo profesional, que depende del tipo de actividad: no cuesta lo mismo una oficina que una obra.',
        'Y por otro están las provisiones: el décimo tercer mes, las vacaciones y la prima de antigüedad. No se pagan todos los meses, pero se generan todos los meses. Si no se apartan, llegan de golpe y parecen aparecer de la nada.',
        'Le calculamos la cifra completa de su caso antes de que contrate, para que el presupuesto no se le descuadre al segundo mes.',
      ],
    },
    {
      t: 'Altas, bajas y liquidaciones',
      p: [
        'Cada entrada y cada salida de personal tiene su trámite y su plazo ante la Caja de Seguro Social, y se gestionan por el sistema SIPE. Las bajas mal hechas siguen generando obligaciones por alguien que ya no está, y eso se descubre tarde.',
        'Las liquidaciones son el otro punto delicado: entran la parte proporcional del décimo generada y no pagada, las vacaciones pendientes y lo que corresponda según cómo termine la relación. Es donde más se equivocan las cuentas hechas a mano.',
        'Si tiene una liquidación pendiente y no está seguro del cálculo, sale mucho más barato consultarla antes de pagarla que corregirla después.',
      ],
    },
  ],

  'servicios-de-auditoria-contable-en-panama': [
    {
      t: 'Para qué le van a pedir estados financieros auditados',
      p: [
        'Casi siempre por uno de estos tres motivos: un banco que evalúa un crédito, una licitación o un cliente grande que lo exige antes de contratarle, o los propios socios de la empresa, que quieren una opinión independiente sobre lo que están firmando.',
        'En los tres casos, lo que aporta la auditoría no es el documento: es que alguien ajeno a la empresa haya revisado los números y ponga su nombre detrás.',
      ],
    },
    {
      t: 'Qué mira una auditoría y qué no',
      p: [
        'Revisa que los estados financieros reflejen razonablemente la situación de la empresa, y que estén preparados con criterios reconocidos —las normas internacionales de información financiera, que es a lo que se refieren cuando dicen NIIF—.',
        'Lo que no es, y conviene decirlo claro, es una búsqueda exhaustiva de fraude ni una garantía de que no exista ningún error. Vender una auditoría como un seguro contra sorpresas es engañar al cliente sobre lo que está comprando.',
      ],
    },
    {
      t: 'Cómo llegar preparado y no perder tres meses',
      p: [
        'Una auditoría es rápida cuando la contabilidad está al día, los comprobantes están donde deben estar y las cifras cuadran con lo que la empresa declaró. Es lenta y cara cuando hay que reconstruir un año a base de preguntas.',
        'La incoherencia más común, y la que más retrasa todo, es que los estados financieros digan una cosa y las declaraciones presentadas digan otra. Eso hay que resolverlo antes, no durante.',
        'Si está pensando en pedir financiamiento o entrar en una licitación este año, empiece a ordenar ahora y no el mes anterior.',
      ],
    },
  ],

  'servicio-de-mensajeria-y-tramites-empresariales-en-panama': [
    {
      t: 'Panamá sigue teniendo ventanillas',
      p: [
        'Buena parte de los trámites de una empresa panameña siguen exigiendo que alguien se presente físicamente: documentos que se recogen en persona, entidades con su propio horario, colas y un mostrador donde le dicen que falta un papel que nadie mencionó por teléfono.',
        'Para el dueño de una pyme eso significa media mañana perdida cada vez. Para quien vive fuera del país, significa que el trámite sencillamente no avanza.',
      ],
    },
    {
      t: 'Qué resolvemos yendo nosotros',
      p: [
        'Diligencias ante el Registro Público, gestiones en entidades públicas, recogida y entrega de documentación, constancias, paz y salvos, y el seguimiento de los expedientes que se quedan parados sin que nadie avise.',
        'Usted recibe el comprobante de cada paso, no un «ya está hecho». Y cuando un trámite se atasca —que pasa— se lo decimos con lo que falta, en vez de dejarlo dormido esperando que se resuelva solo.',
      ],
    },
    {
      t: 'Constituir una sociedad es el principio, no el final',
      p: [
        'Constituir en Panamá es rápido, y ahí nace el malentendido: mucha gente asume que con la sociedad creada ya está todo resuelto. Desde ese momento empiezan a correr obligaciones que no se detienen porque la empresa aún no facture.',
        'Antes de constituir conviene pedir el cálculo de lo que costará mantenerla al día durante un año completo. Es una cifra que se puede dar con precisión, y saberla evita la sensación de que cada trimestre aparece un costo nuevo.',
      ],
    },
  ],

  'facturacion-electronica-panama': [
    {
      t: 'Qué cambia de verdad en su día a día',
      p: [
        'La factura deja de ser un documento que usted imprime y pasa a ser un documento que se valida electrónicamente antes de tener validez. Ahí está todo el cambio, y todo lo demás se deriva de eso.',
        'En la práctica significa que su forma de emitir tiene que conectarse con un canal autorizado, que sus datos fiscales tienen que estar impecables —porque cualquier inconsistencia la rechaza el sistema, no un revisor comprensivo— y que quien factura en su empresa necesita saber qué hacer cuando algo sale rechazado.',
      ],
    },
    {
      t: 'El PAC: qué es y por qué la elección importa',
      p: [
        'Un PAC es un proveedor autorizado por la Dirección General de Ingresos para validar sus facturas. No es un trámite indiferente: de él dependen cuántas facturas puede emitir con comodidad, si se conecta con el sistema que ya usa, y a quién llama cuando algo falla un viernes por la tarde.',
        'Elegirlo por precio y sin mirar el volumen ni la integración es el error que después obliga a repetir toda la implementación.',
      ],
    },
    {
      t: 'Dónde se atasca la gente que lo intenta sola',
      p: [
        'Casi siempre en el mismo punto: los datos fiscales de la empresa no están como el sistema espera. Nombres que no coinciden con el registro, actividades mal clasificadas, información desactualizada que llevaba años ahí sin molestar a nadie.',
        'Eso no se descubre al principio, se descubre a mitad del proceso, cuando ya hay prisa. Por eso lo primero que hacemos no es el trámite: es revisar que sus datos estén en orden.',
        'El otro atasco es humano. El sistema queda montado y nadie del equipo se atreve a emitir por miedo a equivocarse. Por eso la formación va con casos reales suyos, no con un manual.',
      ],
    },
  ],

  'precios-de-transferencia-panama': [
    {
      t: 'Qué son, explicado sin tecnicismos',
      p: [
        'Cuando dos empresas relacionadas —la suya y su matriz, o dos sociedades del mismo dueño— se compran o se venden algo entre ellas, el precio lo deciden ellas mismas. Y como lo deciden ellas, podría usarse para mover el beneficio de un sitio a otro.',
        'Por eso la norma pide que ese precio sea el que habrían pactado dos empresas independientes, y que la empresa pueda demostrarlo. Eso es un estudio de precios de transferencia: la demostración de que sus precios internos son los de mercado.',
      ],
    },
    {
      t: 'La confusión más cara: «pero si es mi propia empresa»',
      p: [
        'Es la frase que más oímos, y es justo el caso que la norma quiere ver documentado. Que las dos empresas sean suyas no exime: al contrario, es precisamente lo que crea la obligación.',
        'Tampoco depende del tamaño ni del volumen. Una sola operación al año con una parte relacionada puede activarla, y hay empresas muy pequeñas obligadas mientras otras mucho mayores no lo están.',
      ],
    },
    {
      t: 'Declarar sin tener el estudio deja un cabo suelto',
      p: [
        'La declaración informativa y el estudio técnico son dos cosas distintas, y ambas pueden pedírsele. Presentar la primera sin tener la segunda preparada es lo más común que nos encontramos y lo más incómodo de resolver a posteriori, porque el estudio hay que hacerlo con la información del año que ya pasó.',
        'Si el año pasado declaró y nadie le preparó el estudio, conviene mirarlo ahora y no cuando llegue una revisión.',
      ],
    },
  ],

  'regimenes-especiales-panama': [
    {
      t: 'Un régimen especial no quita obligaciones: las cambia',
      p: [
        'Es el malentendido que más problemas causa. Una empresa acogida a un régimen especial asume que «no le toca nada» y descubre tarde que sí le tocaba, solo que otra cosa distinta.',
        'Lo que cambia es qué se declara, bajo qué reglas y ante quién. En varios casos el régimen añade informes propios que el régimen general no exige, y que nadie reclama hasta que hay una revisión de la licencia.',
      ],
    },
    {
      t: 'Cuatro marcos con lógicas distintas',
      p: [
        'Una sede de empresa multinacional —el régimen SEM— y una empresa de manufactura bajo EMMA responden a incentivos y a supervisiones diferentes. La Zona Libre de Colón tiene su propia mecánica, ligada al comercio de mercancía. Y Panamá Pacífico funciona con su propia estructura.',
        'Un contador que trata los cuatro igual, o que los trata como si fueran el régimen general con descuento, deja huecos. Lo primero siempre es determinar bajo cuál está usted y qué exige exactamente su licencia.',
      ],
    },
    {
      t: 'Si está evaluando acogerse a uno',
      p: [
        'Mírelo antes de montar nada. La decisión depende de su actividad real, de dónde estén sus clientes, de qué estructura societaria tenga y de qué compromisos está dispuesto a asumir a cambio del incentivo.',
        'Acogerse y descubrir después que no encajaba es caro de deshacer, y deja a la empresa un tiempo en una situación incómoda mientras se ordena.',
      ],
    },
  ],

  'impuestos-municipales-panama': [
    {
      t: 'El impuesto que no llama a la puerta',
      p: [
        'La mayoría de los empresarios tiene en la cabeza sus obligaciones con la Dirección General de Ingresos, y muchos ni siquiera saben que el municipio es otra cosa, con su propia declaración y su propio calendario.',
        'Estar al día con la DGI no significa estar al día con el municipio. Son dos ventanillas distintas, y la municipal tiene una particularidad incómoda: no suele reclamar. Se acumula en silencio, año tras año, sin que nadie mire.',
      ],
    },
    {
      t: 'Dónde aparece el problema',
      p: [
        'Casi siempre en el peor momento: cuando va a renovar su aviso de operación, cuando entra en una licitación, cuando el banco le pide papeles, o cuando cualquier trámite se detiene porque le piden un paz y salvo municipal que no tiene.',
        'Ahí descubre de golpe cuánto se había ido acumulando, y además con prisa, porque lo que estaba haciendo se quedó parado esperando ese documento.',
      ],
    },
    {
      t: 'La clasificación también importa',
      p: [
        'No es solo pagar: es estar declarado bajo la actividad que corresponde. Una clasificación que no encaja con lo que la empresa hace realmente puede estar costándole de más cada mes, o dejándole expuesto a un ajuste después.',
        'Es de las primeras cosas que revisamos, porque es un error silencioso: no da ningún síntoma hasta que alguien lo mira.',
      ],
    },
  ],
};
