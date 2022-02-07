<template>
  <small>
    <div class="row rounded-borders">
      <div class="col-1">1</div>
      <div class="col-1">
        <q-icon name="bi-hand-thumbs-up" />
      </div>
      <div class="col-3">Art !</div>
      <div class="col-2">3,245</div>
      <div class="col-2">4.23</div>
      <div class="col-1">
        <q-icon name="bi-folder-symlink" />
      </div>
      <div class="col-1 text-center">
        <q-icon name="bi-share" />
      </div>
      <div class="col-1 text-right q-pr-sm">
        <q-icon name="bi-three-dots" />
      </div>
    </div>
  </small>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'RowList',
  props: {
  },
  setup() {
    return {

    }
  },
});
</script>
<style scoped>
.row {
  padding: 5px;
}
.row:hover {
  background: white;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}
</style>
