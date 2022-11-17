<script lang="ts" setup>
  import { Ref, ref } from "vue";
  import { useRoute } from "vue-router";
  import LoginComponent from "../components/LoginComponent.vue";
  import RegisterComponent from "../components/RegisterComponent.vue";

  const route = useRoute();
</script>
<template>
  <div class="py-20 flex content-center p-5">
    <LoginComponent v-if="route.name === 'login'" />
    <RegisterComponent v-if="route.name === 'register'" />
  </div>
</template>
