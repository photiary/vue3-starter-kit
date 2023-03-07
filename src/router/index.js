import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// 참조문서: https://router.vuejs.org/guide/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // 참조문서: https://router.vuejs.org/guide/advanced/lazy-loading.html
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

// 참조문서: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
// router.beforeEach(next => {
//   return next()
// })

export default router
