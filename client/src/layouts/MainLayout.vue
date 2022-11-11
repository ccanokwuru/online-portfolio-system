<script lang="ts" setup>
  // import { onMounted, ref } from 'vue'

  import { useRouter } from "vue-router";
  import FooterComponent from "../components/FooterComponent.vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
  const router = useRouter();
</script>

<template>
  <HeaderComponent />

  <!-- router-view -->
  <router-view v-slot="{ Component }" class="bg-gray-100 min-h-screen">
    <transition name="fade" class="duration-500">
      <component :is="Component" />
    </transition>
  </router-view>

  <FooterComponent />
</template>

<style></style>
