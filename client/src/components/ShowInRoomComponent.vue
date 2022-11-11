<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    image: string;
    modelValue: boolean;
  }>();

  const emit = defineEmits(["update:modelValue"]);

  const value = computed({
    get(): boolean {
      return props.modelValue;
    },
    set(value: boolean) {
      emit("update:modelValue", value);
    },
  });
  const toggle = () => {
    emit("update:modelValue", !props.modelValue);
  };
</script>
<template>
  <section
    class="fixed top-0 left-0 h-screen w-screen z-50"
    :style="`
      background: linear-gradient(
        268.19deg,
        #bdbdbd -54.35%,
        rgba(236, 236, 236, 0) 132.22%
      );`"
  >
    <div
      class="xl:container relative h-full"
      :style="`
        background-image: url('/room.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;`"
    >
      <div class="bg-white w-fit px-2 absolute top-0 left-0" @click="toggle">
        <i class="bi bi-arrow-left-short text-3xl"></i>
      </div>
      <div class="w-[40%] lg:max-w-[20%] mx-auto py-20">
        <img :src="image" alt="artwork" class="w-full shadow-xl" />
      </div>
    </div>
  </section>
</template>
