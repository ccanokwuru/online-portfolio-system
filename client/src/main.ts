import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
// @ts-ignore

import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";

import App from "./App.vue";
import routes from "./routes";
import { createPinia } from "pinia";
import { userStore } from "./store/user";
import Swal from "sweetalert2";

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // return desired position

    Swal.close();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          left: 0,
          top: 0,
          behavior: "smooth",
          el: to.hash ? to.hash : `body`,
        });
      }, 100);
    });
  },
});
const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

const __user = userStore();

const isAuthenticated = async (
  to: RouteLocationNormalized | undefined = undefined
) => {
  let token: any;
  // if (to?.meta.for === "user")
  token = await __user.refreshAuth();
  return token?.status === 200;
};

router.beforeEach(async (to, from, next) => {
  const auth = await isAuthenticated(to);
  next();
  // if (!auth && to.meta.requireAuth) next({ name: "login" });
  // else if (auth && !to.meta.requireAuth && to.meta.title !== "404 Not Found")
  //   next({ name: "dashboard" });
  // else next();
});

app.use(router);

app.mount("#app");
