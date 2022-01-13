<template>
  <q-layout view="hHr lpR ffr">
    <q-header class="text-dark bg-transparent" height-hint="98">
      <q-toolbar class="container mxauto">
        <q-toolbar-title class>
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-toolbar-title>
        <q-space />
        <q-tabs align="center" class="gt-sm">
          <q-route-tab to="/" label="Home" exact />
          <q-route-tab to="/exhibitions" label="Exhibitions" exact />
          <q-route-tab to="/creators" label="Creators" exact />
          <q-route-tab to="/news" label="News" exact />
        </q-tabs>
        <q-space />
        <q-btn color="red-10" label="Signin" rounded />
        <q-btn dense flat round icon="bi-list" @click="toggleRightDrawer" class="lt-md" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" elevated>
      <!-- drawer content -->
      <q-list>
        <q-item clickable v-ripple to="/" exact>Home</q-item>
        <q-item clickable v-ripple to="/exhibitions" exact>Exhibitions</q-item>
        <q-item clickable v-ripple to="/creators" exact>Creators</q-item>
        <q-item clickable v-ripple to="/news" exact>News</q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>&copy; Prolifolio</q-toolbar-title>

        <q-space />
        <div class="text-right"></div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
