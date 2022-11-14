<script lang="ts" setup>
  // import { onMounted, ref } from 'vue'

  import { useRouter } from "vue-router";
  import FooterComponent from "../components/FooterComponent.vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
  import SidebarComponent from "../components/SidebarComponent.vue";
  const router = useRouter();
</script>

<template>
  <main class="fixed w-full overflow-hidden overflow-y-auto h-screen">
    <HeaderComponent class="!bg-white" />
    <div class="flex relative" style="min-height: calc(100vh - 50px)">
      <SidebarComponent class="w-fit sticky top-20 min-h-full" />
      <!-- router-view -->
      <router-view v-slot="{ Component }" class="min-h-screen">
        <transition name="fade" class="duration-500 grow">
          <component :is="Component" class="'p-6'" />
        </transition>
      </router-view>
    </div>
  </main>
</template>
