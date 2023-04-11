import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/city',
      name: 'CityList',
      component: () => import('../views/city/CityList.vue')
    },
    {
      path: '/city/{{id}}}',
      name: 'CityView',
      component: () => import('../views/city/CityView.vue')
    },
    {
      path: '/city/create',
      name: 'CityCreate',
      component: () => import('../views/city/CityCreateVue.vue')
    },
    {
      path: '/city/{{id}}/edit',
      name: 'CityEdit',
      component: () => import('../views/city/CityCreateVue.vue')
    },
  ]
})

export default router
