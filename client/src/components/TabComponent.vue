<script lang="ts">
  export default {
    inheritAttrs: false,
    model: {
      event: "tabChange",
    },
  };
</script>
<script setup lang="ts">
  import { inject, ref } from "vue";
  import { RouteLocationRaw } from "vue-router";

  interface Props {
    name?: string;
    to?: RouteLocationRaw;
    rounded?: boolean;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    name: "",
    rounded: false,
    disabled: false,
  });

  const selected = inject("selected");
</script>

<template>
  <li
    :class="{
      active: selected === name,
      'cursor-pointer': !disabled,
      'rounded-md': rounded,
    }"
    class="my-tab transition-all duration-400 self-center relative flex items-center justify-center p-1 px-2 md:px-4"
    @click="!disabled ? $parent?.$emit('update:modelValue', name) : null"
  >
    <router-link
      :to="to"
      v-if="to"
      w-full
      h-full
      absolute
      top-0
      left-0
    ></router-link>
    <slot></slot>
  </li>
</template>

<style scoped></style>
