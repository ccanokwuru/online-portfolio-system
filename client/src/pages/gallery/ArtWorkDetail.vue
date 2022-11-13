<script lang="ts" setup>
  import { ref, onMounted, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { api } from "../../api";
  import ShowInRoomComponent from "../../components/ShowInRoomComponent.vue";
  import NotFound from "../NotFound.vue";

  const route = useRoute();
  const router = useRouter();

  const params = computed(() => route.params);

  const work = ref();
  const showInRoom = ref(false);

  const { id } = params.value;

  const activeImage = ref("");

  onMounted(async () => {
    const response = await (await fetch(`${api}/work/${id}`)).json();
    work.value = response?.work;
    activeImage.value = work?.value?.files?.images[0];
    console.log({ work: work.value });
  });
</script>
<template>
  <NotFound v-show="!work" class="container my-7 relative" />

  <section class="flex flex-wrap md:flex-nowrap bg-transparent gap-6 container">
    <div
      class="bg-[#F4F4F2] grow md:w-1/2 relative py-5 pr-5 md:py-10 md:pr-10"
    >
      <div
        class="absolute bg-[#F4F4F2] w-screen left-[-5vw] md:w-[50vw] md:left-[-40vw] top-0 h-full scale-x-110 md:scale-100 z-[-100]"
      ></div>
      <div class="flex gap-5 md:gap-10 items-center">
        <div
          class="flex flex-col gap-2 h-full overflow-hidden overflow-y-auto !w-[80px] min-w-[80px] max-w-[80px] self-center"
        >
          <div
            v-for="(image, index) in work?.files?.images"
            :key="index"
            class="overflow-hidden cursor-pointer"
            @click="activeImage = image"
          >
            <img :src="image" class="w-full" />
          </div>
        </div>
        <div
          class="grow flex flex-col gap-10 items-center justify-center self-center"
        >
          <div class="flex items-center justify-center h-full w-[90%]">
            <img :src="activeImage" alt="" class="shadow-xl w-full" />
            <!-- <video src="" alt=""></video> -->
          </div>
          <div class="flex items-center justify-center flex-wrap gap-10">
            <div
              class="flex gap-2 items-center cursor-pointer"
              @click="showInRoom = true"
            >
              <i class="bi bi-eye"></i> View in a room
            </div>
            <div class="flex gap-2 items-center cursor-pointer">
              <i class="bi bi-box-arrow-up"></i> Share
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grow w-full md:w-1/2 z-10 flex flex-col items-start p-5 md:p-10 gap-5"
    >
      <span
        class="flex gap-1 items-center fixed md:sticky top-20 cursor-pointer hover:font-semibold transition-all duration-500"
        @click="router.back()"
      >
        <i class="bi bi-arrow-left-short text-2xl"></i>
        Back
      </span>

      <div class="flex flex-col gap-1">
        <h1 class="text-3xl capitalize">{{ work?.title }}</h1>
        <h4 class="text-base">
          {{ work?.artist?.profile?.first_name }}
          {{ work?.artist?.profile?.last_name }}
          {{ work?.artist?.profile?.display_name ? "| @" : "" }}
          {{ work?.artist?.profile?.display_name }}
        </h4>
      </div>

      <div class="flex flex-col gap-4 w-full">
        <div class="w-full">{{ work?.description }}</div>
        <div class="w-full h-[1px] bg-slate-700 opacity-50"></div>
        <div class="flex flex-col w-full gap-2" v-if="work?.currency">
          <div class="font-semibold text-3xl">
            {{
              Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: work?.currency,
                notation: "compact",
              }).format(work?.price)
            }}
          </div>
          <div class="flex gap-1 flex-col">
            <div class="flex w-full gap-2">
              <i class="bi bi-geo-alt"></i> Ships from {{ work?.location }}
            </div>
            <div class="flex w-full gap-2">
              <i class="bi bi-archive"></i> Estimated to ship in {{}}
            </div>
          </div>
          <div class="flex flex-col gap-2 w-full py-5">
            <button
              class="w-full capitalize p-3 bg-[#161412] text-white outline-none border-0"
            >
              add to cart
            </button>

            <div class="text-center font-light text-xs">
              Taxes and shipping fees will apply upon checkout
            </div>
          </div>
        </div>
      </div>
    </div>

    <ShowInRoomComponent
      :image="activeImage"
      v-model="showInRoom"
      class="transition-all duration-700"
      :class="{ 'opacity-0 top-[-100vh]': !showInRoom }"
    />
  </section>
</template>
