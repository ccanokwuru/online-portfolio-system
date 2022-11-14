<script setup lang="ts">
  // import { ref } from 'vue'
  import { computed, onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { api } from "../../api";
  import CardDefault from "../../components/CardDefault.vue";
  import NotFound from "../NotFound.vue";

  const router = useRouter();
  const studioInfo = ref();
  const studioName = computed(() => studioInfo.value?.profile?.display_name);
  const studioWorks = ref();

  const studio = computed(() => router.currentRoute.value.params.studioName);

  onMounted(async () => {
    const data = await fetch(`${api}/artist/${studio.value}`);
    if (!data.ok) studioInfo.value = undefined;
    else {
      const jsonData = await data.json();
      studioInfo.value = jsonData?.artist;
    }

    const allWorks = await fetch(
      `${api}/artist/a/${studioInfo.value?.id}/all-works`
    );
    const jsonAllWorks = await allWorks.json();
    studioWorks.value = jsonAllWorks?.works;
  });
</script>
<template>
  <section>
    <NotFound v-if="!studioWorks?.length" class="container my-7 relative" />
    <div class="container my-7 relative" v-else>
      <h2 class="header-text">Projects</h2>
      <div class="flex flex-wrap gap-10 py-10">
        <div
          v-for="work in studioWorks"
          :key="work.id"
          class="min-w-[80%] sm:min-w-[40%] md:min-w-[20%] lg:min-w-[10%] md:max-w-[15rem] grow sm:shrink"
        >
          <CardDefault
            :open-in-blank="false"
            :rounded-image="true"
            :rounded="true"
            :header="work.title"
            :description="work.description"
            :href="`/studio/${studioName}/projects/${work.id}/${work.title}`"
            :image-url="work.files.images[0]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
