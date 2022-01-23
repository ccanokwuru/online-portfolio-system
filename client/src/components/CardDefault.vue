<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{
  header: string,
  imageUrl: string,
  description: string,
  href: string
}>()

</script>

<template>
  <div class="my-6 px-6 sm:px-6 lg:px-4 w-full md:w-6/12 lg:w-4/12 gap-7 flex-grow">
    <div>
      <slot name="image" v-if="imageUrl">
        <a :href="href ? href : '#'" :target="href ? '_blank' : '_self'">
          <!-- Image -->
          <img
            class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            :src="imageUrl"
            :alt="header"
          />
        </a>
      </slot>
      <a :href="href ? href : '#'">
        <!-- Details -->
        <div class="text-justify my-3">
          <!-- Name -->
          <slot name="header" v-if="header">
            <h6 class="text-gray-900 text-lg font-bold mb-1">{{ header }}</h6>
          </slot>

          <!-- Description -->
          <slot name="description" v-if="description">
            <div class="text-gray-700 font-light mb-2">{{ description }}</div>
          </slot>
        </div>
      </a>
    </div>
  </div>
</template>
