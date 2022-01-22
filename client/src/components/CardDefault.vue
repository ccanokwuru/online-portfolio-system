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
  <div class="my-6 px-6 sm:px-6 lg:px-4 gap-4">
    <div>
      <a :href="href ? href : '#'" :target="href?'_blank':'_self'">
        <!-- Image -->
        <img
          class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
          :src="imageUrl ? imageUrl : 'https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80'"
          :alt="header"
        />
      </a>
      <a :href="href ? href : '#'">
        <!-- Details -->
        <div class="text-justify my-3">
          <!-- Name -->
          <h6 class="text-gray-900 text-lg font-bold mb-1">{{ header }}</h6>

          <!-- Description -->
          <div class="text-gray-700 font-light mb-2">{{ description }}</div>
        </div>
      </a>
    </div>
  </div>
</template>
