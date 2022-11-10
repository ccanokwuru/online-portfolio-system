<script setup lang="ts">
  import { ref } from "vue";

  defineProps<{
    header: string;
    imageUrl: string;
    description: string;
    href: string;
    roundedImage: boolean;
    openInBlank: boolean;
    rounded: boolean;
  }>();

  const change = ref(false);
</script>

<template>
  <div
    :class="{ 'md:rounded-2xl rounded-md': rounded }"
    class="card hover:scale-105 transition-all duration-500 flex flex-col relative hover:shadow"
    @mouseenter="change = true"
    @mouseleave="change = false"
  >
    <slot name="image" v-if="imageUrl">
      <!-- Image -->
      <div
        class="w-fit self-center transition-all duration-[900ms] overflow-hidden flex items-center justify-center"
        :class="{
          'md:rounded-2xl rounded-md': roundedImage,
          ' scale-105 md:scale-110 shadow-md': change,
        }"
      >
        <img
          :src="imageUrl ?? '/logo.png'"
          class="transition-all duration-[1200ms]"
          :class="{ 'scale-110': change }"
          :alt="header"
        />
      </div>
    </slot>
    <!-- Details -->
    <div class="my-2 pb-2 whitespace-pre-wrap">
      <!-- Name -->
      <slot name="header" v-if="header">
        <h6
          class="text-base md:text-lg md:font-bold font-semibold leading-tight md:leading-normal truncate"
        >
          {{ header }}
        </h6>
      </slot>

      <!-- Description -->
      <slot name="description" v-if="description">
        <div
          class="text-opacity-70 font-light md:mb-2 mb-1 text-sm md:text-base w-full"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
        >
          {{ description }}
        </div>
      </slot>
    </div>

    <router-link
      v-if="href"
      :to="href"
      :target="openInBlank ? '-blank' : '_self'"
      class="w-full hover:!no-underline absolute h-full"
    >
    </router-link>
  </div>
</template>

<style scoped>
  /* .card:hover + img {
    margin-top: -10px;
  } */
</style>
