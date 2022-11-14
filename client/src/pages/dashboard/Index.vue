<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { api } from "../../api";
  import SummaryBoxComponent from "../../components/SummaryBoxComponent.vue";
  import { userStore } from "../../store/user";
  const works = ref();
  const articles = ref();
  const favourites = ref();
  const orders = ref();

  onMounted(async () => {
    const allWorks = await fetch(`${api}/artist/`, {
      headers: {
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });
    console.log(await allWorks.json());
    const jsonAllWorks = await allWorks.json();
    works.value = jsonAllWorks?.works;
  });
</script>
<template>
  <div class="container max-w-screen-xl py-10 flex flex-col gap-10">
    <h1 class="text-xl sticky top-30">Dashboard</h1>

    <section class="flex flex-wrap gap-5 w-full justify-between">
      <SummaryBoxComponent
        label="works"
        class="grow sm:min-w-[0.8/2] sm:shrink md:w-[0.8/4]"
        :value="works?._count"
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
