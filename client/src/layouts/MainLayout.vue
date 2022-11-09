<script lang="ts" setup>
  // import { onMounted, ref } from 'vue'

  import { useRouter } from "vue-router";
  import HeaderComponent from "../components/HeaderComponent.vue";
  const router = useRouter();
</script>

<template>
  <div
    class="absolute z-[-2] bg-opacity-[.68] w-screen p-10 transition-all duration-[2000ms]"
    :class="{ 'bg-[#BBC1CF]': router.currentRoute.value.name === 'home' }"
  ></div>
  <HeaderComponent />

  <!-- router-view -->
  <router-view v-slot="{ Component }" class="bg-gray-100">
    <transition name="fade" class="duration-500">
      <component :is="Component" />
    </transition>
  </router-view>

  <footer class="py-4 text-white bg-slate-900 text-xl">
    <div class="container flex content-center justify-between">
      &copy; Prolifolio
      <div class="gap-x-2 flex pr-4">
        <a href="#">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="#">
          <i class="bi bi-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style></style>
