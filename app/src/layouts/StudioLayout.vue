<template>
  <q-layout view="lHh lpR lff" class="bg-grey-2">
    <q-header class="bg-transparent text-dark" height-hint="98">
      <q-toolbar>
        <q-btn to="/" exact flat class="q-pa-none">
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-btn>
        <q-space />
        <q-tabs align="left">
          <q-route-tab to="/studio/:studioName" label="Home" exact no-caps />
          <q-route-tab to="/studio/:studioName/about" label="About" exact no-caps />
          <q-route-tab to="/studio/:studioName/projects" label="Projects" exact no-caps />
          <q-route-tab to="/studio/:studioName/contact" label="Contact" exact no-caps />
        </q-tabs>
        <q-btn dense flat round icon="bi-list" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page padding class="bg-grey-1">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const leftDrawerOpen = ref(false);
const route = useRoute();
console.log(route)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
export default {
  setup() {
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
};
</script>
