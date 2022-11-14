<script setup lang="ts">
  import SummaryBoxComponent from "../../components/SummaryBoxComponent.vue";
</script>
<template>
  <div class="container max-w-screen-xl py-10 flex flex-col gap-10">
    <h1 class="text-xl sticky top-30">Dashboard</h1>

    <section class="flex flex-wrap gap-5 w-full justify-between">
      <SummaryBoxComponent
        label="works"
        class="grow sm:min-w-[0.8/2] sm:shrink md:w-[0.8/4]"
      />
      <SummaryBoxComponent
        label="articles"
        class="grow min-w-[0.8/2] sm:shrink md:w-[0.8/4]"
      />
      <SummaryBoxComponent
        label="favourites"
        class="grow min-w-[0.8/2] sm:shrink md:w-[0.8/4]"
      />
      <SummaryBoxComponent
        label="orders"
        class="grow min-w-[0.8/2] sm:shrink md:w-[0.8/4]"
      />
    </section>
  </div>
</template>
<style></style>
