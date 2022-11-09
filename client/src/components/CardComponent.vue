<script setup lang="ts">
  import { ref } from "vue";

  defineProps<{
    header: string;
    imageUrl: string;
    description: string;
    roundedImage: boolean;
    openInBlank: boolean;
    rounded: boolean;
  }>();

  const change = ref(false);
</script>

<template>
  <div :class="{ 'md:rounded-2xl rounded-md': rounded }" class="card">
    <slot name="header" v-if="imageUrl">
      <!-- Image -->
      <div
        class="w-full transition-all duration-500"
        :class="{
          'md:rounded-2xl rounded-md': roundedImage,
          'scale-110 shadow-md': change,
        }"
      >
        <img :src="imageUrl ?? '/logo.png'" :alt="header" />
      </div>
    </slot>
  </div>
</template>

<style scoped>
  .card:hover + img {
    margin-top: -10px;
  }
</style>
