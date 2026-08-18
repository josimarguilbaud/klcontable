# klcontable.com — recuperar y superar

> Plan de reconstrucción. Escrito el 17/08/2026 con el contenido rescatado de
> web.archive.org (captura del 15/05/2026, la última antes de que cayera).

---

## 1. Qué se recuperó, y qué no

Está todo en `recuperado/`: el HTML original de cada página y su texto limpio.

| Página | Estado |
|---|---|
| `/` (portada) | ✅ completa, 286 líneas |
| `/nosotros/` | ✅ completa |
| `/services/` (índice) | ✅ completa |
| `/blog/` | ✅ la portada del blog (sin los artículos) |
| `/services/asesoria-contable-panama/` | ✅ completa |
| `/services/servicios-de-auditoria-contable-en-panama/` | ✅ completa |
| `/services/servicios-de-contabilidad-outsourcing-en-panama/` | ✅ completa |
| `/services/servicios-de-gestion-tributaria-en-panama/` | ✅ completa |
| `/services/servicios-de-planilla-en-panama/` | ❌ **el archivo nunca la capturó** (503 en las 3 capturas) |
| `/services/servicio-de-mensajeria-y-tramites-empresariales-en-panama/` | ❌ **igual** |

Las dos perdidas hay que reescribirlas. No es drama: se iban a reescribir de
todas formas, y su H2 y su enfoque sí están en la portada y en `/services/`.

**Del blog no queda nada más que el índice.** Si tienes copia de los artículos
(exportación de WordPress, Google Search Console, o el correo de algún backup),
sale ganando; si no, se empieza de cero.

## 2. Los datos del negocio que se rescataron

- Marca: **KL Contable**
- H1: «Contador en Panamá» · «Servicios de Contabilidad en Panamá»
- Correo: `info@klcontable.com`
- Teléfono: **6931-7568**, lunes a viernes
- Ubicación: Ciudad de Panamá
- Seis servicios: Asesoría Contable · Contabilidad Outsourcing · Auditorías ·
  Gestión Tributaria · Planilla · Mensajería y Trámites Empresariales

⚠️ **Contradicción a resolver:** la portada decía «35 Años» de experiencia y
`/nosotros/` decía «25 Años». Hay que decidir cuál es el bueno — un dato así,
mal, lo caza un cliente y cuesta credibilidad.

## 3. La decisión que más pesa: conservar las URLs

El sitio tenía posiciones. Lo que sostiene una posición es **la URL**, no el
diseño. Así que la web nueva reproduce exactamente las mismas rutas:

```
/                                                        (portada)
/nosotros/
/services/                                               (índice de servicios)
/blog/
/services/asesoria-contable-panama/
/services/servicios-de-contabilidad-outsourcing-en-panama/
/services/servicios-de-auditoria-contable-en-panama/
/services/servicios-de-gestion-tributaria-en-panama/
/services/servicios-de-planilla-en-panama/
/services/servicio-de-mensajeria-y-tramites-empresariales-en-panama/
```

Sí, `/services/` en inglés chirría en una web en español. **Se queda igual.**
Cambiarlo por `/servicios/` tira a la basura lo único que sobrevivió a la caída.
Las secciones nuevas sí van con rutas en español.

## 4. Stack

**Astro 5, estático, en Netcup con Coolify** — el mismo camino que tus otras seis
webs. Motivos concretos, no de gusto:

- El pipeline ya existe y está probado: Dockerfile → nginx → Traefik → SSL.
- Estático se sirve en milisegundos y no se cae por un plugin.
- **Lo que mató a la web fue WordPress + hosting compartido.** Volver a lo mismo
  es volver a esperar el mismo final.
- El contenido en Markdown vive en git: si mañana se pierde el servidor, la web
  se levanta en 10 minutos y no en tres semanas de arqueología.

## 5. Lo que la convierte en la mejor de Panamá

Lo que tenía era correcto pero genérico: seis páginas de servicio describiendo
servicios. Eso lo tiene toda la competencia. Lo que gana posiciones y clientes
es **ser útil antes de vender**. Propongo cuatro bloques nuevos:

### a) Calendario tributario panameño — `/calendario-tributario/`
Las fechas de vencimiento de DGI y CSS, mes a mes. Es la consulta que un
empresario hace **todos los meses**, y casi nadie la tiene bien puesta.
⚠️ Las fechas hay que sacarlas de la fuente oficial y ponerles fecha de
revisión. Ni una fecha inventada: aquí un error se paga con una multa del
cliente.

### b) Calculadoras — `/calculadoras/`
- ITBMS (7%)
- Prestaciones y liquidación laboral
- Planilla: costo real de un empleado para la empresa

Son las páginas que se comparten y se enlazan solas. Y cada una capta a alguien
con un problema concreto, que es exactamente el que contrata a un contador.

### c) Precios orientativos — `/precios/`
Casi ningún despacho panameño publica precios. El que lo hace se lleva al
cliente que está comparando, porque le ahorra la llamada incómoda.
⚠️ **Necesito que tú los definas.** No me los invento.

### d) Guías por tipo de cliente
`/para-emprendedores/`, `/para-pymes/`, `/para-extranjeros/` — el extranjero que
abre sociedad en Panamá busca distinto que la pyme local, y hoy caen todos en la
misma página.

Además, en todas: **FAQ con datos estructurados** (`FAQPage`), que es lo que hace
salir en los desplegables de Google, y ficha de negocio local (`LocalBusiness`).

## 6. Cómo se va a trabajar

1. **Demo local primero.** `npm run dev`, se ve en el navegador, se corrige.
   Nada toca producción hasta que te guste.
2. Portada + las 6 páginas de servicio con el contenido rescatado, reescrito
   para que respire mejor. Mismas URLs.
3. Las secciones nuevas, por orden de impacto: calendario → calculadoras →
   guías → precios.
4. Repo propio en GitHub (`klcontable`), como las otras.
5. App en Netcup, verificación por `--resolve` **antes** de tocar el DNS.
6. Sitemap y robots, y `sitemap-index.xml` a Search Console el día del corte.

## 7. Lo que necesito de ti

1. **¿25 o 35 años?**
2. **Los precios**, si quieres la página de precios.
3. **¿Tienes copia de los artículos del blog?** Aunque sea el export de WordPress.
4. **Datos reales que hoy no están:** dirección física, RUC, nombre del contador
   responsable y su idoneidad. Para un despacho contable eso es confianza pura,
   y la web vieja no lo tenía.
5. **¿El dominio sigue siendo tuyo?** Hay que confirmarlo antes de nada: si
   caducó y lo cogió otro, todo esto cambia.

## 8. Lo que este plan NO hace

- No inventa fechas fiscales, precios, ni credenciales profesionales.
- No cambia las URLs que estaban indexadas.
- No promete recuperar las posiciones: se recupera la estructura y se mejora el
  contenido, pero cuánto y cuándo vuelve lo decide Google.
