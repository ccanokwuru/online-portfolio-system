<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{
  header: string,
  imageUrl: string,
  description: string,
  href: string
  roundedImage: boolean,
  openInBlank: boolean,
  rounded: boolean,
}>()

</script>

<template>
  <div :class="rounded ? 'md:rounded-2xl rounded-md' : ''" class="card">
    <slot name="image" v-if="imageUrl">
      <router-link :to="href ? href : '#'" :target="openInBlank ? '-blank' : '_self'">
        <!-- Image -->
        <img
          :class="roundedImage ? 'md:rounded-2xl rounded-md' : ''"
          :src="imageUrl"
          :alt="header"
          class="hover:shadow-lg"
        />
      </router-link>
    </slot>
    <router-link :to="href ? href : '#'" :target="openInBlank ? '-blank' : '_self'">
      <!-- Details -->
      <div class="md:my-2 md:pb-2 whitespace-pre-wrap">
        <!-- Name -->
        <slot name="header" v-if="header">
          <h6
            class="text-base md:text-lg md:font-bold font-semibold md:mb-1 leading-tight md:leading-normal"
          >{{ header }}</h6>
        </slot>

        <!-- Description -->
        <slot name="description" v-if="description">
          <div class="text-gray-700 font-light md:mb-2 mb-1 text-sm md:text-base">{{ description }}</div>
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