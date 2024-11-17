import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router/auto'
import { fa } from 'vuetify/locale'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/frontend/pages/index.vue'),
    props: { isAdmin: false }
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('../pages/admin/pages/index.vue'),
  },
  {
    path: '/admin/states',
    name: 'AdminStates',
    component: () => import('../pages/admin/pages/state/index.vue'),
  },
  {
    path: '/admin/states/create',
    name: 'AdminStateCreate',
    component: () => import('../pages/admin/pages/state/create/index.vue'),
  },
  {
    path: '/admin/states/edit/:id',
    name: 'AdminStateEdit',
    component: () => import('../pages/admin/pages/state/edit/index.vue'),
  },
  {
    path: '/admin/products',
    name: 'AdminProducts',
    component: () => import('../pages/admin/pages/product/index.vue'),
  },
  {
    path: '/admin/products/create',
    name: 'AdminProductCreate',
    component: () => import('../pages/admin/pages/product/create/index.vue'),
  },
  {
    path: '/admin/products/edit/:id',
    name: 'AdminProductEdit',
    component: () => import('../pages/admin/pages/product/edit/index.vue'),
  },
  {
    path: '/admin/industry',
    name: 'AdminIndustries',
    component: () => import('../pages/admin/pages/industry/index.vue'),
  },
  {
    path: '/admin/industry/create',
    name: 'AdminIndustryCreate',
    component: () => import('../pages/admin/pages/industry/create/index.vue'),
  },
  {
    path: '/admin/industry/edit/:id',
    name: 'AdminIndustryEdit',
    component: () => import('../pages/admin/pages/industry/edit/index.vue'),
  },
  {
    path: '/admin/projects',
    name: 'Adminprojects',
    component: () => import('../pages/admin/pages/projectss/index.vue'),
  },
  {
    path: '/admin/projects/create',
    name: 'AdminprojectsCreate',
    component: () => import('../pages/admin/pages/projectss/create/index.vue'),
  },
  {
    path: '/admin/projects/edit/:id',
    name: 'AdminprojectEdit',
    component: () => import('../pages/admin/pages/projectss/edit/index.vue'),
  },
  {
    path: '/admin/banners',
    name: 'AdminBanners',
    component: () => import('../pages/admin/pages/banner/index.vue'),
  },
  {
    path: '/admin/banner/create',
    name: 'AdminBannerCreate',
    component: () => import('../pages/admin/pages/banner/create/index.vue'),
  },
  {
    path: '/admin/banners/edit/:id',
    name: 'AdminBannerEdit',
    component: () => import('../pages/admin/pages/banner/edit/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes,
})


export default router