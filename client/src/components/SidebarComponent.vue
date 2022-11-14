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
</script>

<template>
  <aside
    class="h-full transition-all duration-500 md:text-base w-fit"
    :class="{ 'shadow-md': addShadow }"
  >
    <div
      class="flex flex-col w-fit p-2 mt-[50px] justify-between gap-5 relative sidebar"
    >
      <nav
        class="grow flex flex-col gap-x-2 md:gap-x-5 justify-start content-center self-center font-[500] md:font-semibold gap-3 overflow-hidden overflow-y-auto"
      >
        <router-link to="/" exact
          ><i class="bi bi-app-indicator"></i> Dashboard</router-link
        >
        <router-link to="/exhibitions" exact>
          <i class="bi bi-brush-fill"></i> Works</router-link
        >
        <router-link to="/articles" exact>
          <i class="bi bi-journal-richtext"></i> Articles</router-link
        >
        <router-link to="/artists" exact
          ><i class="bi bi-bookmark-star-fill"></i> Favourites</router-link
        >
        <router-link to="/artists" exact
          ><i class="bi bi-receipt"></i> Orders</router-link
        >
        <div
          target="_blank"
          class="font-semibold md:font-bold text-red-900 self-center w-full cursor-pointer"
          @click="logout"
        >
          <i class="bi bi-door-closed"></i>
          Logout
        </div>
      </nav>
    </div>
  </aside>
</template>
<style scoped>
  .sidebar {
    height: calc(100vh - 50px);
  }
</style>
