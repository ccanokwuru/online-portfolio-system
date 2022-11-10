<script lang="ts" setup>
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
  <footer class="py-4 text-white bg-slate-900 text-xl fixed bottom-0 w-screen">
    <div class="container flex content-center justify-between">
      &copy; Prolifolio
      <div class="gap-x-2 flex pr-4">
        <a href="#">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="#">
          <i class="bi bi-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
