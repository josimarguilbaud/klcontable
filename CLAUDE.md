# klcontable.com — web de KL Contable (Astro)

Firma de contabilidad en Ciudad de Panamá. Astro estático + Tailwind 4, servido
por nginx en un contenedor en Netcup (Coolify). Hecha por Elemento Web.

## Antes de tocar nada

**Un push a `main` despliega a producción.** `.github/workflows/deploy.yml` entra
por SSH a Netcup y reconstruye; se pone rojo si la web no responde 200 en un
minuto. No hay staging.

**`npm run build` tiene que pasar** antes de pushear.

## Regla dura de contenido: nada inventado

Una firma contable que publica un dato falso pierde justo lo que vende.

- **Cifras fiscales** (porcentajes, plazos, montos, umbrales): solo las que
  están en `src/data/fiscal.ts`, con su fuente oficial y fecha de comprobación.
  Hoy: cuotas CSS de la Ley 462 de 2025 (trabajador 9.75 %; patronal 13.25 %
  hasta 28/02/2027, 14.25 % hasta 28/02/2029, 15.25 % después).
- **Datos del negocio** (`src/data/site.ts`): lo no confirmado va a `null` y la
  web no lo muestra. Pendientes: dirección y RUC. Confirmados: 35 años y la
  contadora (`CONTADORA`): Licda. Luris Escudero Muñoz, fundadora, Contadora
  Pública Autorizada con Idoneidad CPA No. 0630-2010. La firma se presenta como
  «Contador Público Autorizado» en toda la web. Su foto, solo real (nunca IA).
- **Novedades** (`src/data/novedades.ts`): el tipo exige `fuente` con URL y
  fecha de comprobación. Un resumen de buscador o la web de otro despacho NO es
  fuente: hay que haber leído la norma o el comunicado oficial.
- Sin testimonios, clientes, credenciales ni caras presentadas como «el equipo».

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Datos del negocio | `src/data/site.ts` |
| Cifras oficiales | `src/data/fiscal.ts` |
| 10 servicios | `src/data/servicios.ts`, `servicios-nuevos.ts`, desarrollo en `servicios-desarrollo*.ts` |
| Blog (33 artículos) | `src/data/articulos.ts` (12 originales) + `articulos-a/b/c.ts` (21 nuevos). Un recuadro con enlace al final de una sección va en `enlace`, no dentro del texto: los párrafos se pintan como texto plano |
| Guías (3) | `src/data/guias.ts` + desarrollo largo en `src/data/guias/<slug>.ts` |
| Novedades DGI/CSS | `src/data/novedades.ts` → `/novedades/` |
| Imágenes generadas | `public/img/ia/**` + descripciones en `src/data/imagenes-ia.json` |
| Fotos rescatadas de la web vieja | `public/img/*.jpg` (respaldo) |
| Layout, SEO global, footer | `src/layouts/Base.astro` |
| Colores (los del logo) | `src/styles/global.css` |
| Índice para IA | `src/pages/llms.txt.ts` → `/llms.txt` |
| Sitemap | automático, con `lastmod` de artículos y guías (`astro.config.mjs`) |

**URLs:** los servicios viven en `/servicios/`; nginx redirige con 301 las
viejas `/services/...` de la web caída. No se quitan nunca.

## SEO / GEO: el patrón de cada página de contenido

Respuesta corta arriba (`resumen`, se entiende sola: es lo que citan Google y los
asistentes de IA) → lo esencial en viñetas → índice con anclas → secciones →
preguntas frecuentes (`FAQPage`). Títulos ≤ 60 caracteres con « | KL Contable»,
descripciones 140-158. Cada página declara su schema (BlogPosting, Article,
Service, NewsArticle…); el negocio (`AccountingService`, `@id: /#negocio`) está
en `Base.astro`.

## Imágenes con fal.ai

1. Añadir una entrada en `src/data/imagenes-ia.json` (`clave`, `archivo`, `alt`
   en español, `escena` en inglés: foto editorial en Panamá, sin texto legible
   ni caras en primer plano).
2. GitHub → Actions → «Generar imágenes» → Run workflow (usa el secreto
   `FAL_KEY`; solo genera las que faltan, más la versión de 800 px para móvil).
   Puede lanzarse sobre una rama para revisarlas antes de llevarlas a `main`.
3. En local: `FAL_KEY=... npm run imagenes`.

Si una imagen no existe, la página se pinta sin ella: el build no se rompe.

## Comandos

```bash
npm run dev       # localhost:4330
npm run build     # obligatorio antes de pushear
npm run imagenes  # generar imágenes con fal.ai (necesita FAL_KEY)
```

Search Console: verificado con `public/googlea2e93f79dd9b673c.html` (no borrar).
Sitemap a enviar: `https://klcontable.com/sitemap-index.xml`.
