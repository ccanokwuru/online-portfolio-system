<script lang="ts">
  export default {
    inheritAttrs: false,
    model: {
      prop: "value",
      event: "update",
    },
  };
</script>
<script setup lang="ts">
  import { computed, ref, provide, useSlots } from "vue";

  const slots = useSlots();

  const props = defineProps<{
    modelValue?: string;
    align?: string;
    noCaps?: boolean;
  }>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();

  // @ts-ignore
  const activeTab = computed(() => props.modelValue);

  provide(
    "selected",
    computed(() => activeTab.value)
  );
</script>

<template>
  <div class="my-tabs" relative>
    <div class="w-full absolute">
      <ul
        class="my-tabs-header flex flex-row overflow-x-auto font-semibold gap-1 list-none capitalize"
        :class="
          `justify-${props.align ? props.align : 'start  md:center'} ` +
          { uppercase: !noCaps }
        "
      >
        <slot name="tabs"></slot>
      </ul>
    </div>

    <div class="my-tabs-panel" pt="10">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .my-tabs-header::-webkit-scrollbar {
    height: 0.5px;
  }
</style>
