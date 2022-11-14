<script setup lang="ts">
  import Swal from "sweetalert2";
  import { computed, ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { api, app } from "../api";
  import { userStore } from "../store/user";

  const router = useRouter();

  const expand = ref(false);
  const successfull = ref(false);
  const loading = ref(false);
  const addShadow = ref(false);
  const auth = computed(() => userStore().authToken);

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

  const becomeArtist = () => {};

  const toggle = () => {
    expand.value = !expand.value;
    addShadow.value = !addShadow.value;
  };
</script>

<template>
  <aside
    class="h-full transition-all duration-500 md:text-base w-fit whitespace-pre-wrap"
    :class="{
      'shadow-md md:shadow-none': addShadow,
    }"
  >
    <button @click="toggle" class="md:hidden p-2">
      <i class="bi bi-menu-button"></i>
    </button>
    <div
      class="flex flex-col w-fit p-2 justify-between gap-5 relative sidebar overflow-hidden"
    >
      <nav
        class="grow flex flex-col gap-x-2 md:gap-x-5 justify-start content-center self-center font-[500] md:font-semibold gap-3 overflow-hidden overflow-y-auto whitespace-nowrap"
      >
        <router-link
          to="/dashboard"
          exact
          class="link"
          :class="{
            'bg-red-900 text-white rounded': useRoute().name === 'dashboard',
          }"
          ><i class="bi bi-app-indicator"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
          >
            Dashboard</span
          ></router-link
        >
        <router-link
          active-class="bg-red-900 text-white rounded"
          to="/dashboard/works"
          exact
          class="link"
        >
          <i class="bi bi-brush-fill"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
            >Works</span
          >
        </router-link>
        <router-link
          active-class="bg-red-900 text-white rounded"
          to="/dashboard/articles"
          exact
          class="link"
        >
          <i class="bi bi-journal-richtext"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
            >Articles</span
          >
        </router-link>
        <router-link
          active-class="bg-red-900 text-white rounded"
          to="/dashboard/favourites"
          class="link"
          ><i class="bi bi-bookmark-star-fill"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
            >Favourites</span
          >
        </router-link>
        <router-link
          active-class="bg-red-900 text-white rounded"
          to="/dashboard/orders"
          exact
          class="link"
          ><i class="bi bi-receipt"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
            >Orders
          </span>
        </router-link>

        <div
          target="_blank"
          class="font-semibold md:font-bold link self-center w-full cursor-pointer hover:bg-red-900 hover:text-white rounded"
          @click="becomeArtist"
        >
          <i class="bi bi-node-plus-fill"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
            >Become an Artist</span
          >
        </div>
        <div
          target="_blank"
          class="font-semibold md:font-bold text-red-900 link self-center w-full cursor-pointer hover:bg-red-900 hover:text-white rounded"
          @click="logout"
        >
          <i class="bi bi-door-closed"></i>
          <span
            :class="{ 'absolute md:relative left-[-100vw] md:left-0': !expand }"
            >Logout</span
          >
        </div>
      </nav>
    </div>
  </aside>
</template>
<style scoped></style>
