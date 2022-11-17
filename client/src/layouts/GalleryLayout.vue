<script lang="ts" setup>
  import { computed } from "vue";
  import FooterComponent from "../components/FooterComponent.vue";
  import SidebarComponent from "../components/SidebarComponent.vue";
  import { userStore } from "../store/user";

  const auth = computed(() => userStore().authToken);

  // import { onMounted, ref } from 'vue'
</script>

<template>
  <header
    class="sticky top-0 left-0 right-0 py-2 md:py-4 bg-white z-50 shadow-sm text-sm md:text-base"
  >
    <div class="flex container content-center justify-between gap-3">
      <router-link to="/" class="self-center">
        <img src="../assets/logo.png" class="nav-logo" />
      </router-link>
      <nav
        class="flex md:flex-grow gap-x-2 md:gap-x-5 justify-end content-center self-center capitalize font-[500] md:font-semibold md:text-base md:uppercase"
      >
        <router-link to="/exhibitions/" exact>all</router-link>
        <router-link to="/exhibitions/paintings" exact>Paintings</router-link>
        <router-link to="/exhibitions/drawings" exact>Drawings</router-link>
        <router-link to="/exhibitions/sculpture" exact>Sculpture</router-link>
        <router-link to="/artists" exact>Artists</router-link>
        <router-link to="/#">
          <i class="bi bi-search"></i>
        </router-link>
        <router-link to="/#">
          <i class="bi bi-cart"></i>
        </router-link>
      </nav>
    </div>
  </header>

  <!-- router-view -->
  <div
    class="flex max-w-full overflow-x-clip"
    style="min-height: calc(100vh - 70px)"
  >
    <div class="flex flex-col sticky top-20 !h-full z-50" v-if="auth">
      <SidebarComponent class="w-fit grow" />
    </div>
    <!-- router-view -->
    <div class="grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" class="duration-500 grow">
          <component :is="Component" class="'p-6'" />
        </transition>
      </router-view>
    </div>
  </div>
  <FooterComponent />
</template>

<style></style>
