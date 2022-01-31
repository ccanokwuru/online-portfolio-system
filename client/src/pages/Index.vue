<script setup lang="ts">
// import { ref } from 'vue'
import CardDefault from '../components/CardDefault.vue'

</script>
<template>
    <main>
        <section class="bg-[#BBC1CF] hero">
            <div class="container flex md:flex-wrap h-full flex-wrap-reverse relative">
                <div
                    class="self-center flex-col w-full md:w-6/12 text-center md:text-left relative"
                >
                    <div
                        class="text-[10rem] tracking-[0.15em] uppercase font-bold text-red-900 opacity-[0.09] absolute left-[-9rem] hidden md:flex top-0 bottom-0"
                    >
                        <div class="self-center text-justify w-8/12s">
                            <h2 class="!m-0 p-0">see my</h2>
                            <h2 class="!m-0 p-0">works</h2>
                        </div>
                    </div>

                    <div class="self-center flex-grow">
                        <h1 class="lg:text-5xl md:text-3xl text-lg font-bold my-0">Creativity</h1>
                        <h1 class="lg:text-5xl md:text-3xl text-lg font-bold my-0">& CREATIVES</h1>
                        <p class="lg:text-lg">Create Your Portfolio in Minutes</p>
                    </div>

                    <div class="my-10">
                        <router-link
                            to="#"
                            class="btn bg-opacity-20 bg-slate-900 my-6 md:font-semibold text-white lg:text-4xl md:text-2xl p-2 bg-blur"
                        >Lets Start The Journey</router-link>
                    </div>
                </div>
                <div class="text-center w-full md:w-6/12">
                    <div class="sm:left-0">
                        <img src="../assets/head.png" alt="creative image" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container my-7 relative">
                <h2 class="header-text">Exhibitions & Auctions</h2>
                <div
                    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center content-center"
                >
                    <div v-for="(n, index) in 4" :key="index" class="p-6">
                        <CardDefault
                            class="bg-gray-100 card"
                            :open-in-blank="true"
                            :rounded-image="true"
                            :rounded="true"
                            header="Anokwuru Chisom"
                            description="Consectetur minim nostrud in eu."
                            href="/gallery"
                            image-url="https://i.pravatar.cc/"
                        />
                    </div>
                </div>
                <p class="text-right">
                    <a href="#" class="font-semibold hover:underline-offset-1 hover:underline">
                        see more
                        <span class="text-red-900">
                            <i class="bi bi-chevron-right"></i>
                        </span>
                    </a>
                </p>
            </div>
        </section>
        <section>
            <div class="container mt-7 pb-7 relative">
                <h2 class="header-text">Talents Onboard</h2>
                <div
                    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center content-center"
                >
                    <div v-for="(n, index) in 4" :key="index" class="p-6">
                        <CardDefault
                            class="bg-gray-100 card"
                            :open-in-blank="true"
                            :rounded-image="true"
                            :rounded="true"
                            header="Anokwuru Chisom"
                            description="Consectetur minim nostrud in eu."
                            href="/studio/someOne"
                            image-url="https://i.pravatar.cc/"
                        />
                    </div>
                </div>

                <p class="text-right">
                    <a href="#" class="font-semibold hover:underline-offset-1 hover:underline">
                        see more
                        <span class="text-red-900">
                            <i class="bi bi-chevron-right"></i>
                        </span>
                    </a>
                </p>
            </div>
        </section>
    </main>
</template>

<style scoped>
.hero {
    background: linear-gradient(180deg, #bbc1cf 12.96%, #e5e9ec 65.89%);
    @apply min-h-[500px];
}
</style>