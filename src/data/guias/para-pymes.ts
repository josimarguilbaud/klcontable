import type { GuiaDesarrollo } from '../guias';

export const DESARROLLO: GuiaDesarrollo = {
  titulo: 'Contabilidad para Pymes en Panamá: Guía Completa | KL Contable',
  descripcion:
    'Contabilidad para pymes en Panamá: qué debe cumplir ante la DGI, la CSS y el municipio, cómo ordenar el mes y la planilla, y cuándo externalizar.',
  resumen:
    'Una pyme en Panamá tiene las mismas obligaciones que una empresa grande: declarar ante la DGI, reportar su planilla a la CSS por el SIPE, pagar al municipio donde opera y mantener al día su aviso de operación. Lo que la mantiene en regla es una rutina mensual: comprobantes ordenados, bancos conciliados, planilla cuadrada y avisos antes de cada vencimiento. Qué declara y cada cuánto depende de su actividad y su facturación.',
  claves: [
    'Una pyme panameña responde ante varias instituciones a la vez: la DGI, la CSS, el municipio y el MICI, y estar al día con una no dice nada de las otras.',
    'La contabilidad al día no se hace en el cierre del año: se hace cada mes, con los comprobantes del mes y los bancos conciliados.',
    'En la planilla, la empresa paga la cuota patronal a la CSS aparte del 9.75 % que se descuenta al trabajador; según la Ley 462 de 2025, es del 13.25 % hasta el 28 de febrero de 2027.',
    'Unos estados financieros coherentes con lo declarado a la DGI son lo que piden un banco, un socio o una licitación.',
    'Casi todas las multas vienen de enterarse tarde de un vencimiento, no de no querer pagar.',
    'Qué declara su empresa y con qué frecuencia depende de su actividad y de cuánto factura, y se confirma con sus datos.',
  ],
  secciones: [
    {
      t: 'Qué obligaciones contables tiene una pyme en Panamá',
      p: [
        'Una pyme en marcha no le responde a un solo organismo. Le responde a la Dirección General de Ingresos (DGI), que cobra los impuestos del Estado; a la Caja de Seguro Social (CSS), por cada persona en planilla; al municipio donde opera, que cobra sus propios impuestos; y al Ministerio de Comercio e Industrias (MICI), donde está su aviso de operación.',
        'Cada uno tiene sus declaraciones, sus pagos y sus plazos. Y cada uno emite su propio paz y salvo, que es la constancia de que usted no le debe nada. Estar al día con la DGI no dice nada de cómo está con el municipio, y al revés.',
        'Qué declaraciones le tocan exactamente, como la de renta o la de ITBMS, y cada cuánto, depende de su actividad y de cuánto factura. No hay una lista única que sirva para todas las pymes. Por eso lo primero es hacer la suya, por escrito, con su calendario.',
      ],
      imagen: {
        alt: 'Dueña de una pyme en Panamá revisando carpetas de su negocio en la trastienda de su local',
        escena:
          'Editorial photo of a small business back office in Panama City: a woman seen from behind sorting unlabeled colored folders on a wooden shelf, warm afternoon light through a window with blurred palm trees outside.',
      },
    },
    {
      t: 'La rutina mensual que mantiene la contabilidad al día',
      p: [
        'La contabilidad de una pyme no se arregla en el cierre del año. Se sostiene con una rutina de mes que es aburrida a propósito: juntar todos los comprobantes del mes, registrar ventas, compras y gastos, conciliar los bancos y revisar que la planilla cuadre con lo reportado a la CSS.',
        'La conciliación bancaria, que es comparar lo que dice su contabilidad con lo que dice el estado de cuenta del banco y explicar cada diferencia, es lo primero. El banco es una fuente externa y fechada: si la contabilidad no cuadra con él, todo lo que se construye encima es dudoso.',
        'Con esa rutina, el cierre del mes consiste en entregar una carpeta, no en buscar papeles a última hora. Y el cierre del año deja de ser una emergencia.',
      ],
    },
    {
      t: 'Comprobantes y facturación electrónica en una pyme',
      p: [
        'Un gasto sin comprobante a nombre de la empresa es, a efectos fiscales, un gasto que no existe. Es el error más común en las pymes: se paga, se usa, y la factura sale a nombre de una persona o no se pide.',
        'Con la facturación electrónica, cada factura pasa antes por un proveedor autorizado por la DGI, llamado PAC, y los errores ya no se tachan: se corrigen con otro documento. La DGI recibe sus ventas de forma directa, así que lo que usted declara tiene que coincidir con lo que ella ya ve.',
        'Cuándo le toca a su empresa facturar electrónicamente depende de su tipo de contribuyente y de su actividad. Si no lo tiene claro, es una de las primeras cosas que conviene confirmar.',
      ],
    },
    {
      t: 'La planilla de una pyme: CSS, SIPE y provisiones',
      p: [
        'Con el primer empleado, la empresa asume obligaciones que no dependen de su tamaño: inscribirlo, calcular sus descuentos, pagar la cuota patronal y reportar la planilla a la CSS por el SIPE, que es el sistema en línea del Seguro Social.',
        'La cuota patronal la paga la empresa aparte del 9.75 % que se le descuenta al trabajador. Según la Ley 462 de 18 de marzo de 2025, es del 13.25 % hasta el 28 de febrero de 2027, del 14.25 % hasta el 28 de febrero de 2029 y del 15.25 % después. Si su presupuesto de nómina usa la tabla de hace unos años, está desactualizado.',
        'Luego están las provisiones: el décimo tercer mes, las vacaciones y la prima de antigüedad se generan cada mes aunque no se paguen cada mes. Si no se apartan, llegan de golpe. Y cuando alguien sale, la liquidación tiene que estar bien calculada: es donde un error pequeño se vuelve un problema laboral grande.',
      ],
      imagen: {
        alt: 'Empleados de una pequeña empresa panameña trabajando en un taller, vistos de espaldas',
        escena:
          'Realistic editorial photo inside a small furniture workshop in Panama, two workers seen from behind sanding a wooden table, sawdust in warm light, no faces visible, no signs.',
      },
    },
    {
      t: 'Municipio, aviso de operación y paz y salvos',
      p: [
        'El municipio no suele llamar a la puerta. La pyme presenta ante él una declaración jurada de su actividad e ingresos y hace un pago periódico, y si se olvida, la deuda crece en silencio hasta que un trámite pide el paz y salvo municipal.',
        'El aviso de operación, tramitado ante el MICI, recoge el titular, la actividad y la dirección. Hay que actualizarlo si cambia de local, abre otro establecimiento, añade una actividad o cambia algo de la sociedad. Una pyme que crece suele hacer alguna de esas cosas sin acordarse del aviso.',
        'Los paz y salvos de la DGI, de la CSS y del municipio se piden en licitaciones, créditos, trámites con el Estado y compraventas. El momento de saber si los puede obtener es antes de necesitarlos, no la mañana en que se los piden.',
      ],
    },
    {
      t: 'Estados financieros para el banco, los socios y las licitaciones',
      p: [
        'Tarde o temprano una pyme necesita demostrar cómo está: para pedir un crédito, para entrar en una licitación, para sumar un socio o para vender. Lo que se pide casi siempre son estados financieros bien preparados y coherentes con lo que la empresa declaró a la DGI.',
        'Si los estados dicen una cosa y las declaraciones otra, el banco lo nota. Y a veces, según el banco, el monto o quien los pida, además tienen que venir auditados por un contador público independiente.',
        'Tener los estados al día también le sirve a usted. El estado de resultados le dice si ganó dinero, el balance le dice qué tiene y qué debe, y el flujo de efectivo le explica por qué a veces hay ganancia y no hay caja.',
      ],
    },
    {
      t: 'Contador interno o contabilidad externa para una pyme',
      p: [
        'Una pyme puede tener un contador en planilla, contratar la contabilidad fuera o combinar las dos cosas. La comparación honesta no es salario contra honorario: es el costo completo del puesto interno, con su cuota patronal, sus provisiones, el equipo y el programa, frente al servicio externo.',
        'También cuenta quién supervisa el trabajo y qué pasa cuando esa persona falta, renuncia o se va de vacaciones justo antes de un vencimiento. Con la contabilidad externa, el conocimiento de su empresa no depende de una sola persona.',
        'Muchas pymes se quedan con alguien interno para el día a día —facturar, cobrar, pagar— y externalizan la contabilidad, los impuestos y la planilla. Lo que conviene a la suya depende de su volumen y de cómo trabaja.',
      ],
    },
    {
      t: 'Si su pyme tiene la contabilidad atrasada o cambia de contador',
      p: [
        'Es más frecuente de lo que se admite: meses sin registrar, declaraciones hechas sin una contabilidad detrás, o un contador que se fue a mitad de año. Lo primero es medir qué períodos faltan, qué se presentó ante la DGI y qué sigue abierto, y ordenar lo pendiente empezando por lo que corre riesgo de recargo.',
        'Si cambia de contador, pida al anterior los registros, los estados financieros, las declaraciones presentadas con su constancia, los accesos a las plataformas del Estado y una lista de pendientes. Después cambie las claves y, si puede, haga el cambio lejos de un vencimiento.',
        'Mientras se ordena lo de atrás, el mes en curso se mantiene al día, para que no se acumule otro período encima. Escríbanos por WhatsApp y le decimos por dónde empezar con lo que tenga.',
      ],
      imagen: {
        alt: 'Cajas de archivo y carpetas apiladas sobre una mesa de oficina en Ciudad de Panamá, listas para revisar',
        escena:
          'Editorial still life in a modest Panama City office: stacked cardboard archive boxes and blank folders on a table, a closed laptop beside them, city skyline softly blurred through the window at dusk.',
      },
    },
  ],
  pasos: [
    {
      t: 'Haga la lista de sus obligaciones',
      d: 'Qué declara ante la DGI, qué reporta a la CSS, qué paga al municipio y si su aviso de operación refleja lo que hace hoy. Por escrito y con su calendario.',
    },
    {
      t: 'Separe las cuentas del negocio',
      d: 'Una cuenta bancaria solo para la empresa y ningún gasto personal pagado desde ella. Es lo que hace posible todo lo demás.',
    },
    {
      t: 'Junte los comprobantes cada mes',
      d: 'Todas las facturas de compras y gastos a nombre de la empresa, en un único lugar, ordenadas por mes y separadas de las ventas.',
    },
    {
      t: 'Concilie los bancos',
      d: 'Compare cada mes la contabilidad con el estado de cuenta y explique cada diferencia antes de dar el mes por cerrado.',
    },
    {
      t: 'Revise el costo real de su planilla',
      d: 'Salario, cuota patronal vigente y provisiones de décimo, vacaciones y prima de antigüedad, para que el presupuesto no se quede corto.',
    },
    {
      t: 'Reciba los avisos antes de cada vencimiento',
      d: 'No dependa de la memoria. Quien lleve su contabilidad debe avisarle antes de cada fecha, no enterarse después.',
    },
  ],
  faqsExtra: [
    {
      p: '¿Qué impuestos paga una pyme en Panamá?',
      r: 'Los de la DGI que le correspondan por su actividad y su facturación, como el impuesto sobre la renta y, si aplica, el ITBMS, además de los impuestos del municipio donde opera. Con su actividad y su facturación se confirma la lista exacta.',
    },
    {
      p: '¿Cuánto cuesta la contabilidad de una pyme en Panamá?',
      r: 'Depende del volumen de operaciones, del número de empleados en planilla y de qué servicios necesite. Escríbanos por WhatsApp con esos datos y le damos una cifra concreta.',
    },
    {
      p: '¿Una pyme en Panamá está obligada a tener auditoría externa?',
      r: 'No por ser pyme. La auditoría suele hacer falta cuando la pide un tercero, como un banco, un inversionista o una licitación, o cuando la norma de su actividad regulada la exige.',
    },
    {
      p: '¿Qué pasa si mi empresa no reporta la planilla a la CSS a tiempo?',
      r: 'La empresa deja de estar al día con la CSS, lo que puede traer recargos y complica obtener su paz y salvo. Lo que corresponde en su caso depende del atraso, así que conviene revisarlo cuanto antes.',
    },
    {
      p: '¿Puedo pasar la contabilidad de mi pyme a un despacho externo a mitad de año?',
      r: 'Sí. Se recibe lo que haya, se revisa el estado en que está y se sigue desde ahí, procurando hacer el cambio lejos de un vencimiento.',
    },
  ],
  articulos: [
    'contador-interno-o-contabilidad-externa',
    'cuanto-cuesta-un-empleado-en-panama',
    'conciliacion-bancaria-por-que-es-lo-primero',
    'que-impuestos-municipales-paga-un-negocio-en-panama',
    'que-pide-un-banco-panameno-para-dar-credito',
    'senales-de-que-su-contabilidad-tiene-problemas',
  ],
  actualizado: '2026-09-28',
};
