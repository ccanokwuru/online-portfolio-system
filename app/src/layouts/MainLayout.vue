<template>
  <q-layout view="lHh LpR fFf" class="text-grey-9">
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

    <q-drawer
      side="left"
      class="bg-grey-8 text-white"
      show-if-above
      :width="width"
      v-model="drawerOpen"
    >
      <div class="flex flex-center q-py-sm">
        <q-btn to="/" exact flat class="q-pa-none">
          <q-img class="mini-logo-img" src="~assets/logo.png" />
        </q-btn>
      </div>
      <q-btn
        class="gt-sm shrink-btn"
        color="grey-8"
        text-color="white"
        dense
        unelevated
        size="sm"
        round
        :icon="drawerExpand ? 'bi-chevron-left' : 'bi-chevron-right'"
        @click="resizeDrawer"
      />
      <!-- drawer content -->
      <q-list padding class="q-pl-md">
        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-tooltip>Dashboard</q-tooltip>
            <q-icon color="white" name="bi-house" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Dashboard</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/stats" exact>
          <q-item-section avatar>
            <q-tooltip>Statistics</q-tooltip>
            <q-icon color="white" name="bi-bar-chart" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Statistics</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/studio" exact>
          <q-item-section avatar>
            <q-tooltip>Studio</q-tooltip>
            <q-icon color="white" name="bi-file-earmark" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Studio</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/chat" exact>
          <q-item-section avatar>
            <q-tooltip>Chats</q-tooltip>
            <q-icon color="white" name="bi-chat-left" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Chats</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/works" exact>
          <q-item-section avatar>
            <q-tooltip>Works</q-tooltip>
            <q-icon color="white" name="bi-brush" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Works</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/skills" exact>
          <q-item-section avatar>
            <q-tooltip>Skills</q-tooltip>
            <q-icon color="white" name="bi-vector-pen" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Skills</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/post" exact>
          <q-item-section avatar>
            <q-tooltip>Posts</q-tooltip>
            <q-icon color="white" name="bi-view-list" />
          </q-item-section>
          <q-item-section v-model="drawerExpand">Posts</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding class="bg-grey-1">
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white" v-if="$q.screen.lt.md">
      <q-tabs dense class="text-grey-1" stretch switch-indicator indicator-color="white">
        <q-route-tab to="/" exact icon="bi-house" dense />
        <q-route-tab to="/work/add" exact icon="bi-plus-square" dense />
        <q-tab icon="bi-list" dense @click="toggleDrawer" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import Avatar from 'src/components/Avatar.vue';
import { useQuasar } from 'quasar';
const drawerOpen = ref(false);
const drawerExpand = ref(true);
const width = ref(250);
const $q = useQuasar();
const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
  drawerExpand.value = true
}

onMounted(() => {
  if ($q.screen.lt.md) width.value = 75
})

const resizeDrawer = () => {
  if (width.value === 250)
    width.value = 75
  else width.value = 250

  drawerExpand.value = !drawerExpand.value
}

export default {
  components: {
    Avatar,
  },
  setup() {
    // if ($q.screen.gt.sm === true) width.value = 75

    console.log($q)

    return {
      drawerOpen,
      drawerExpand,
      width,
      toggleDrawer,
      resizeDrawer
    };
  },
};
</script>
<style scoped>
.shrink-btn {
  position: absolute;
  z-index: 9999;
  bottom: 0;
  right: 0;
}
</style>
