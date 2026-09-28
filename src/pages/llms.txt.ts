/**
 * `/llms.txt` — el índice del sitio para asistentes de IA (ChatGPT, Claude,
 * Perplexity, Gemini…), según la propuesta de llmstxt.org.
 *
 * Es el equivalente de un sitemap para GEO: en vez de URLs sueltas les da, en
 * Markdown, qué es cada página y qué pregunta responde. Se genera de los mismos
 * datos que las páginas, así que nunca se queda desactualizado.
 */
import type { APIRoute } from 'astro';
import { SITE, CONTADORA, CREDENCIAL } from '../data/site';
import { TODOS } from '../data/servicios';
import { GUIAS } from '../data/guias';
import { DESARROLLO_GUIAS } from '../data/guias/index';
import { ARTICULOS } from '../data/articulos';
import { NOVEDADES } from '../data/novedades';

export const GET: APIRoute = () => {
  const u = (ruta: string) => new URL(ruta, SITE.dominio).href;
  const blog = [...ARTICULOS].sort((a, b) => b.fecha.localeCompare(a.fecha));

  const texto = [
    `# ${SITE.nombre}`,
    '',
    `> Firma de Contador Público Autorizado en ${SITE.ciudad}, Panamá, dirigida por la ${CONTADORA.nombreCompleto}, Contadora Pública Autorizada (${CREDENCIAL})${SITE.anosExperiencia ? `, con ${SITE.anosExperiencia} años de experiencia` : ''}. Contabilidad mensual, impuestos ante la DGI, planilla ante la CSS y trámites empresariales para pymes, emprendedores y extranjeros con empresa en Panamá.`,
    '',
    `Contacto: ${SITE.telefono} (teléfono y WhatsApp, ${SITE.horario.toLowerCase()}) · ${SITE.correo}. Primera consulta gratuita.`,
    '',
    '## Servicios',
    '',
    ...TODOS.map((s) => `- [${s.nombre}](${u(`/servicios/${s.slug}/`)}): ${s.descripcion}`),
    '',
    '## Guías por tipo de cliente',
    '',
    ...GUIAS.map((g) => `- [${g.h1}](${u(`/${g.slug}/`)}): ${DESARROLLO_GUIAS[g.slug]?.resumen ?? g.descripcion}`),
    '',
    '## Herramientas',
    '',
    `- [Calculadora de Seguro Social](${u('/calculadoras/')}): cuota del trabajador y cuota patronal a la CSS con los porcentajes vigentes de la Ley 462 de 2025 y su calendario de aumentos.`,
    '',
    '## Novedades DGI y CSS (con fuente oficial)',
    '',
    ...NOVEDADES.map((n) => `- [${n.h1}](${u(`/novedades/${n.slug}/`)}) (${n.fecha}): ${n.resumen} Fuente: ${n.fuente.url}`),
    '',
    '## Artículos',
    '',
    ...blog.map((a) => `- [${a.h1}](${u(`/blog/${a.slug}/`)}): ${a.resumen ?? a.descripcion}`),
    '',
    '## Opcional',
    '',
    `- [Nosotros](${u('/nosotros/')})`,
    `- [Contacto](${u('/contacto/')})`,
    '',
  ].join('\n');

  return new Response(texto, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
