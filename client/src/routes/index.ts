import { RouteRecordRaw } from "vue-router";
// Layouts
import MainLayout from "../layouts/MainLayout.vue";
import StudioLayout from "../layouts/StudioLayout.vue";
import GalleryLayout from "../layouts/GalleryLayout.vue";

// Main Pages
import NotFound from "../pages/NotFound.vue";
import Index from "../pages/Index.vue";
import Artists from "../pages/Artists.vue";
import Auth from "../pages/Auth.vue";

// Studio Pages
import Home from "../pages/studio/Home.vue";
import About from "../pages/Artists.vue";
import Projects from "../pages/Artists.vue";
import Contact from "../pages/Artists.vue";

// Gallery Pages
import Root from "../pages/gallery/Root.vue";
import CategoryList from "../pages/gallery/CategoryList.vue";
import List from "../pages/Artists.vue";
import Cart from "../pages/Artists.vue";
import Search from "../pages/Artists.vue";

const main: RouteRecordRaw = {
  path: "/",
  // exact,
  component: MainLayout,
  children: [
    { path: "", name: "home", component: Index },
    { path: "artists", name: "artists", component: Artists },
    { path: "login", name: "login", component: Auth },
    { path: "register", name: "register", component: Auth },
    { path: "news", name: "news", component: Index },
  ],
};

const studio: RouteRecordRaw = {
  path: "/studio/:studioName/",
  // exact,
  component: StudioLayout,
  children: [
    { path: "", name: "studio home", component: Home },
    { path: "about", name: "studio about", component: About },
    { path: "projects", name: "studio projects", component: Projects },
    { path: "contact", name: "studio hire me", component: Contact },
  ],
};

const gallery: RouteRecordRaw = {
  path: "/exhibitions/",
  // exact,
  component: GalleryLayout,
  children: [
    { path: "", name: "exhibition", component: Root },
    { path: "cat/:id/:name", name: "category", component: CategoryList },
    { path: "search", name: "exhibition search", component: Search },
    { path: "cart", name: "exhibition cart", component: Cart },
    { path: ":cat", name: "category name", component: CategoryList },
  ],
};

const notFound: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: NotFound,
};

const routes: RouteRecordRaw[] = [main, studio, gallery, notFound];

export default routes;
