import { createRouter, createWebHistory } from 'vue-router';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/trending'
    },
    {
      path: '/trending',
      name: 'Trending',
      component: () => import('@/views/TrendingList.vue')
    },
  ]
})

export default routes
