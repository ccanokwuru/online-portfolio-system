<script lang="ts" setup>
  import { Ref, ref, watch } from "vue";
  import { RouterLink, useRouter } from "vue-router";
  import Swal from "sweetalert2";
  import { api } from "../api";
  import FormInput from "./FormInput.vue";

  const router = useRouter();

  const successfull = ref(false);
  const loading = ref(false);
  const email = ref("");
  const password = ref("");
  const last_name = ref("");
  const other_name = ref("");
  const display_name = ref("");
  const first_name = ref("");
  const confirm_password = ref("");

  const submit = async () => {
    loading.value = true;
    const response = await fetch(`${api}auth/register`);
    loading.value = false;
    if (response.status === 201) {
      successfull.value = true;
      return router.push("/");
    }
    const json = await response.json();
    Swal.close();
    await Swal.fire({
      title: `${json.message}`,
      text: `${json.errors}`,
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
    class="self-center text-center container max-w-screen-md shadow rounded py-5"
    @submit.prevent="submit"
  >
    <h1 class="text-red-900 text-xl font-bold pb-5">Register</h1>
    <div class="flex flex-col gap-3 w-full">
      <div class="flex flex-wrap gap-3">
        <div class="grow sm:max-w-[0.8/2]">
          <FormInput
            type="email"
            :required="true"
            label="Email"
            v-model="email"
          />
        </div>
        <div class="grow sm:max-w-[0.8/2]">
          <FormInput
            :required="true"
            label="Display Name"
            v-model="display_name"
          />
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <div class="grow sm:max-w-[0.8/3]">
          <FormInput :required="true" label="First Name" v-model="first_name" />
        </div>
        <div class="grow sm:max-w-[0.8/3]">
          <FormInput :required="true" label="Last Name" v-model="last_name" />
        </div>
        <div class="grow sm:max-w-[0.8/3]">
          <FormInput label="Other Name" v-model="other_name" />
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <div class="grow sm:max-w-[0.8/2]">
          <FormInput
            type="password"
            :required="true"
            label="Password"
            v-model="password"
          />
        </div>
        <div class="grow sm:max-w-[0.8/2]">
          <FormInput
            type="password"
            :required="true"
            label="Confrim Password"
            v-model="confirm_password"
          />
        </div>
      </div>

      <div class="flex w-full flex-wrap gap-x-5 gap-y-2 justify-center">
        <button
          type="submit"
          class="bg-red-900 btn text-white p-3 grow max-w-sm"
        >
          Register
        </button>
      </div>
      <div
        class="flex w-full flex-wrap gap-x-5 gap-y-2 items-center font-medium max-w-sm mx-auto"
      >
        Have An Account?
        <router-link to="/register" class="text-white bg-slate-900 btn grow">
          Login
        </router-link>
      </div>
    </div>
  </form>
</template>
