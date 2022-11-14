<script setup lang="ts">
  const props = defineProps<{ label: string; value?: string | number }>();
</script>
<template>
  <div
    class="flex flex-col gap-2 p-6 break-all rounded-lg hover:shadow text-center transition-all duration-500 hover:scale-105"
  >
    <h3 class="font-semibold text-xl sticky top-30 capitalize">{{ label }}</h3>

    <div class="flex flex-wrap" v-if="value">{{ value }}</div>
  </div>
</template>
<style></style>
