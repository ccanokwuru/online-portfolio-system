<script setup lang="ts">
  import { ref } from "vue";

  defineProps<{
    header?: string;
    imageUrl?: string;
    description?: string;
    href?: string;
    roundedImage?: boolean;
    openInBlank?: boolean;
    rounded?: boolean;
    tags?: {
      url?: string;
      name: string;
    }[];
  }>();

  const change = ref(false);
</script>

<template>
  <div
    :class="{ 'rounded-2xl': rounded }"
    class="card"
    @mouseenter="change = true"
    @mouseleave="change = false"
  >
    <slot name="image" v-if="imageUrl">
      <!-- Image -->
      <div
        class="w-fit self-center transition-all duration-[900ms] overflow-hidden flex items-center justify-center"
        :class="{
          'rounded-2xl': roundedImage,
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
    <div class="my-2 pb-2">
      <!-- Name -->
      <slot name="header" v-if="header">
        <h6 class="header" :class="{ 'px-2 pt-3': change }">
          {{ header }}
        </h6>
      </slot>

      <!-- Description -->
      <slot name="description" v-if="description">
        <div class="description" :class="{ 'px-2': change }">
          {{ description }}
        </div>
      </slot>
    </div>

    <div
      class="flex gap-2 items-center py-2 truncate transition-all duration-200"
      :class="{ 'px-2': change }"
      v-if="tags?.length"
    >
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="bg-slate-200 rounded-full p-1 px-3 z-[100] text-sm relative"
        >{{ tag.name }}
        <router-link
          v-if="tag.url"
          class="absolute left-0 top-0 w-full h-full"
          :to="tag.url"
        />
      </span>
    </div>

    <router-link
      v-if="href"
      :to="href"
      :target="openInBlank ? '_blank' : '_self'"
      class="w-full absolute h-full z-50"
    />
  </div>
</template>

<style scoped>
  /* .card:hover + img {
    margin-top: -10px;
  } */
</style>
