<script lang="ts" setup>
  // import { onMounted, ref } from 'vue'

  import { useRouter } from "vue-router";
  import FooterComponent from "../components/FooterComponent.vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
  import SidebarComponent from "../components/SidebarComponent.vue";
  const router = useRouter();
</script>

<template>
  <HeaderComponent class="!bg-white" />
  <main class="flex gap-2">
    <SidebarComponent class="w-fit sticky top-10" />
    <!-- router-view -->
    <router-view v-slot="{ Component }" class="bg-gray-100 min-h-screen grow">
      <transition name="fade" class="duration-500 grow">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style></style>
