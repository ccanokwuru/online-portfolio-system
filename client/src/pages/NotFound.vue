<script lang="ts" setup>
  import { computed } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const router = useRouter();
  const fullPath = computed(() => useRoute().fullPath);
  const pathArray = computed(() => fullPath.value.split("/"));
</script>
<template>
  <div class="w-full h-screen flex content-center">
    <div class="self-center text-center container">
      <h1 class="text-3xl text-stale-900 py-4 font-bold">
        Ooops!!
        <br />Not Reachable
      </h1>
      <router-link
        :to="
          pathArray[0] === 'studio' && pathArray[1].length
            ? `/${pathArray[0]}/${pathArray[1]}`
            : pathArray[0] === 'exhibitions'
            ? '/exhibitions'
            : '/'
        "
        class="text-white bg-red-900 hover:bg-slate-900 animate-bounce duration-300 btn"
      >
        Back Home
      </router-link>
    </div>
  </div>
</template>
