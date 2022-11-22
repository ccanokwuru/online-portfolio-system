<script setup lang="ts">
  import { computed, onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { api } from "../../api";
  import CardDefault from "../../components/CardDefault.vue";

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
  <section class="hero relative container">
    <div
      class="self-center flex-grow border-gray-3 border-2 rounded-lg p-5 lg:p-12 md:text-2xl lg:text-5xl bg-blur text-justify leading-tight tracking-wider text-lg mt-3"
    >
      <span class="font-light"> Hi, I am</span>
      <h1 class="md:text-5xl text:2xl">
        <strong>{{ studioName }}</strong>
      </h1>
    </div>
  </section>

  <section>
    <div class="container my-7 relative">
      <h2 class="header-text">Projects</h2>
      <div class="scroll-hor">
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
            :href="`/studio/${studio}/projects/itm/${work.id}/${work.title}`"
            :image-url="work.files.images[0]"
          />
        </div>
      </div>
      <p class="text-right">
        <router-link
          :to="{ name: 'studio projects' }"
          class="font-semibold hover:underline-offset-1 hover:underline"
        >
          see more
          <span class="text-red-900">
            <i class="bi bi-chevron-right"></i>
          </span>
        </router-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
  /* .hero {
    background: linear-gradient(
      180deg,
      rgb(15 23 42 / var(--tw-bg-opacity)) 12.96%,
      rgb(51 65 85 / var(--tw-bg-opacity)) 65.89%
    );
  } */
</style>
