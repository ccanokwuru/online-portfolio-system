<script lang="ts" setup>
  import { Ref, ref, onMounted, computed } from "vue";
  import { RouterLink, useRoute } from "vue-router";
  import { api } from "../../api";
  import CardDefault from "../../components/CardDefault.vue";

  interface CategoryI {
    works: any[];
    categories: any[];
    name: string;
    description: string;
    id: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  }
  const route = useRoute();

  const params = computed(() => route.params);

  const category: Ref<CategoryI | undefined> = ref();

  const { id, cat } = params.value;

  onMounted(async () => {
    category.value = cat
      ? await (
          await fetch(`${api}/work/get-all/c`, {
            method: "post",
            body: JSON.stringify({ category: cat }),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json()
      : await (await fetch(`${api}/work/get-all/cid/${id}`)).json();

    console.log({ category: category.value });
  });
</script>
<template>
  <section class="flex flex-col bg-transparent gap-6 pt-20 container">
    <div class="flex items-center content-center justify-between">
      <h2 class="header-text capitalize">All in {{ category?.name }}</h2>
    </div>
    <div class="flex flex-wrap gap-6">
      <div
        v-for="work in category?.works"
        v-show="Array.prototype.indexOf(work) < 9"
        :key="work.id"
        class="min-w-[80%] sm:min-w-[40%] md:min-w-[20%] lg:min-w-[10%] md:max-w-[15rem] grow md:shrink-0"
      >
        <CardDefault
          class="mx-3"
          :open-in-blank="true"
          :rounded-image="true"
          :rounded="true"
          :header="work.title"
          :description="work.description"
          href="/gallery"
          :image-url="work.files.images[0]"
        />
      </div>
    </div>
  </section>
</template>
