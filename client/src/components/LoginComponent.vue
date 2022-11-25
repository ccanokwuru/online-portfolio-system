<script lang="ts" setup>
  import { Ref, ref, watch } from "vue";
  import { RouterLink, useRouter } from "vue-router";
  import Swal from "sweetalert2";
  import FormInput from "./FormInput.vue";
  import { userStore } from "../store/user";

  const router = useRouter();
  const { login } = userStore();

  const successfull = ref(false);
  const loading = ref(false);
  const email = ref("");
  const password = ref("");

  const submit = async () => {
    loading.value = true;
    const response = await login({
      email: email.value,
      password: password.value,
    });
    loading.value = false;
    if (response.message === "success") {
      successfull.value = true;
      console.log({ hState: window.history.state });
      return window.history.state?.back ? router.back() : router.push("/");
    }
    Swal.close();
    await Swal.fire({
      title: `${response.message}`,
      text: `${response.errors}`,
      showConfirmButton: false,
    });
  };

  watch(loading, async () => {
    loading.value === true
      ? await Swal.fire({
          toast: true,
          position: "center",
          html: `<div class="flex gap-5 justify-center content-center">
            <div style="border-top-color: transparent"
                  class="w-8 h-8 border-4 border-red-900 rounded-full animate-spin"
                ></div>
                <span class="font-semibold">Loading</span>
            </div>`,
          showConfirmButton: false,
        })
      : successfull.value
      ? Swal.close()
      : null;
  });
</script>
<template>
  <form
    class="self-center text-center container max-w-fit shadow rounded py-5"
    @submit.prevent="submit"
  >
    <h1 class="text-red-900 text-xl font-bold pb-5">Login</h1>
    <div class="flex flex-col gap-3">
      <FormInput type="email" :required="true" label="Email" v-model="email" />
      <FormInput
        type="password"
        :required="true"
        label="Password"
        v-model="password"
      />

      <div class="flex w-full flex-wrap gap-x-5 gap-y-2">
        <button type="submit" class="bg-red-900 btn text-white p-3 grow">
          Login
        </button>
        <router-link to="/forgotten-password" class="text-red-900 btn grow">
          Forgotten Password?
        </router-link>
      </div>
      <div
        class="flex w-full flex-wrap gap-x-5 gap-y-2 items-center font-medium"
      >
        New Here?
        <router-link to="/register" class="text-white bg-slate-900 btn grow">
          Create An Account
        </router-link>
      </div>
    </div>
  </form>
</template>
