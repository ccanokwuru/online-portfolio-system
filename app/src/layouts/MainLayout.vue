<template>
  <q-layout view="hHr lpR ffr">
    <q-header class="text-dark bg-transparent" height-hint="98">
      <q-toolbar>
        <q-btn to="/" exact flat>
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-btn>
        <q-space />
        <q-tabs align="center" class="gt-sm">
          <q-route-tab to="/" label="Home" exact no-caps />
          <q-route-tab to="/exhibitions" label="Exhibitions" exact no-caps />
          <q-route-tab to="/creators" label="Creators" exact no-caps />
          <q-route-tab to="/news" label="News" exact no-caps />
        </q-tabs>
        <q-space />
        <q-btn color="red-10" label="Signin" rounded flat text-color="red-10" no-caps />
        <q-btn dense flat round icon="bi-list" @click="toggleRightDrawer" class="lt-md" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" elevated v-if="$q.screen.lt.md">
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
        <div class="text-right">
          <q-btn color="white" icon="bi-youtube" flat text-color="white" round />
          <q-btn color="white" icon="bi-twitter" flat text-color="white" round />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
const $q = useQuasar();

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
        if ($q.screen.gt.sm === true)
          rightDrawerOpen.value = false;
      },
    };
  },
};
</script>
