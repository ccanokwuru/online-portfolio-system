<script lang="ts" setup>
  import { Ref, ref } from "vue";
  import { useRoute } from "vue-router";
  import LoginComponent from "../components/LoginComponent.vue";
  import RegisterComponent from "../components/RegisterComponent.vue";

  const route = useRoute();

  const userType: Ref<"user" | "artist" | "admin"> = ref("user");
  const newUser = ref(false);
  const email = ref("");
  const password = ref("");
</script>
<template>
  <div class="w-screen min-h-screen py-20 flex bg-gray-200 content-center">
    <LoginComponent v-if="route.name === 'login'" />
    <RegisterComponent v-if="route.name === 'register'" />
  </div>
</template>
