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
  <!-- <section class="hero min-h-[300px] relative">
    <div class="container flex md:flex-wrap h-full flex-wrap-reverse relative">
      <div
        class="self-center flex flex-cols w-full md:w-6/12 text-center md:text-left absolute lg:-ml-[15rem] -ml-[5rem]"
      >
        <div
          class="lg:text-[20rem] text-[15rem] uppercase font-black text-violet-900 opacity-10 absolute hidden md:flex h-full lg:leading-[20rem] leading-[15rem] mt-5"
        >
          <div class="self-center text-justify w-8/12">
            <h2 class="!m-0 p-0">DESIG</h2>
            <h2 class="!m-0 p-0">NER</h2>
          </div>
        </div>
      </div>
      <div class="absolute w-full opacity-40 md:px-5 right-0 pt-40 h-full">
        <div
          class="sm:left-0 bg-purple-900 h-full w-full md:w-6/12 md:float-right md:mx-10"
        ></div>
      </div>
      <div
        class="md:self-center md:flex md:flex-cols container md:w-7/12 text-center md:text-left md:relative absolute z-40"
      >
        <div
          class="self-center flex-grow first-line:btn bg-opacity-10 bg-gray-500 p-5 lg:p-12 text-white md:text-3xl lg:text-5xl bg-blur border border-gray-500 text-justify leading-tight tracking-wider text-lg mt-3"
        >
          Hi,
          <br />
          <span class="font-semibold">my name is</span>
          <h1 class="md:text-5xl text-purple-600 capitalize text:2xl">
            <strong>{{ studioName }}</strong>
          </h1>
          <h2>Creative Mind</h2>
        </div>
      </div>
      <div class="text-right w-full md:w-5/12 mt-[50px] z-30">
        <img
          :src="`${
            studioInfo?.profile?.avatar ?? '../../assets/defaultCreator.png'
          }`"
          :alt="'' + studioName"
          class="!max-w-[80%]"
        />
      </div>
    </div>
  </section> -->
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
