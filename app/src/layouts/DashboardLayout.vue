<template>
  <q-layout view="lHh lpR lff">
    <q-header class="bg-white text-dark" height-hint="98">
      <q-toolbar align="right">
        <q-space />
        <span>
          josh blue
          <q-avatar>
            <img src="~assets/avatar.png" />
          </q-avatar>
        </span>

        <q-btn color="dark" text-color="dark" round flat icon="bi-chevron-down" dense>
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

    <q-drawer side="left" class="bg-grey-8 text-white" v-model="leftDrawerOpen" :width="75">
      <div class="flex flex-center">
        <q-btn to="/" exact flat class="q-pa-none">
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-btn>
      </div>
      <!-- drawer content -->
      <q-list padding>
        <q-item clickable v-ripple to="/dashboard" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Dashboard</q-tooltip>
            <q-icon color="white" name="bi-house" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/stats" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Statistics</q-tooltip>
            <q-icon color="white" name="bi-bar-chart" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/studio" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Studio</q-tooltip>
            <q-icon color="white" name="bi-file-earmark" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/chat" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Chats</q-tooltip>
            <q-icon color="white" name="bi-chat-left" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/works" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Works</q-tooltip>
            <q-icon color="white" name="bi-brush" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/skills" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Skills</q-tooltip>
            <q-icon color="white" name="bi-vector-pen" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/post" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Posts</q-tooltip>
            <q-icon color="white" name="bi-view-list" />
          </q-item-section>
        </q-item>
      </q-list>
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
const leftDrawerOpen = ref(true);
const toggleLeftDrawerOpen = () => leftDrawerOpen.value = !leftDrawerOpen.value

export default {
  setup() {
    return {
      leftDrawerOpen,
      toggleLeftDrawerOpen
    };
  },
};
</script>
