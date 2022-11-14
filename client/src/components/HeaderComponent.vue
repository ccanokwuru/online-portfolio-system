<script setup lang="ts">
  import Swal from "sweetalert2";
  import { computed, ref } from "vue";
  import { useRouter } from "vue-router";
  import { api, app } from "../api";
  import { userStore } from "../store/user";

  const router = useRouter();

  const auth = computed(() => userStore().authToken);
  const drop = ref(false);
  const successfull = ref(false);
  const loading = ref(false);
  const addShadow = ref(false);

  const logout = async () => {
    loading.value = true;
    const response = await fetch(`${api}/auth/logout`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${auth.value}`,
      },
    });
    loading.value = false;
    const json = await response.json();
    localStorage.clear();
    Swal.close();
    await Swal.fire({
      title: `${json.message}`,
      text: `${json.errors ?? ""}`,
      showConfirmButton: false,
    });
    if (response.status === 200) {
      successfull.value = true;
      userStore().authToken = undefined;
      return router.push("/");
    }
  };

  document.addEventListener("click", () => {
    if (drop.value === true) drop.value = false;
  });
  document.addEventListener("scroll", () => {
    addShadow.value = window.scrollY >= 100;
  });
</script>

<template>
  <header
    class="sticky top-0 w-screen py-2 z-[99999] bg-opacity-10 bg-slate-900 bg-blur text-sm transition-all duration-500 md:text-base"
    :class="{ 'shadow-md': addShadow }"
  >
    <div class="flex container content-center justify-between gap-5 relative">
      <router-link to="/" class="self-center">
        <img src="../assets/logo.png" class="nav-logo" />
      </router-link>
      <nav
        class="flex md:flex-grow gap-x-2 md:gap-x-5 justify-center content-center self-center font-[500] md:font-semibold"
      >
        <router-link to="/" exact>Home</router-link>
        <router-link to="/exhibitions" exact>Exhibitions</router-link>
        <router-link to="/articles" exact>Articles</router-link>
        <router-link to="/artists" exact>Artists</router-link>
      </nav>
      <router-link
        v-show="!auth"
        to="/login"
        class="font-semibold md:font-bold text-red-900 self-center md:uppercase"
        >Signin</router-link
      >
      <button
        v-show="auth"
        class="font-semibold md:font-bold text-red-900 self-center"
        @click.stop="drop = !drop"
      >
        Account
      </button>
      <div
        class="transition-all duration-500 absolute rounded-md right-4 p-3 flex flex-col items-start"
        :class="{
          'top-[3rem] shadow-xl  bg-white z-[99999]': drop,
          'opacity-0 top-[-100vh] ': !drop,
        }"
      >
        <a
          href="/dashboard"
          target="_blank"
          class="font-semibold md:font-bold text-red-900 self-center w-full"
          >Dashboard</a
        >
        <div
          target="_blank"
          class="font-semibold md:font-bold text-red-900 self-center w-full cursor-pointer"
          @click="logout"
        >
          Logout
        </div>
      </div>
    </div>
  </header>
</template>
