<script setup lang="ts">
  // import { ref } from 'vue'
  import { computed, onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { api } from "../../api";
  import NotFound from "../NotFound.vue";

  const router = useRouter();
  const studioInfo = ref();
  const workId = computed(() => router.currentRoute.value.params.id);
  const work = ref();
  const activeImage = ref("");

  const studio = computed(() => router.currentRoute.value.params.studioName);

  onMounted(async () => {
    const data = await fetch(`${api}/artist/${studio.value}`);
    if (!data.ok) studioInfo.value = undefined;
    else {
      const jsonData = await data.json();
      studioInfo.value = jsonData?.artist;
    }

    const workData = await fetch(`${api}/work/${workId.value}`);
    const jsonAllWorks = await workData.json();
    work.value = jsonAllWorks?.work;
    activeImage.value = work.value?.files?.images[0];
  });
</script>
<template>
  <section>
    <NotFound v-if="!work" class="container my-7 relative" />
    <div class="container my-7 relative" v-else>
      <h2 class="header-text capitalize">{{ work?.title }}</h2>
      <div class="flex flex-col gap-10 py-10 px-5">
        <div class="flex gap-5 md:gap-10 items-center border-b pb-5">
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
            <div
              class="flex items-center justify-center max-h-[500px] overflow-hidden w-[90%]"
            >
              <img :src="activeImage" alt="" class="shadow-xl h-hull w-auto" />
              <!-- <video src="" alt=""></video> -->
            </div>
          </div>
        </div>
        <div>
          {{ work?.description }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
