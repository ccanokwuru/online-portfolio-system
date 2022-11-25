<script setup lang="ts">
  import Swal from "sweetalert2";
  import { onMounted, ref } from "vue";
  import { api } from "../../api";
  import CardDefault from "../../components/CardDefault.vue";
  import FormInput from "../../components/FormInput.vue";
  import SummaryBoxComponent from "../../components/SummaryBoxComponent.vue";
  import { userStore } from "../../store/user";
  const topArtist = ref();
  const topWork = ref();
  const profile = ref();

  const loading = ref(false);
  const email = ref("");
  const last_name = ref("");
  const other_name = ref();
  const display_name = ref();
  const first_name = ref("");
  const avatar = ref("");

  const submit = async () => {
    loading.value = true;
    const response = await fetch(`${api}/user/update-profile`, {
      method: "put",
      body: JSON.stringify({
        email: email.value,
        display_name: display_name.value,
        first_name: first_name.value,
        last_name: last_name.value,
        other_name: other_name.value,
        avatar: avatar.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });
    loading.value = false;
    const json = await response.json();
    Swal.close();
    await Swal.fire({
      title: `${json.message}`,
      text: `${json.errors ?? ""}`,
      showConfirmButton: false,
    });
  };

  const upload = async (e: Event) => {
    // @ts-ignore
    const file = e.target?.files[0];
    const form = new FormData();
    if (file) {
      form.append("avatar", file);

      const response = await fetch(`${api}/resource/upload-avatar`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${userStore().authToken}`,
          Accept: "*/*",
        },
        body: form,
      });

      if (!response.ok) return;
      const json = await response.json();
      avatar.value = json?.url;
    }
  };

  onMounted(async () => {
    const artistData = await fetch(`${api}/artist/top-artist`, {
      headers: {
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });
    const artistDataJson = artistData.ok ? await artistData.json() : undefined;
    topArtist.value = artistDataJson?.artist;

    const workData = await fetch(`${api}/work/top-work`, {
      headers: {
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });
    const workDataJson = workData.ok ? await workData.json() : undefined;
    topWork.value = workDataJson?.work;

    const profileData = await fetch(`${api}/user`, {
      headers: {
        Authorization: `Bearer ${userStore().authToken}`,
      },
    });

    const profileDataJson = profileData.ok
      ? await profileData.json()
      : undefined;
    profile.value = profileDataJson?.profile;
    email.value = profile.value?.user?.email;
    first_name.value = profile.value?.first_name;
    last_name.value = profile.value?.last_name;
    display_name.value = profile.value.display_name;
    other_name.value = profile.value?.other_name;
    avatar.value = profile.value?.avatar;
  });
</script>
<template>
  <div class="container max-w-screen-xl py-10 flex flex-col gap-10">
    <main class="flex flex-wrap md:flex-nowrap gap-10 relative">
      <div class="grow md:min-w-[0.6/2] md:max-w-[200px] gap-10">
        <h4 class="font-semibold text-lg pb-10">Profile</h4>
        <div
          class="w-full flex flex-col gap-1 justify-center items-center text-center pb-5"
        >
          <div
            class="w-[150px] h-[150px] overflow-hidden flex items-center justify-center rounded-full"
          >
            <input
              type="file"
              id="avatar-img"
              hidden
              @change="upload"
              ref="rawFile"
            />
            <label for="avatar-img" class="cursor-pointer self-center">
              <img :src="avatar" class="w-full" />
            </label>
          </div>
          <span class="font-[200]">@{{ display_name }}</span>
        </div>

        <form
          @submit.prevent="submit"
          class="flex flex-wrap gap-1 gap-x-3 w-full"
        >
          <div class="grow w-[0.8/2] md:w-full">
            <FormInput
              type="email"
              :required="true"
              label="Email"
              v-model="email"
              :small="true"
            />
          </div>
          <div class="grow w-[0.8/2] md:w-full">
            <FormInput
              :required="true"
              label="Display Name"
              v-model="display_name"
              :small="true"
            />
          </div>

          <div class="grow w-[0.8/3] md:w-full">
            <FormInput
              :required="true"
              label="First Name"
              v-model="first_name"
              :small="true"
            />
          </div>

          <div class="grow w-[0.8/3] md:w-full">
            <FormInput
              :required="true"
              label="Last Name"
              v-model="last_name"
              :small="true"
            />
          </div>

          <div class="grow w-[0.8/3] md:w-full">
            <FormInput label="Other Name" v-model="other_name" :small="true" />
          </div>

          <div class="flex w-full flex-wrap gap-x-5 gap-y-2 justify-center">
            <button
              type="submit"
              class="bg-slate-900 btn text-white p-2 hover:bg-red-900 transition-all duration-300 grow max-w-sm"
            >
              Update
            </button>
          </div>
        </form>
      </div>

      <div class="grow w-full md:min-w-[0.8/2] gap-20">
        <section>
          <h4 class="font-semibold text-lg pb-10">Tops</h4>
          <div
            class="grid gap-5 md:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
          >
            <div class="w-[0.8/2]">
              <CardDefault
                title="Top Artist"
                header="Top Artist"
                rounded
                roundedImage
                :description="`@${topArtist?.profile?.display_name}`"
                :imageUrl="topArtist?.profile?.avatar"
                :href="
                  '/studio/' + topArtist?.profile?.display_name.toLowerCase()
                "
              />
            </div>

            <div class="w-[0.8/2]">
              <CardDefault
                title="Top Art"
                header="Top Art"
                rounded
                roundedImage
                :description="`${topWork?.description}`"
                :imageUrl="topWork?.files?.images[0]"
                :href="`/exhibitions/item/${topWork?.id}/${topWork?.title}`"
              />
            </div>
          </div>
        </section>

        <section>
          <h4 class="font-semibold text-lg py-10">Summary</h4>
          <div class="flex gap-5 md:gap-10 flex-wrap">
            <SummaryBoxComponent
              label="articles"
              class="grow md:w-[0.8/4]"
              :value="profile?._count?.posts"
            />
            <SummaryBoxComponent
              label="works"
              class="grow md:w-[0.8/4]"
              :value="profile?._count?.works"
            />
            <SummaryBoxComponent
              label="favourites"
              class="grow md:w-[0.8/4]"
              :value="profile?._count?.favourites"
            />
            <SummaryBoxComponent
              label="orders"
              class="grow md:w-[0.8/4]"
              :value="profile?._count?.orders"
            />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<style></style>
