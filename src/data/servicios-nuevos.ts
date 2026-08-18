/**
 * Los cuatro servicios que faltaban.
 *
 * Salieron del inventario contra el prototipo de AI Studio (18/08/2026): tenía
 * nueve servicios y la web solo seis. Estos cuatro son justo los que menos
 * competencia tienen en Panamá y los que más factura un despacho.
 *
 * ⚠️ Slugs NUEVOS, en español, bajo `/services/` — el prefijo en inglés se
 * conserva por herencia (es la ruta indexada), pero lo que se añade de cero ya
 * no repite el anglicismo. Ninguno de estos existía en la web caída, así que no
 * hay nada indexado que preservar aquí.
 *
 * Igual que el resto: los tecnicismos aparecen porque son lo que la gente
 * escribe en Google, pero explicados en la misma frase. Y ni una cifra sin
 * verificar — ni tarifas, ni plazos, ni umbrales. Donde haría falta un número,
 * se manda a la consulta.
 */
import type { Servicio } from './servicios';

export const SERVICIOS_NUEVOS: Servicio[] = [
  {
    slug: 'facturacion-electronica-panama',
    nombre: 'Facturación Electrónica',
    titulo: 'Facturación Electrónica en Panamá | Implementación y PAC — KL Contable',
    descripcion:
      'Le montamos la facturación electrónica de su empresa en Panamá: elección del PAC, homologación ante la DGI y su equipo formado para emitir sin sustos.',
    h1: 'Facturación electrónica en Panamá',
    gancho:
      'De la factura en papel a la electrónica sin parar de vender ni un día.',
    resumen: 'Su empresa emitiendo facturas electrónicas, bien montado desde el principio.',
    icono: 'sobre',
    paraQuien:
      'Para la empresa que todavía factura como siempre y sabe que tiene que dar el paso, y para la que ya lo intentó por su cuenta y se quedó a medias entre el proveedor y la DGI.',
    incluye: [
      'Revisión de cómo factura hoy y qué le hace falta cambiar.',
      'Elección del proveedor autorizado (PAC) que encaja con su volumen y su forma de trabajar.',
      'La homologación ante la Dirección General de Ingresos, hecha por nosotros.',
      'Configuración de sus series, sus datos fiscales y sus formatos de documento.',
      'Formación a quien vaya a emitir, en su propio sistema y con sus casos reales.',
      'Acompañamiento las primeras semanas, que es cuando salen las dudas de verdad.',
    ],
    senales: [
      'Sabe que tiene que dar el paso pero no sabe por dónde se empieza.',
      'Un cliente ya le pidió factura electrónica y no supo qué contestar.',
      'Empezó el trámite por su cuenta y se quedó atascado entre el proveedor y la DGI.',
      'Tiene el sistema montado pero nadie en su equipo se atreve a emitir.',
    ],
    faqs: [
      {
        p: '¿Qué es un PAC y por qué necesito uno?',
        r: 'Es un proveedor autorizado por la Dirección General de Ingresos para validar sus facturas electrónicas. La factura no es válida por el hecho de emitirla desde su computadora: tiene que pasar por ese canal autorizado, y elegir bien cuál marca la diferencia entre un proceso cómodo y uno que le da guerra cada mes.',
      },
      {
        p: '¿Cuánto tarda la implementación?',
        r: 'Depende sobre todo de cómo factura hoy y de cuántas personas emitan. Lo que más alarga el proceso no es el trámite: es descubrir a mitad de camino que los datos fiscales de la empresa no están como deberían. Por eso lo primero que hacemos es revisarlos.',
      },
      {
        p: '¿Tengo que cambiar de sistema o de programa?',
        r: 'No necesariamente. Primero miramos qué usa y si se puede conectar; cambiar de herramienta es la última opción, no la primera. Un cambio de sistema en plena operación cuesta mucho más que la propia facturación electrónica.',
      },
      {
        p: '¿Qué pasa con las facturas que ya emití en papel?',
        r: 'No desaparecen ni pierden validez por haber dado el paso. Lo que sí conviene es ordenar el archivo antes del cambio, porque después nadie vuelve a mirarlo.',
      },
    ],
  },
  {
    slug: 'precios-de-transferencia-panama',
    nombre: 'Precios de Transferencia',
    titulo: 'Precios de Transferencia en Panamá | Informe 930 y Estudio — KL Contable',
    descripcion:
      'Estudio de precios de transferencia y declaración informativa en Panamá para empresas que operan con partes relacionadas dentro o fuera del país.',
    h1: 'Precios de transferencia en Panamá',
    gancho:
      'Si su empresa le compra o le vende a una empresa relacionada, esto le toca — y es de lo que más caro sale ignorar.',
    resumen: 'El estudio y la declaración cuando opera con empresas relacionadas.',
    icono: 'lupa',
    paraQuien:
      'Para la empresa panameña que hace operaciones con su matriz, con una filial, o con otra sociedad del mismo dueño. Da igual que sea una sola factura al año: lo que activa la obligación es la relación, no el volumen.',
    incluye: [
      'Revisión de con quién opera y cuáles de esas operaciones cuentan como partes relacionadas.',
      'El estudio técnico que sostiene que sus precios son los de mercado.',
      'La declaración informativa ante la Dirección General de Ingresos, presentada en plazo.',
      'Documentación ordenada y guardada, lista para el día que se la pidan.',
      'Aviso con antelación del vencimiento anual, que es donde casi todos se atrasan.',
    ],
    senales: [
      'Su empresa le factura a otra sociedad del mismo dueño.',
      'Tiene una matriz o una filial fuera de Panamá y se mueven dinero entre ellas.',
      'Le han hablado del formulario 930 y no sabe si le aplica.',
      'Lo declaró el año pasado pero nadie preparó el estudio que lo respalda.',
    ],
    faqs: [
      {
        p: '¿Qué cuenta como una parte relacionada?',
        r: 'A grandes rasgos, cualquier empresa o persona con la que exista un vínculo de propiedad o de control: una matriz, una filial, otra sociedad del mismo dueño. La duda típica —«pero si es mi propia empresa»— es justo el caso que la norma quiere ver documentado.',
      },
      {
        p: '¿Me aplica aunque sea una empresa pequeña?',
        r: 'La obligación no nace del tamaño, sino de la existencia de operaciones con partes relacionadas. Hay empresas muy pequeñas obligadas y empresas grandes que no lo están. Revisarlo cuesta una conversación; descubrirlo tarde cuesta bastante más.',
      },
      {
        p: 'Declaré pero no tengo el estudio. ¿Es grave?',
        r: 'La declaración y el estudio son dos cosas distintas y ambas pueden pedírsele. Presentar la declaración sin tener detrás el estudio que la sostiene deja a la empresa en una posición incómoda si algún día hay una revisión.',
      },
      {
        p: '¿Cuánto cuesta un estudio de precios de transferencia?',
        r: 'Depende del número de operaciones y de su complejidad; no es lo mismo un préstamo entre sociedades que un flujo continuo de mercancía. Se lo cotizamos después de ver con quién opera, y sin compromiso.',
      },
    ],
  },
  {
    slug: 'regimenes-especiales-panama',
    nombre: 'Regímenes Especiales',
    titulo: 'Regímenes Especiales en Panamá | SEM, EMMA, Zona Libre — KL Contable',
    descripcion:
      'Asesoría contable y fiscal para empresas bajo regímenes especiales en Panamá: SEM, EMMA, Zona Libre de Colón y Panamá Pacífico.',
    h1: 'Regímenes especiales en Panamá',
    gancho:
      'Estar en un régimen especial no significa no tener obligaciones: significa tener otras.',
    resumen: 'Para empresas bajo SEM, EMMA, Zona Libre de Colón o Panamá Pacífico.',
    icono: 'edificio',
    paraQuien:
      'Para la multinacional que opera bajo régimen SEM o EMMA, y para la empresa establecida en Zona Libre de Colón o en Panamá Pacífico que necesita a alguien que conozca ese terreno concreto.',
    incluye: [
      'Contabilidad llevada según lo que exige su régimen, que no es lo mismo que el régimen general.',
      'Las obligaciones y los informes propios de su licencia, presentados en plazo.',
      'Coordinación con la entidad que supervisa su régimen cuando hace falta.',
      'Aviso anticipado de los vencimientos que le aplican a usted, no de una lista genérica.',
      'Un interlocutor que ya sabe qué es una sede de empresa multinacional y no hay que explicárselo.',
    ],
    senales: [
      'Su empresa tiene una licencia especial y su contador la trata como una empresa normal.',
      'No tiene claro qué obligaciones le quedan y cuáles no, dentro de su régimen.',
      'Está evaluando acogerse a un régimen y quiere saber qué implica de verdad.',
      'Le piden informes propios de su licencia y nadie en la empresa sabe prepararlos.',
    ],
    faqs: [
      {
        p: '¿Un régimen especial me libra de declarar?',
        r: 'No. Cambia qué se declara y bajo qué reglas, pero no elimina las obligaciones: en algunos casos añade informes propios que el régimen general no tiene. El error más caro es asumir que «como estoy en régimen especial, no me toca nada».',
      },
      {
        p: '¿Trabajan con SEM y EMMA?',
        r: 'Sí, y también con empresas de Zona Libre de Colón y de Panamá Pacífico. Son cuatro marcos con lógicas distintas, así que lo primero siempre es ver bajo cuál está y qué le exige exactamente su licencia.',
      },
      {
        p: 'Estoy pensando en acogerme a un régimen. ¿Me conviene?',
        r: 'Depende de su actividad, de dónde estén sus clientes y de qué estructura tenga. Conviene mirarlo antes de montar nada: acogerse a un régimen y descubrir después que no encajaba es caro de deshacer.',
      },
    ],
  },
  {
    slug: 'impuestos-municipales-panama',
    nombre: 'Impuestos Municipales',
    titulo: 'Impuestos Municipales en Panamá | Paz y Salvo Municipal — KL Contable',
    descripcion:
      'Gestión de impuestos municipales en Panamá: declaración jurada, pago mensual y paz y salvo del municipio para su empresa.',
    h1: 'Impuestos municipales en Panamá',
    gancho:
      'El impuesto que casi nadie recuerda hasta que le bloquea un trámite.',
    resumen: 'La declaración, el pago mensual y el paz y salvo del municipio.',
    icono: 'personas',
    paraQuien:
      'Para cualquier empresa con actividad en un municipio panameño, que son prácticamente todas. Y muy en especial para quien descubrió que lo debía el día que fue a renovar algo.',
    incluye: [
      'Su declaración jurada municipal, preparada y presentada.',
      'El seguimiento del pago mensual, para que no se acumule sin que nadie mire.',
      'La gestión del paz y salvo municipal cuando lo necesite.',
      'Revisión de si su actividad y su clasificación son las correctas, que es donde suele estar el error.',
      'Aviso antes del vencimiento, igual que con el resto de sus obligaciones.',
    ],
    senales: [
      'No sabe si su empresa está al día con el municipio.',
      'Fue a hacer un trámite y le pidieron un paz y salvo que no tenía.',
      'Nadie le ha hablado nunca del impuesto municipal, ni su contador anterior.',
      'Le llegó un aviso del municipio y no entiende de qué período es.',
    ],
    faqs: [
      {
        p: '¿El impuesto municipal es lo mismo que los impuestos de la DGI?',
        r: 'No, son cosas distintas y con destinatarios distintos: uno va al municipio y el otro al Estado. Estar al día con la Dirección General de Ingresos no significa estar al día con el municipio, y esa confusión es la que produce las sorpresas.',
      },
      {
        p: '¿Qué pasa si llevo años sin pagarlo?',
        r: 'Se acumula en silencio, porque el municipio no suele llamar a la puerta. Aparece el día que necesita un paz y salvo para renovar un aviso de operación, para una licitación o para un trámite bancario, y entonces hay que ponerse al día antes de poder seguir.',
      },
      {
        p: '¿Para qué sirve el paz y salvo municipal?',
        r: 'Es la constancia de que su empresa no debe nada al municipio, y se la piden en bastantes más sitios de los que uno espera. Conviene tenerlo antes de necesitarlo, no cuando ya está a mitad de un trámite con prisa.',
      },
    ],
  },
];
