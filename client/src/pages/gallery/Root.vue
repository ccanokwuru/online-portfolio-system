<script lang="ts" setup>
  import { Ref, ref, onMounted } from "vue";
  import { RouterLink } from "vue-router";
  import { api } from "../../api";
  import CardDefault from "../../components/CardDefault.vue";

  interface CategoryI {
    works: any[];
    categories: any[];
    name: string;
    description: string;
    id: string;
  }

  const categories: Ref<CategoryI[] | undefined> = ref();

  onMounted(async () => {
    categories.value = await (
      await fetch(`${api}/work/get-all/grouped`)
    ).json();

    console.log(categories.value);
  });
</script>
<template>
  <div class="flex flex-col bg-transparent gap-2 pt-20">
    <section
      v-for="(category, index) in categories"
      :key="category.id"
      class="py-6"
      :class="{ 'bg-gray-300': index % 2 }"
    >
      <div class="container flex items-center content-center justify-between">
        <h2 class="header-text capitalize">Featured {{ category.name }}</h2>
        <router-link
          :to="`/exhibitions/cat/${category.id}/${category.name}`"
          class="text-red-900 text-3xl"
        >
          <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
      <div class="scroll-hor">
        <div
          v-for="work in category.works"
          v-show="Array.prototype.indexOf(work) < 9"
          :key="work.id"
          class="min-w-[80%] sm:min-w-[40%] md:min-w-[20%] lg:min-w-[10%] md:max-w-[15rem] grow md:shrink-0"
        >
          <CardDefault
            class="mx-3"
            :open-in-blank="true"
            :rounded-image="false"
            :rounded="false"
            :header="work.title"
            :description="work.description"
            href="/gallery"
            :image-url="work.files.images[0]"
          />
        </div>
      </div>
    </section>
  </div>
</template>
