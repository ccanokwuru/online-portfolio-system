<script setup lang="ts">
// import { ref } from 'vue'
import CardDefault from '../components/CardDefault.vue'

</script>
<template>
    <main>
        <section class="w-screen bg-[#BBC1CF] hero">
            <div class="container grid grid-cols-2">
                <div class="h-full column align-middle flex flex-1 relative">
                    <div class="self-center flex-1 pl-2">
                        <h1 class="my-1 text-5xl font-bold">Creativity</h1>
                        <h1 class="text-5xl font-bold">& CREATIVES</h1>
                        <p class="text-lg">Create Your Portfolio in Minutes</p>
                    </div>

                    <a
                        href="#"
                        class="btn bg-opacity-10 bg-slate-900 my-5 absolute bottom-9 font-semibold text-white text-4xl p-3"
                    >Lets Start The Journey</a>
                </div>
                <div>
                    <img src="../assets/head.png" alt="creative image" />
                </div>
            </div>
        </section>
        <section class="container my-7 relative">
            <h2 class="text-2xl font-bold my-3 px-2">Exhibitions & Auctions</h2>
            <div class="flex flex-wrap justify-between">
                <CardDefault
                    header="Ancokwuru Chisom"
                    description="Consectetur minim nostrud in eu."
                    v-for="(n, index) in 3"
                    href="/gallery"
                    :key="index"
                />
            </div>
            <a
                href="#"
                class="font-semibold absolute bottom-4 right-2 hover:underline-offset-1 hover:underline"
            >
                see more
                <span class="text-red-900">
                    <i class="bi bi-chevron-right"></i>
                </span>
            </a>
        </section>
        <section class="container my-7 relative">
            <h2 class="text-2xl font-bold my-3 px-2">Talents Onboard</h2>
            <div class="flex flex-wrap justify-between">
                <CardDefault
                    header="Ancokwuru Chisom"
                    description="Consectetur minim nostrud in eu."
                    v-for="(n, index) in 3"
                    herf="/studio/someOne"
                    :key="index"
                />
            </div>
            <a
                href="#"
                class="font-semibold absolute bottom-4 right-2 hover:underline-offset-1 hover:underline"
            >
                see more
                <span class="text-red-900">
                    <i class="bi bi-chevron-right"></i>
                </span>
            </a>
        </section>
    </main>
</template>

<style scoped>
.hero {
    background: linear-gradient(180deg, #bbc1cf 12.96%, #e5e9ec 65.89%);
}
</style>