<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { api } from "../../api";
  import CardDefault from "../../components/CardDefault.vue";
  import SummaryBoxComponent from "../../components/SummaryBoxComponent.vue";
  import { userStore } from "../../store/user";
  const topArtist = ref();
  const topWork = ref();
  const favourites = ref();
  const orders = ref();

  onMounted(async () => {
    const artistData = await fetch(`${api}/artist/top-artist`, {
      headers: {
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });
    const artistDataJson = artistData.ok ? await artistData.json() : undefined;
    topArtist.value = artistDataJson?.artist;

    const workData = await fetch(`${api}/work/top-work`, {
      headers: {
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });
    const workDataJson = workData.ok ? await workData.json() : undefined;
    topWork.value = workDataJson?.work;
  });
</script>
<template>
  <div class="container max-w-screen-xl py-10 flex flex-col gap-10">
    <section>
      <h4 class="font-semibold text-lg pb-5 md:pb-10">Tops</h4>
      <div class="grid gap-5 md:gap-10 grid-cols-2 md:grid-cols-4">
        <div class="justify-between grow md:w-[0.8/2]">
          <CardDefault
            title="Top Artist"
            header="Top Artist"
            rounded
            roundedImage
            :description="`@${topArtist?.profile?.display_name}`"
            :imageUrl="topArtist?.profile?.avatar"
            :href="'/studio/' + topArtist?.profile?.display_name.toLowerCase()"
          />
        </div>

        <div class="justify-between grow md:w-[0.8/2]">
          <CardDefault
            title="Top Art"
            header="Top Art"
            rounded
            roundedImage
            :description="`${topWork?.description}`"
            :imageUrl="topWork?.files?.images[0]"
            :href="`/exhibitions/item/${topWork?.id}/${topWork?.title}`"
          />
        </div>
      </div>
    </section>

    <section>
      <h4 class="font-semibold text-lg pb-5 md:pb-10">Summary</h4>
      <div class="flex overflow-hidden overflow-x-auto gap-5 md:gap-10">
        <div class="grow sm:w-[0.8/2] md:w-[0.8/4] min-w-[200px]">
          <SummaryBoxComponent label="works" class="w-full" />
        </div>
        <div class="grow sm:w-[0.8/2] md:w-[0.8/4] min-w-[200px]">
          <SummaryBoxComponent label="works" class="w-full" />
        </div>
        <div class="grow sm:w-[0.8/2] md:w-[0.8/4] min-w-[200px]">
          <SummaryBoxComponent label="works" class="w-full" />
        </div>
        <div class="grow sm:w-[0.8/2] md:w-[0.8/4] min-w-[200px]">
          <SummaryBoxComponent label="works" class="w-full" />
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
