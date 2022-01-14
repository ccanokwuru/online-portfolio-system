<template>
  <q-layout view="lHh lpR lff">
    <q-header class="bg-white text-dark" height-hint="98">
      <q-toolbar align="right">
        <q-space />
        <span>
          josh blue
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </span>

        <q-btn color="dark" text-color="dark" round flat icon="bi-chevron-down">
          <q-menu transition-show="scale" transition-hide="scale">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          color="dark"
          text-color="dark"
          flat
          round
          dense
          icon="bi-bell"
          @click="onClick"
          class="text-sm"
        />
        <q-btn
          color="dark"
          text-color="dark"
          flat
          round
          dense
          icon="bi-eye"
          @click="onClick"
          class="text-sm"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" class="bg-grey-8 text-white">
      <!-- drawer content -->
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-tooltip>Very good!</q-tooltip>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>
        </q-item>
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
