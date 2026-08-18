// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://klcontable.com',
  // Las URLs indexadas terminaban en barra. Cambiarlas tiraria lo unico que
  // sobrevivio a la caida del hosting.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // El 404 no entra en el sitemap: pedirle a Google que rastree la pagina de
  // error es justo lo contrario de lo que hace.
  integrations: [sitemap({ filter: (pagina) => !pagina.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
