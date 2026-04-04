import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter from 'vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: {
        src: 'src/router/routes',
        path: '',
        exclude: (excluded) => excluded,
        filePatterns: (filePatterns) => filePatterns,
        extensions: (extensions) => extensions,
      },

      extensions: ['.vue'],
      filePatterns: ['**/*'],
      exclude: [],
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
