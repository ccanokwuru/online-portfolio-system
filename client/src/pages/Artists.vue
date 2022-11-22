<script setup lang="ts">
  // import { ref } from 'vue'
  import { Ref, ref, onMounted } from "vue";
  import { api } from "../api";
  import CardDefault from "../components/CardDefault.vue";
  const artists: Ref<{ artists: any[]; total: number; pages: number }> = ref({
    artists: [],
    total: 0,
    pages: 0,
  });

  onMounted(async () => {
    artists.value = await (await fetch(`${api}/artist/get-all`)).json();
  });
</script>
<template>
  <section class="py-5">
    <div class="container relative">
      <h2 class="header-text">See All Artists Here</h2>
      <div class="flex flex-wrap gap-10 p-6">
        <div
          v-for="artist in artists.artists"
          :key="artist.id"
          class="grid grid-cols-2 md:grid-cols-4"
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
    </div>
  </section>
</template>

<style scoped></style>
