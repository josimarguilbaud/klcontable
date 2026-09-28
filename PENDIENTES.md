# Pendientes — klcontable.com

Estado al 28/09/2026, al cerrar la sesión en la nube. Todo lo de abajo ya está
en `main` y publicado.

## Hecho en esa sesión

- 20 artículos nuevos (32 en total), todos con respuesta corta, puntos clave y
  FAQ. 3 guías completas (8 secciones, pasos, 8 FAQ cada una).
- 66 imágenes generadas con fal.ai (artículos, guías, servicios, portada,
  páginas), con versión de 800 px para móvil.
- Colores de la web unificados con los del logo. Footer rehecho con logo claro.
- Revisión SEO: títulos ≤ 60, schema completo, sitemap con fechas, enlaces
  entre servicios y blog, `llms.txt`.
- Sección `/novedades/` con la primera nota (Ley 462, cuota patronal CSS).
- Search Console: archivo de verificación subido.

## Para hacer en sesión local (con navegador)

La sesión en la nube no podía abrir webs de terceros. En local, con Claude en
Chrome:

1. **Comparar con la competencia: https://avergara.com/** (A. Vergara & Co.,
   CPA desde 1985, El Cangrejo). Revisar la web completa contra
   https://klcontable.com y listar qué tienen que nos falte: diseño, formularios,
   precios, testimonios, página del fundador, sección «Actualidad», servicios.
   Lo que ya se sabía por Google: número de firma CPA (C.P.A. P.J. 29), página
   del fundador con formación, dirección y teléfono fijo, fecha de fundación,
   título orientado a «Contadores Públicos Autorizados en Panamá», noticias con
   fecha, servicios de contabilidad de costos, revisión y compilación de
   estados financieros y asesoría de RR. HH., Instagram y X.
2. **Revisar klcontable.com publicada**: que las fotos cargan, móvil, colores,
   footer, `/novedades/`, `/llms.txt`, `/sitemap-index.xml`.
3. **Comprobar que `www.klcontable.com` redirige con 301 a `klcontable.com`.**
4. **Novedades para confirmar en la fuente oficial** antes de publicarlas:
   - Prórroga de la actualización del RUC — Resolución 201-6695 de 12/08/2025,
     Gaceta Oficial 30348: https://dgi.mef.gob.pa/New/news?n=288
     (el resumen del buscador no dejaba claro el año del plazo).
   - Calendario Tributario de Cumplimiento 2026:
     https://dgi.mef.gob.pa/Calendario/Calendario

## Datos que tiene que dar el dueño (van en `src/data/site.ts`)

- Dirección física (clave para Google Maps / Perfil de Empresa).
- RUC.
- ~~Contadora responsable e idoneidad~~ — hecho el 28/09/2026: Licda. Luris
  Escudero Muñoz, Idoneidad CPA No. 0630-2010 (`CONTADORA` en `site.ts`).
- Foto real de la Licda. Escudero para /nosotros/ (`CONTADORA.foto`).
- Formación y trayectoria de la Licda. Escudero, si quiere contarla.
- Año de fundación de la firma.
- Redes sociales (Instagram, Facebook, LinkedIn) para el footer y `sameAs`.
- Qué servicios más ofrece de verdad (costos, compilación de estados
  financieros, RR. HH.) antes de crear sus páginas.

## Para que revise un contador

- Afirmaciones generales sin cifra en las guías y FAQ: orden de trámites al
  abrir (Registro Público → DGI/RUC → aviso de operación → municipio), SIPE,
  agente residente, tasa única de sociedades, PAC en facturación electrónica,
  renta de fuente panameña, comercio al por menor reservado a panameños,
  reclamos ante MITRADEL.
- Título flojo: «Utilidad vs Flujo de Caja: Gano y No Hay Dinero».
- **Marzo de 2027**: la cuota patronal pasa al 14.25 %. Actualizar las frases
  que dicen «hoy del 13.25 %» (grep `13.25` en `src/data/`).

## Seguridad

- Rotar la clave de fal.ai que se pegó en el chat, si no se hizo al crear el
  secreto `FAL_KEY`.
