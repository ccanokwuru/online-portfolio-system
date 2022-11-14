import { RouteRecordRaw } from "vue-router";
// Layouts
import MainLayout from "../layouts/MainLayout.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import StudioLayout from "../layouts/StudioLayout.vue";
import GalleryLayout from "../layouts/GalleryLayout.vue";

// Main Pages
import NotFound from "../pages/NotFound.vue";
import Index from "../pages/Index.vue";

// Gallery Pages

const main: RouteRecordRaw = {
  path: "/",
  // exact,
  component: MainLayout,
  children: [
    { path: "", name: "home", component: Index },
    {
      path: "artists",
      name: "artists",
      component: () => import("../pages/Artists.vue"),
    },
    {
      path: "login",
      name: "login",
      component: () => import("../pages/Auth.vue"),
    },
    {
      path: "register",
      name: "register",
      component: () => import("../pages/Auth.vue"),
    },
    // { path: "articles", name: "articles", component: Index },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
};

const studio: RouteRecordRaw = {
  path: "/studio/:studioName/",
  // exact,
  component: StudioLayout,
  children: [
    {
      path: "",
      name: "studio home",
      component: () => import("../pages/studio/Home.vue"),
    },
    {
      path: "about",
      name: "studio about",
      component: () => import("../pages/studio/About.vue"),
    },
    {
      path: "projects",
      name: "studio projects",
      component: () => import("../pages/studio/Projects.vue"),
    },
    {
      path: "projects/itm/:id/:name",
      name: "studio projects single",
      component: () => import("../pages/studio/ProjectsDetail.vue"),
    },
    {
      path: "contact",
      name: "studio hire me",
      component: () => import("../pages/studio/Contact.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "studio not found",
      component: NotFound,
    },
  ],
};

const gallery: RouteRecordRaw = {
  path: "/exhibitions/",
  // exact,
  component: GalleryLayout,
  children: [
    {
      path: "",
      name: "exhibition",
      component: () => import("../pages/gallery/Root.vue"),
    },
    {
      path: "cat/:id/:name",
      name: "category",
      component: () => import("../pages/gallery/CategoryList.vue"),
    },
    {
      path: "item/:id/:name",
      name: "item detail",
      component: () => import("../pages/gallery/ArtWorkDetail.vue"),
    },
    {
      path: "search",
      name: "exhibition search",
      component: () => import("../pages/Artists.vue"),
    },
    {
      path: "cart",
      name: "exhibition cart",
      component: () => import("../pages/Artists.vue"),
    },
    {
      path: ":cat",
      name: "category name",
      component: () => import("../pages/gallery/CategoryList.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "gallery not found",
      component: NotFound,
    },
  ],
};

const dashboard: RouteRecordRaw = {
  path: "/dashboard/",
  // exact,
  component: DashboardLayout,
  children: [
    {
      path: "",
      name: "dashboard",
      component: () => import("../pages/dashboard/Index.vue"),
    },
    {
      path: "",
      name: "dashboard works",
      component: () => import("../pages/dashboard/Works.vue"),
    },
    {
      path: "",
      name: "dashboard articles",
      component: () => import("../pages/dashboard/Articles.vue"),
    },
    {
      path: "",
      name: "dashboard favourites",
      component: () => import("../pages/dashboard/Favourites.vue"),
    },
    {
      path: "",
      name: "dashboard orders",
      component: () => import("../pages/dashboard/Orders.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "dashboard not found",
      component: NotFound,
    },
  ],
};

const routes: RouteRecordRaw[] = [main, studio, gallery, dashboard];

export default routes;
