<script setup lang="ts">
  import { computed, ref } from "vue";

  const props = defineProps<{
    label?: string;
    type?: string;
    required?: boolean;
    modelValue: any;
  }>();

  const emit = defineEmits(["update:modelValue"]);

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value: string | number) {
      emit("update:modelValue", value);
    },
  });

  const showPass = ref(false);
</script>

<template>
  <div class="flex flex-col text-left w-full">
    <div class="text-sm text-gray-500">{{ label }}</div>
    <div class="relative w-full flex">
      <input
        v-model="value"
        :required="required"
        :type="type !== 'password' ? type : showPass ? 'text' : type"
        class="block grow w-full py-3 px-3 mt-2 mb-4 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
      />
      <div
        v-if="type === 'password'"
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
      >
        <p class="font-semibold" @click="showPass = !showPass">
          <i
            class="bi bi-eye-slash"
            :class="!showPass ? 'bi-eye' : 'bi-eye-slash'"
          ></i>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
