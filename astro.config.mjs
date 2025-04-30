// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'es',         //Ayuda a que cargue directamente lo que hay es la carpeta en por default y no el index que esta afuera.
    locales: ['en', 'es'],
    // routing: {
    //   prefixDefaultLocale: true  //no tener la por default que es /en no añadirle /en
    // }
  }
});