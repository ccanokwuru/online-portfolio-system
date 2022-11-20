<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import ForgottenPassword from "../components/ForgottenPassword.vue";
  import LoginComponent from "../components/LoginComponent.vue";
  import RegisterComponent from "../components/RegisterComponent.vue";

  const route = useRoute();
</script>
<template>
  <div class="py-20 flex content-center p-5">
    <LoginComponent v-if="route.name === 'login'" />
    <RegisterComponent v-if="route.name === 'register'" />
    <ForgottenPassword v-if="route.name === 'forgotten password'" />
  </div>
</template>
