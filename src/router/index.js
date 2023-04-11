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
      path: '/event/create',
      name: 'EventCreate',
      component: () => import('../views/event/EventCreate.vue')
    },
    {
      path: '/event/:id/edit',
      name: 'EventEdit',
      component: () => import('../views/event/EventEdit.vue'),
      props: true,
    },
    {
      path: '/city',
      name: 'CityList',
      component: () => import('../views/city/CityList.vue')
    },
    {
      path: '/city/create',
      name: 'CityCreate',
      component: () => import('../views/city/CityCreateVue.vue')
    },
    {
      path: '/city/:id/edit',
      name: 'CityEdit',
      component: () => import('../views/city/CityEdit.vue'),
      props: true,
    },
    {
      path: '/category',
      name: 'CategoryList',
      component: () => import('../views/category/CategoryList.vue')
    },
    {
      path: '/category/create',
      name: 'CategoryCreate',
      component: () => import('../views/category/CategoryCreate.vue')
    },
    {
      path: '/category/:id/edit',
      name: 'CategoryEdit',
      component: () => import('../views/category/CategoryEdit.vue'),
      props: true,
    },
  ]
})

export default router
