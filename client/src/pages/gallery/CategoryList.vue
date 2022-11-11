<script lang="ts" setup>
  import { Ref, ref, computed, watch, onMounted } from "vue";
  import { useRoute } from "vue-router";
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
  const currentRoute = computed(() => route);

  const params = computed(() => route.params);
  const category: Ref<CategoryI | undefined> = ref();

  onMounted(async () => {
    category.value = params.value?.cat
      ? await (
          await fetch(`${api}/work/get-all/c`, {
            method: "post",
            body: JSON.stringify({ category: params.value.cat }),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json()
      : params.value?.id
      ? await (await fetch(`${api}/work/get-all/cid/${params.value.id}`)).json()
      : undefined;
  });

  watch(params, async () => {
    category.value = params.value?.cat
      ? await (
          await fetch(`${api}/work/get-all/c`, {
            method: "post",
            body: JSON.stringify({ category: params.value.cat }),
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json()
      : params.value?.id
      ? await (await fetch(`${api}/work/get-all/cid/${params.value.id}`)).json()
      : undefined;
  });
</script>
<template>
  <section class="flex flex-col bg-transparent gap-6 container">
    <div class="flex items-center content-center justify-between">
      <h2 class="header-text capitalize">
        All in {{ params?.cat ?? category?.name }}
      </h2>
    </div>
    <div class="flex flex-wrap gap-6">
      <div
        v-if="category?.works.length"
        v-for="work in category?.works"
        :key="work.id"
        class="min-w-[80%] sm:min-w-[40%] md:min-w-[20%] lg:min-w-[10%] md:max-w-[15rem] grow md:shrink-0"
      >
        <CardDefault
          :open-in-blank="false"
          :rounded-image="false"
          :rounded="false"
          :header="work.title"
          :description="work.description"
          :href="`/exhibitions/item/${work.id}/${work.title}`"
          :image-url="work.files.images[0]"
        />
      </div>
      <div v-else class="grow flex items-center justify-center">
        <p class="capitalize font-bold text-4xl opacity-50 p-3">
          Nothing Here for now
        </p>
      </div>
    </div>
  </section>
</template>
