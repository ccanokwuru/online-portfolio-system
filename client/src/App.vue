<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import Swal from "sweetalert2";
  import { computed, onMounted, Ref, ref, watch } from "vue";
  import { RouterView, useRoute } from "vue-router";

  const main: Ref<HTMLDivElement | undefined> = ref();

  watch(useRoute(), () => {
    Swal.close();
    main.value?.scrollTo({ top: -20000, behavior: "smooth" });
  });
</script>

<template>
  <div
    class="h-screen w-screen overflow-hidden overflow-y-auto relative"
    ref="main"
  >
    <router-view />
  </div>
</template>
