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
    class="card hover:scale-105 transition-all duration-500"
    @mouseenter="change = true"
    @mouseleave="change = false"
  >
    <router-link
      :to="href ? href : '#'"
      :target="openInBlank ? '-blank' : '_self'"
      class="w-full hover:!no-underline"
    >
      <slot name="image" v-if="imageUrl">
        <!-- Image -->
        <div
          class="w-full transition-all duration-[900ms] overflow-hidden"
          :class="{
            'md:rounded-2xl rounded-md': roundedImage,
            'scale-110 shadow-md': change,
          }"
        >
          <img :src="imageUrl ?? '/logo.png'" :alt="header" />
        </div>
      </slot>
      <!-- Details -->
      <div class="my-2 pb-2 whitespace-pre-wrap">
        <!-- Name -->
        <slot name="header" v-if="header">
          <h6
            class="text-base md:text-lg md:font-bold font-semibold md:mb-1 leading-tight md:leading-normal"
          >
            {{ header }}
          </h6>
        </slot>

        <!-- Description -->
        <slot name="description" v-if="description">
          <div
            class="text-opacity-70 font-light md:mb-2 mb-1 text-sm md:text-base"
          >
            {{ description }}
          </div>
        </slot>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  .card:hover + img {
    margin-top: -10px;
  }
</style>
