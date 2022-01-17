<template>
  <div>news page</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
const news = ref(null)

export default defineComponent({
  name: 'News',

  setup() {
    return news
  }
});
</script>
