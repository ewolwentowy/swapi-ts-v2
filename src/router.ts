import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  // pass the generated routes written by the plugin 🤖
  routes,
})

export default router