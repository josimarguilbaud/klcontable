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

## Sesión local del 28/09/2026 — QA con navegador y comparación

1. **Comparación con https://avergara.com/** — hecha. Brechas reales:
   - Sin dirección física ni teléfono fijo en el footer (ya pendiente).
   - `/nosotros/` no tiene foto real ni narrativa de formación/trayectoria de
     la Licda. Escudero (ya pendiente); sí tiene idoneidad, misión/visión y FAQ.
   - `/novedades/` solo tiene una nota; avergara.com tiene un flujo constante
     de «Actualidad» con noticias fechadas (la más reciente, jul/2026). La
     brecha es de volumen, no de estructura — la sección ya existe y funciona.
   - Sin redes sociales en el footer (ya pendiente).
   - Servicios que avergara.com sí lista y KL Contable no tiene página propia:
     contabilidad de costos, revisión/compilación de estados financieros,
     asesoría de RR. HH. — confirmar con la Licda. Escudero si se ofrecen de
     verdad antes de crear páginas (ya pendiente, ver abajo).
   - Dato nuevo: **avergara.com tampoco publica precios ni testimonios.** La
     página `/precios/` del plan original seguiría siendo una ventaja real,
     no ponerse al día.
2. **Revisión de klcontable.com publicada** — hecha. Sin problemas: las 27
   imágenes cargan (200 OK), footer completo con enlaces oficiales DGI/CSS/
   Panamá Emprende, `/novedades/`, `/llms.txt`, `/sitemap-index.xml` y
   `/robots.txt` responden 200. Móvil se ve bien y el menú hamburguesa abre
   correctamente (confirmado por el DOM).
3. **`www.klcontable.com` — ⚠️ no redirigía con 301.** Causa: `nginx.conf`
   tenía `server_name _;` como único bloque, así que servía el mismo
   contenido sin mirar el host; solo había un `<link rel="canonical">`, que es
   una sugerencia, no una orden. **Corregido** en `nginx.conf`: bloque nuevo
   `server_name www.klcontable.com` con `return 301 https://klcontable.com$request_uri;`.
   `npm run build` verificado. **Falta pushear a `main` para que despliegue**
   (confirmar con Josimar antes, porque no hay staging).
4. **Fuentes oficiales verificadas en dgi.mef.gob.pa**:
   - Prórroga del RUC: confirmada — Resolución del 21/08/2025 (Gaceta 30348),
     plazo extendido hasta el **31 de diciembre de 2025**. ⚠️ Ese plazo ya
     pasó (hoy 28/09/2026) y no hay prórroga posterior en las noticias de la
     DGI. **No publicar esta novedad como vigente** — no hay borrador todavía
     en `src/data/novedades.ts`, así que no hace falta corregir nada, solo no
     escribirla así.
   - Calendario Tributario de Cumplimiento 2026: la página oficial
     (dgi.mef.gob.pa/Calendario/Calendario) solo tiene publicados enero a
     agosto. Septiembre-diciembre todavía no están cargados por la DGI — si
     se construye `/calendario-tributario/`, esos 4 meses no tienen fuente
     todavía.

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
