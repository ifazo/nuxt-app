import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    importPT: { from: path.resolve(__dirname, './presets/lara/') } 
  }
});
