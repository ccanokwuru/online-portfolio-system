<script lang="ts" setup>
  import { ref, watch } from "vue";
  import Swal from "sweetalert2";
  import { api } from "../api";
  import FormInput from "./FormInput.vue";

  const successfull = ref(false);
  const loading = ref(false);
  const email = ref("");

  const submit = async () => {
    loading.value = true;
    const response = await fetch(`${api}/auth/forgotten-password`, {
      method: "post",
      body: JSON.stringify({
        email: email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loading.value = false;
    const json = await response.json();
    Swal.close();
    await Swal.fire({
      title: `${json.message.toString().toUpperCase()}`,
      text: `${json?.errors ?? ""}`,
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
    <h1 class="text-red-900 text-xl font-bold pb-5">Forgotten Password</h1>
    <div class="flex flex-col gap-3">
      <FormInput type="email" :required="true" label="Email" v-model="email" />

      <div class="flex w-full flex-wrap gap-x-5 gap-y-2">
        <button type="submit" class="bg-red-900 btn text-white p-3 grow">
          Submit
        </button>
      </div>
      <div
        class="flex w-full flex-wrap gap-x-5 gap-y-2 items-center font-medium"
      >
        <router-link to="/login" class="text-slate-900 grow">
          Back to Login
        </router-link>
      </div>
    </div>
  </form>
</template>
