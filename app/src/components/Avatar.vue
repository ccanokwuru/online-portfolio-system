<template>
  <div class="flex flex-center q-gutter-md">
    <div class="column wrap justify-start items-end content-end">
      <p class="q-py-none text-bold q-ma-none">{{ name }}</p>
      <q-rating
        :model-value="rating"
        max="5"
        size="0.4em"
        color="orange"
        icon="bi-star"
        icon-selected="bi-star-fill"
        icon-half="bi-star-half"
        no-dimming
        no-reset
        readonly
      />
    </div>
    <q-avatar color="blue" text-color="white" size="lg">
      <img :src="imageUrl" v-if="imageUrl" />
      <span v-else>{{ short }}</span>
    </q-avatar>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'Avatar',
  props: {
    name: {
      type: String,
      required: true,
      default: 'Anokwuru Chisom'
    },
    imageUrl: {
      type: String,
    },
    rating: {
      type: Number,
      default: 3.5
    },
  },
  setup(props) {
    const name = ref(props.name);
    const names = name.value.split(' ');
    const short = `${names[0][0]}.${names[1][0]}`;

    return {
      ...props,
      short
    };
  },
});
</script>
