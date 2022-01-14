<template>
  <q-layout view="lHh lpR lff">
    <q-header class="bg-white text-dark" height-hint="98">
      <q-toolbar>
        <q-btn to="/" exact flat>
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-btn>

        <q-space />
        <q-tabs align="right">
          <q-route-tab to="/paintings" exact label="paintings" />
          <q-route-tab to="/sculpture" exact label="sculpture" />
          <q-route-tab to="/drawings" exact label="drawings" />
          <q-route-tab to="/others" exact label="others" />
          <q-route-tab to="/artists" exact label="artists" />
        </q-tabs>

        <q-btn color="dark" txet-color="dark" icon="bi-search" @click="onClick" flat round />
        <q-btn color="dark" txet-color="dark" icon="bi-cart" @click="onClick" flat round />

        <q-btn dense flat round icon="bi-list" @click="toggleLeftDrawer" class="lt-md" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" v-if="$q.screen.lt.md">
      <!-- drawer content -->
      <q-list>
        <q-item class="flex flex-center">
          <q-btn color="dark" txet-color="dark" icon="bi-search" @click="onClick" flat round />
          <q-btn color="dark" txet-color="dark" icon="bi-cart" @click="onClick" flat round />
        </q-item>
        <q-item clickable v-ripple to="/paintings" exact>PAINTINGS</q-item>
        <q-item clickable v-ripple to="/sculpture" exact>SCULPTURE</q-item>
        <q-item clickable v-ripple to="/drawings" exact>DRAWINGS</q-item>
        <q-item clickable v-ripple to="/others" exact>OTHERS</q-item>
        <q-item clickable v-ripple to="/artists" exact>ARTISTS</q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
