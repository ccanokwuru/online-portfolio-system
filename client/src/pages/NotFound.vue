<script lang="ts" setup>
  import FooterComponent from "../components/FooterComponent.vue";
  import HeaderComponent from "../components/HeaderComponent.vue";
</script>
<template>
  <HeaderComponent />

  <div class="w-screen h-screen flex bg-gray-200 content-center">
    <div class="self-center text-center container">
      <h1 class="text-3xl text-stale-900 py-4 font-bold">
        Ooops!!
        <br />Not Reachable
      </h1>
      <router-link
        to="/"
        class="text-white bg-red-900 hover:bg-slate-900 animate-bounce duration-300 btn"
        >Back Home</router-link
      >
    </div>
  </div>
  <FooterComponent />
</template>
