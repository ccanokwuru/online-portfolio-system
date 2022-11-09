<script setup lang="ts">
  import { app } from "../api";
  import { userStore } from "../store/user";

  const { authToken } = userStore();
</script>

<template>
  <header
    class="sticky top-0 w-screen py-2 z-[99999] bg-opacity-10 bg-slate-900 bg-blur text-sm md:text-base"
  >
    <div class="flex container content-center justify-between gap-5">
      <router-link to="/" class="self-center">
        <img src="../assets/logo.png" class="nav-logo" />
      </router-link>
      <nav
        class="flex md:flex-grow gap-x-2 md:gap-x-5 justify-center content-center self-center md:font-semibold"
      >
        <router-link to="/" exact>Home</router-link>
        <router-link to="/exhibitions" exact>Exhibitions</router-link>
        <router-link to="/articles" exact>Articles</router-link>
        <router-link to="/artists" exact>Artists</router-link>
      </nav>
      <router-link
        v-show="!authToken"
        to="/login"
        class="font-semibold md:font-bold text-red-900 self-center md:uppercase"
        >Signin</router-link
      >
      <a
        v-show="authToken"
        :href="app"
        target="_blank"
        class="font-semibold md:font-bold text-red-900 self-center"
        >Dashboard</a
      >
    </div>
  </header>
</template>
