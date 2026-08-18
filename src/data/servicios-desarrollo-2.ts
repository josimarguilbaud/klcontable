/**
 * Bloques 4 y 5 de cada servicio.
 *
 * Los tres primeros (en `servicios-desarrollo.ts`) dejaron las fichas en 1,7×
 * la longitud original, no en el 4× pedido. Estos dos cierran esa distancia.
 *
 * Los dos siguen un patrón deliberado y distinto al de los tres primeros:
 * el cuarto responde «¿y si no hago nada?» —el costo de la inacción, que es lo
 * que empuja a llamar— y el quinto es «cómo empezamos», que quita la fricción
 * de dar el paso. Así se cubre el embudo entero dentro de una sola página.
 *
 * Misma regla de siempre: ni una cifra sin verificar.
 */
import type { Bloque } from './servicios-desarrollo';

export const DESARROLLO_2: Record<string, Bloque[]> = {
  'asesoria-contable-panama': [
    {
      t: 'Qué cuesta no tener a quién preguntar',
      p: [
        'No se ve en ninguna factura, y por eso se subestima. Son decisiones tomadas por intuición que salieron caras: un precio de venta que no cubría el costo real, una contratación que descuadró la caja, una inversión hecha en el peor mes del año.',
        'Ninguna de esas es una multa ni aparece en un requerimiento. Simplemente son beneficios que no llegaron, y como nadie los echa de menos, nadie corrige la causa.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Con una conversación de media hora en la que nos cuenta a qué se dedica, cómo va el negocio y qué decisiones tiene encima de la mesa. No hace falta que traiga documentos ni que prepare nada.',
        'De ahí sale un diagnóstico concreto: qué le está faltando saber y con qué frecuencia le conviene revisarlo. Si resulta que con lo que ya tiene le basta, se lo decimos y no le vendemos nada.',
      ],
    },
  ],

  'servicios-de-contabilidad-outsourcing-en-panama': [
    {
      t: 'Qué pasa cuando la contabilidad se lleva a ratos',
      p: [
        'Se acumula. Los comprobantes se guardan «para cuando haya tiempo», los bancos dejan de cuadrarse y llega un momento en que reconstruir el año cuesta más que haberlo llevado al día.',
        'El síntoma que lo delata es siempre el mismo: el dueño ya no sabe si el negocio ganó dinero el mes pasado. Y a partir de ahí toma decisiones a ciegas sin darse cuenta de que las está tomando a ciegas.',
        'El otro coste es la dependencia de una sola persona. Si quien lleva sus números se va, se va con el conocimiento, y el siguiente empieza preguntando lo que el anterior ya sabía.',
      ],
    },
    {
      t: 'El traspaso, si ya tiene contador',
      p: [
        'Es la parte que más frena a la gente y la que menos trabajo le da a usted. Recibimos lo que haya —esté como esté—, revisamos en qué estado está y le decimos con claridad qué encontramos antes de seguir.',
        'No hay que esperar al cierre del año, no hay que empezar los registros de cero y no hace falta que usted gestione nada con el despacho anterior.',
      ],
    },
  ],

  'servicios-de-gestion-tributaria-en-panama': [
    {
      t: 'Lo que se acumula mientras no se mira',
      p: [
        'Una obligación pendiente no se queda quieta: el recargo por mora crece mientras siga sin resolverse, así que la cifra que hoy es incómoda dentro de seis meses es otra.',
        'Y hay un efecto de segundo orden que sorprende más: un atraso fiscal bloquea cosas que no tienen nada que ver con impuestos. Un crédito, una licitación, la renovación de un permiso. De golpe lo que estaba haciendo se detiene por un papel que no tiene.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Con un diagnóstico: qué obligaciones le corresponden realmente según su actividad, cuáles se han presentado y cuáles no, y si hay algo abierto de períodos anteriores.',
        'Eso suele ser menos grave de lo que el dueño teme, porque el miedo trabaja con estimaciones y aquí se trabaja con datos. A partir de ese punto, lo que corre es el calendario, y el aviso llega antes de la fecha.',
      ],
    },
  ],

  'servicios-de-planilla-en-panama': [
    {
      t: 'Los errores que no se notan hasta la liquidación',
      p: [
        'Un cálculo mal hecho en la planilla no da síntomas: se repite mes tras mes sin que nadie lo mire, porque el empleado cobra algo y la empresa paga algo.',
        'Aparece al final, cuando hay que liquidar y las cuentas no cuadran. Entonces ya no es un ajuste contable, es una conversación con alguien que se va de la empresa y que tiene razón.',
        'Lo mismo pasa con las provisiones que no se apartaron: el décimo y las vacaciones se generaron igual, solo que ahora hay que pagarlos todos juntos y sin haberlos previsto.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Revisando su planilla actual: cómo se está calculando, si las clasificaciones son las correctas y si las provisiones están donde deben. Es un repaso que suele encontrar algo, y cuanto antes se encuentre, más barato sale.',
        'Si todavía no tiene empleados y está por contratar al primero, empezamos por el otro extremo: la cifra real de lo que le va a costar esa persona, antes de que le haga una oferta.',
      ],
    },
  ],

  'servicios-de-auditoria-contable-en-panama': [
    {
      t: 'Cuando la auditoría llega con prisa',
      p: [
        'El escenario típico: hay una operación en marcha —un crédito, una licitación, un socio nuevo— y alguien pide estados financieros auditados para la semana que viene.',
        'Si la contabilidad está al día, es cuestión de trabajo. Si no lo está, la auditoría se convierte en una reconstrucción, y la operación que motivaba todo se queda esperando.',
        'Por eso conviene decidir con antelación si este año va a necesitar una. No porque la auditoría tarde mucho, sino porque lo que la precede sí.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Con una revisión previa que responde una sola pregunta: si hoy entrara un auditor, ¿qué encontraría? Eso le da la lista de lo que hay que ordenar antes, en vez de descubrirlo a mitad del trabajo.',
        'Si sus estados financieros y sus declaraciones no dicen lo mismo, aquí es donde se ve, y es lo primero que hay que resolver.',
      ],
    },
  ],

  'servicio-de-mensajeria-y-tramites-empresariales-en-panama': [
    {
      t: 'Los trámites que se quedan dormidos',
      p: [
        'Un expediente parado no avisa. Se queda esperando un documento que nadie pidió por escrito, y la empresa asume que va avanzando hasta que necesita el resultado.',
        'Ahí es donde más tiempo se pierde: no en hacer el trámite, sino en descubrir tres meses después que llevaba tres meses detenido.',
        'Por eso el seguimiento es parte del servicio y no un extra. Si algo se atasca, se lo decimos con lo que falta.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Dígannos qué necesita y para cuándo. Le decimos qué documentos hacen falta de su parte, cuáles conseguimos nosotros y si algo requiere un poder suyo — eso siempre por adelantado, nunca a mitad de camino.',
        'Si vive fuera de Panamá, esta es justo la parte que hace que su empresa avance sin que usted tenga que viajar.',
      ],
    },
  ],

  'facturacion-electronica-panama': [
    {
      t: 'Qué pasa si lo deja para más adelante',
      p: [
        'Lo primero, y lo más inmediato, es comercial: un cliente le pide factura electrónica y usted no puede dársela. Esa venta se complica o se pierde, y no por precio.',
        'Lo segundo es que el trabajo no desaparece, solo se concentra. Hacerlo con calma es un proceso ordenado; hacerlo con un cliente esperando es hacerlo mal y tener que rehacerlo.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Con una revisión de cómo factura hoy: con qué herramienta, cuántas personas emiten, qué volumen maneja y en qué estado están sus datos fiscales — que es donde se atasca casi todo el mundo.',
        'Con eso sabemos qué proveedor autorizado le encaja y qué hay que arreglar antes de empezar. Y le decimos el plazo real, no el optimista.',
      ],
    },
  ],

  'precios-de-transferencia-panama': [
    {
      t: 'Qué pasa si no se documenta',
      p: [
        'Mientras no haya una revisión, no pasa nada visible. Ese es exactamente el problema: la ausencia de consecuencias inmediatas se confunde con que no había obligación.',
        'El día que se pide la documentación, hay que preparar con información de años anteriores un estudio que debería haberse hecho entonces. Se puede, pero es más caro, más lento y bastante menos sólido.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Con una pregunta sencilla: ¿con quién opera su empresa? Si en esa lista aparece una matriz, una filial u otra sociedad del mismo dueño, ya hay algo que revisar.',
        'A partir de ahí determinamos qué operaciones cuentan, si le corresponde declarar y qué alcance necesita el estudio. La revisión inicial no compromete a nada.',
      ],
    },
  ],

  'regimenes-especiales-panama': [
    {
      t: 'El riesgo de que le lleven la contabilidad como si fuera una empresa normal',
      p: [
        'Es más común de lo que parece: la empresa está acogida a un régimen especial y su contabilidad se lleva con los criterios del régimen general, porque nadie se detuvo a mirar la diferencia.',
        'El resultado son informes propios de la licencia que no se preparan, criterios que no se aplican y, en el peor caso, un incentivo en riesgo — que es justo lo que motivó acogerse al régimen.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Determinando bajo qué régimen está exactamente y qué le exige su licencia hoy, que no siempre es lo que le exigía cuando la obtuvo.',
        'Con eso sobre la mesa se ve qué se está cumpliendo, qué no, y qué informes hay que empezar a preparar. Si además está evaluando cambiar de régimen o acogerse a uno, ese análisis se hace antes de mover nada.',
      ],
    },
  ],

  'impuestos-municipales-panama': [
    {
      t: 'Lo que se acumula en silencio',
      p: [
        'El impuesto municipal tiene una particularidad incómoda: no reclama. Puede pasar años sin que nadie de la empresa lo mire y sin que llegue ningún aviso.',
        'Eso genera una falsa sensación de estar al día que se rompe de golpe, normalmente cuando hace falta un paz y salvo para otra cosa. Y entonces hay que resolverlo con prisa y con un trámite parado esperando.',
      ],
    },
    {
      t: 'Cómo empezamos',
      p: [
        'Revisando en qué situación está su empresa ante el municipio: si hay períodos pendientes, si la actividad declarada es la que corresponde y si su clasificación le está costando de más.',
        'Ese repaso suele traer una sorpresa, para bien o para mal, pero en los dos casos es mejor tenerla ahora que el día que le pidan el paz y salvo.',
      ],
    },
  ],
};
