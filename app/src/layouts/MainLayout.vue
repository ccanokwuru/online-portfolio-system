<template>
  <q-layout view="lHh LpR lff" class="text-grey-9">
    <q-header class="bg-white text-grey-9 q-py-sm" height-hint="98">
      <q-toolbar align="right" class="q-mr-4 gt-sm">
        <q-space />
        <Avatar class="q-pr-sm" />

        <div>
          <q-btn
            color="grey"
            text-color="grey"
            icon="bi-chevron-down"
            round
            flat
            dense
            size=".6rem"
          />
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
        </div>

        <q-separator vertical size="2px" class="q-mx-lg q-my-sm" />
        <div class="q-mr-lg q-pr-md row q-gutter-md">
          <q-btn
            color="grey"
            text-color="grey"
            icon="bi-bell"
            flat
            round
            dense
            @click="onClick"
            class="text-sm"
            size=".6rem"
          />
          <q-btn
            color="grey"
            text-color="grey"
            flat
            round
            dense
            icon="bi-eye"
            @click="onClick"
            class="text-sm"
            size=".6rem"
          />
        </div>
      </q-toolbar>
      <q-toolbar class="lt-md text-grey-9">
        <q-btn flat round dense icon="bi-arrow-left" />
        <q-toolbar-title>Dashboard</q-toolbar-title>
        <div>
          <q-btn flat round dense icon="bi-three-dots-vertical" />
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer side="left" class="bg-grey-8 text-white gt-sm" show-if-above :width="75">
      <div class="flex flex-center q-py-sm">
        <q-btn to="/" exact flat class="q-pa-none">
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-btn>
      </div>
      <!-- drawer content -->
      <q-list padding>
        <q-item clickable v-ripple to="/" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Dashboard</q-tooltip>
            <q-icon color="white" name="bi-house" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/stats" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Statistics</q-tooltip>
            <q-icon color="white" name="bi-bar-chart" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/studio" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Studio</q-tooltip>
            <q-icon color="white" name="bi-file-earmark" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/chat" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Chats</q-tooltip>
            <q-icon color="white" name="bi-chat-left" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/works" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Works</q-tooltip>
            <q-icon color="white" name="bi-brush" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/skills" exact>
          <q-item-section class="flex flex-center">
            <q-tooltip>Skills</q-tooltip>
            <q-icon color="white" name="bi-vector-pen" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/post" exact>
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
import Avatar from 'src/components/Avatar.vue';
const leftDrawerOpen = ref(true);
const toggleLeftDrawerOpen = () => leftDrawerOpen.value = !leftDrawerOpen.value

export default {
  components: {
    Avatar,
  },
  setup() {
    return {
      leftDrawerOpen,
      toggleLeftDrawerOpen
    };
  },
};
</script>
