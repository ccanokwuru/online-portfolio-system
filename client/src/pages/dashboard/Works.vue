<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { api } from "../../api";
  const works = ref();
  const articles = ref();
  const favourites = ref();
  const orders = ref();

  onMounted(async () => {
    const allWorks = await fetch(`${api}/artist/`);
    const jsonAllWorks = await allWorks.json();
    works.value = jsonAllWorks?.works;
  });
</script>
<template>
  <div class="container max-w-screen-xl py-10 flex flex-col gap-10">
    <h4 class="font-semibold text-lg pb-5 md:pb-10">Works</h4>

    <section class="flex flex-wrap gap-5 w-full justify-between"></section>
  </div>
</template>
<style></style>
