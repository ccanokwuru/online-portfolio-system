
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap-icons/font/bootstrap-icons.css";
import 'uno.css'

import App from "./App.vue";
import routes from "./routes";


const router = createRouter({
    routes,
    history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
// app.use(vuex);

app.mount("#app");
