<script lang="ts" setup>
  // import { onMounted, ref } from 'vue'

  import { computed, onMounted, ref } from "vue";
  import { RouterLink, RouterView, useRouter } from "vue-router";
  import { api } from "../api";
  import FooterComponent from "../components/FooterComponent.vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
  import SidebarComponent from "../components/SidebarComponent.vue";
  import NotFound from "../pages/NotFound.vue";
  import { userStore } from "../store/user";

  const router = useRouter();
  const studioInfo = ref();
  const studioName = computed(
    () => router.currentRoute.value.params.studioName
  );

  const auth = computed(() => userStore().authToken);
  onMounted(async () => {
    const data = await fetch(`${api}/artist/${studioName.value}`);
    if (!data.ok) return (studioInfo.value = undefined);
    const jsonData = await data.json();
    studioInfo.value = jsonData?.artist;
  });
</script>

<template>
  <!-- <div class="bg-slate-700 text-white"> -->
  <HeaderComponent />
  <!-- router-view -->
  <div
    class="flex max-w-full overflow-x-clip"
    style="min-height: calc(100vh - 70px)"
  >
    <div class="flex flex-col sticky top-20 !h-full z-50" v-if="auth">
      <SidebarComponent class="w-fit grow" />
    </div>
    <!-- router-view -->
    <div class="grow flex gap-2 container relative">
      <section class="sticky top-0 w-fit py-2 z-50 text-sm md:text-base">
        <div class="flex flex-col gap-5">
          <router-link :to="'/studio/' + studioName + '/'">
            <!-- <img src="../assets/logo.png" class="nav-logo" /> -->
            <div
              class="border-t-red-900 border-r-red-800 border-0 w-[25px] h-[25px] md:h-[50px] md:w-[50px] relative bg-slate-900 border-t-2 border-r-2 md:border-t-4 md:border-r-4 capitalize"
            >
              <h1
                class="text-center md:leading-3 leading-[.09rem] text-white text-2xl md:text-5xl p-2 md:py-4 m-0 font-semibold"
              >
                {{ studioName[0] }}
              </h1>
            </div>
          </router-link>

          <div>
            <div
              class="w-[150px] h-[150px] overflow-hidden flex items-center justify-center rounded-full text-center"
            >
              <img
                :src="`${
                  studioInfo?.profile?.avatar ??
                  '../../assets/defaultCreator.png'
                }`"
                :alt="'' + studioName"
                class="w-full"
              />
            </div>
            <span class="font-[200]"
              >@{{ studioInfo?.profile?.display_name }}</span
            >
          </div>
          <nav class="flex grow flex-col gap-2">
            <router-link :to="'/studio/' + studioName + '/'" exact
              >Home</router-link
            >
            <router-link :to="'/studio/' + studioName + '/about'" exact
              >About</router-link
            >
            <router-link :to="'/studio/' + studioName + '/projects'" exact
              >Projects</router-link
            >
            <router-link :to="'/studio/' + studioName + '/contact'" exact
              >Contact me</router-link
            >
          </nav>
        </div>
      </section>

      <div class="grow">
        <router-view v-slot="{ Component }">
          <transition name="fade" class="duration-500 min-h-screen">
            <NotFound v-if="!studioInfo?.id" />
            <component :is="Component" v-else />
          </transition>
        </router-view>
      </div>
    </div>
  </div>

  <FooterComponent />
  <!-- </div> -->
</template>
