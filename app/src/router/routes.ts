import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'news', component: () => import('pages/News.vue') },
      // { path: 'creators', component: () => import('pages/Creators.vue') },
      // { path: 'login', component: () => import('components/Auth.vue') },
    ],
  },
  {
    path: '/exhibitions',
    component: () => import('layouts/GalleryLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/studio/:studioName',
    component: () => import('layouts/StudioLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
