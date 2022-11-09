import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore

import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";

import App from "./App.vue";
import routes from "./routes";
import { createPinia } from "pinia";

const router = createRouter({
  routes,
  history: createWebHistory(),
});
const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
