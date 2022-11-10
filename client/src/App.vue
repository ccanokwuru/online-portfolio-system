<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import Swal from "sweetalert2";
  import { Ref, ref, watch } from "vue";
  import { RouterView, useRoute } from "vue-router";

  const main: Ref<HTMLDivElement | undefined> = ref();

  const route = useRoute();
  watch(route, () => {
    Swal.close();
    main.value?.scrollTo({ top: 0, behavior: "smooth" });
  });
</script>

<template>
  <div class="h-screen w-screen overflow-hidden overflow-y-auto" ref="main">
    <router-view />
  </div>
</template>
