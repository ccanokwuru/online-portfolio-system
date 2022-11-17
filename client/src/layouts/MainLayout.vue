<script lang="ts" setup>
  // import { onMounted, ref } from 'vue'

  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import FooterComponent from "../components/FooterComponent.vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
  import SidebarComponent from "../components/SidebarComponent.vue";
  import { userStore } from "../store/user";
  const auth = computed(() => userStore().authToken);

  const route = useRoute();
</script>

<template>
  <HeaderComponent />

  <!-- router-view -->
  <div
    class="flex max-w-full overflow-x-clip"
    style="min-height: calc(100vh - 70px)"
  >
    <div class="flex flex-col sticky top-20 !h-full z-50" v-if="auth">
      <SidebarComponent class="w-fit grow" />
    </div>
    <!-- router-view -->
    <div class="grow relative">
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
