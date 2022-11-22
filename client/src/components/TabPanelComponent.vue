<script setup lang="ts">
  import { inject, ref } from "vue";

  const props = defineProps<{
    name: string;
  }>();

  const selected = inject("selected");
</script>

<template>
  <div
    v-show="selected === name"
    :class="{ active: name === selected }"
    class="my-tab-panel transition-all duration-500"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
