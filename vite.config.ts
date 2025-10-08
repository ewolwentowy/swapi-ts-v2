import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      VueRouter({
      routesFolder: ["src/pages", ...catalogs.map((item) => `./src/modules/${item}/views/`)],
    }),
    vue()],
})
