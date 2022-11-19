<script setup lang="ts">
  const props = defineProps<{ label: string; value?: string | number }>();
</script>
<template>
  <div
    class="p-6 break-all rounded-lg hover:shadow text-center transition-all duration-500"
    :title="`${label} - ${value}`"
  >
    <h3 class="font-semibold text-lg sticky top-30 capitalize">{{ label }}</h3>

    <div class="">{{ value }}</div>
  </div>
</template>
<style></style>
