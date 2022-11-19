<script setup lang="ts">
  import { onMounted, Ref, ref } from "vue";
  import { api } from "../api";
  import CardDefault from "../components/CardDefault.vue";

  const artWorks: Ref<{ works: any[]; total: number; pages: number }> = ref({
    works: [],
    total: 0,
    pages: 0,
  });

  const artists: Ref<{ artists: any[]; total: number; pages: number }> = ref({
    artists: [],
    total: 0,
    pages: 0,
  });

  onMounted(async () => {
    artWorks.value = await (await fetch(`${api}/work/get-all`)).json();
    artists.value = await (await fetch(`${api}/artist/get-all`)).json();

    console.log({ works: artWorks.value.works });
  });
</script>
<template>
  <div
    class="absolute z-[-50] w-full bg-opacity-[.68] h-[200px] -top-[100px] bg-[#9da4b3]"
  ></div>
  <!-- hero section -->
  <section class="bg-[#BBC1CF] hero relative">
    <div class="container flex flex-wrap-reverse h-full relative">
      <div
        class="text-[7rem] lg:text-[8rem] xl:text-[10rem] tracking-[0.15em] uppercase font-bold text-red-900 opacity-[0.08] absolute self-center left-[-10%] hidden md:flex md:items-center top-0 bottom-0 z-5"
      >
        <div class="self-center text-justify min-w-screen">
          <h2 class="leading-normal">
            see my <br />
            works
          </h2>
        </div>
      </div>

      <div
        class="self-center items-end h-full flex-col w-full md:w-4/12 grow text-center md:text-left relative z-50"
      >
        <h1
          class="md:text-[4rem] text-[3rem] font-bold my-0 leading-none whitespace-nowrap"
        >
          Creativity <br />
          & CREATIVES
        </h1>

        <div class="lg:text-lg py-3">Create Your Portfolio in Minutes</div>

        <div class="my-10">
          <router-link
            to="/login"
            class="btn bg-opacity-20 bg-slate-900 my-6 md:font-semibold text-white lg:text-2xl text-xl p-2 px-4 bg-blur"
            >Let's Journey</router-link
          >
        </div>
      </div>
      <div class="text-center w-full md:w-8/12 md:text-right lg:text-left">
        <div class="sm:left-0 flex flex-col items-center relative">
          <img src="../assets/head.png" alt="creative image" class="w-[80%]" />
        </div>
      </div>
    </div>
  </section>

  <!-- art exhibition -->
  <section>
    <div class="container my-7 relative">
      <h2 class="header-text">Exhibitions & Auctions</h2>
      <div class="scroll-hor">
        <div
          v-for="work in artWorks.works"
          :key="work.id"
          class="min-w-[80%] sm:min-w-[40%] md:min-w-[20%] lg:min-w-[10%] md:max-w-[15rem] grow sm:shrink"
        >
          <CardDefault
            :open-in-blank="true"
            :rounded-image="true"
            :rounded="true"
            :header="work.title"
            :description="work.description"
            :href="`/exhibitions/item/${work.id}/${work.title}`"
            :image-url="work.files.images[0]"
            :tags="work.skills.map((i:any )=>{return{name:i?.name,url:``}})"
          />
        </div>
      </div>
      <p class="text-right">
        <router-link
          to="/exhibitions"
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

  <!-- artists and creatives -->
  <section>
    <div class="container mt-7 pb-7 relative">
      <h2 class="header-text">Talents Onboard</h2>
      <div class="scroll-hor">
        <div
          v-for="artist in artists.artists"
          :key="artist.id"
          class="min-w-[80%] sm:min-w-[40%] md:min-w-[20%] lg:min-w-[10%] md:max-w-[15rem] grow sm:shrink"
        >
          <CardDefault
            :open-in-blank="true"
            :rounded-image="true"
            :rounded="true"
            :header="artist.profile.first_name + ' ' + artist.profile.last_name"
            :description="'@' + artist.profile.display_name"
            :href="'/studio/' + artist.profile.display_name.toLowerCase()"
            :image-url="artist.profile.avatar"
          />
        </div>
      </div>

      <p class="text-right">
        <router-link
          to="/artists"
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
  .hero {
    background: linear-gradient(180deg, #bbc1cf 12.96%, #e5e9ec 65.89%);
    @apply min-h-[500px];
  }
</style>
