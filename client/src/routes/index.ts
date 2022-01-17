import { RouteRecordRaw } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue'
import StudioLayout from '../layouts/StudioLayout.vue'
import GalleryLayout from '../layouts/GalleryLayout.vue'

import NotFound from '../pages/NotFound.vue';
import Index from '../pages/Index.vue';

const main: RouteRecordRaw = {
    path: '/',
    // exact,
    component: MainLayout,
    children: [
        { path: "", name: "home", component: Index },
        { path: "artists", name: "home", component: Index },
        { path: "news", name: "news", component: Index },
    ],
}

const studio: RouteRecordRaw = {
    path: '/studio/:studioName/',
    // exact,
    component: StudioLayout,
    children: [
        { path: "", name: "studio home", component: Index },
        { path: "about", name: "studio about", component: Index },
        { path: "projects", name: "studio projects", component: Index },
        { path: "hire-me", name: "studio hire me", component: Index },
    ],
}

const gallery: RouteRecordRaw = {
    path: '/exhibitions/',
    // exact,
    component: GalleryLayout,
    children: [
        { path: "", name: "exhibition", component: Index },
        { path: "paintings", name: "exhibition paintings", component: Index },
        { path: "sculpture", name: "exhibition sculpture", component: Index },
        { path: "drawings", name: "exhibition drawings", component: Index },
        { path: "cart", name: "exhibition cart", component: Index },
    ],
}

const notFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}

const routes: RouteRecordRaw[] = [
    main,
    studio,
    gallery,
    notFound
]

export default routes;