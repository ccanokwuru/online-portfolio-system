<script lang="ts" setup>
// import { onMounted, ref } from 'vue'

import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const studioName = computed(() => router.currentRoute.value.params.studioName)

</script>

<template>
    <div class="bg-slate-700 text-white">
        <header class="fixed top-0 w-full py-2 z-50 bg-slate-900 text-sm md:text-base">
            <div class="flex container content-center justify-between gap-5 text-white">
                <router-link :to="'/studio/' + studioName + '/'" class="self-center">
                    <!-- <img src="../assets/logo.png" class="nav-logo" /> -->
                    <div
                        class="border-t-purple-800 border-r-purple-800 border-0 w-[25px] h-[25px] md:h-[50px] md:w-[50px] relative bg-slate-900 border-t-2 border-r-2 md:border-t-4 md:border-r-4 capitalize"
                    >
                        <h1
                            class="text-center md:leading-3 leading-[.09rem] text-white text-2xl md:text-5xl p-2 md:py-4 m-0 font-semibold"
                        >{{ studioName[0] }}</h1>
                    </div>
                </router-link>
                <nav
                    class="flex md:flex-grow space-x-2 md:space-x-12 justify-end content-center self-center"
                >
                    <router-link :to="'/studio/' + studioName + '/'" exact>Home</router-link>
                    <router-link :to="'/studio/' + studioName + '/about'" exact>About</router-link>
                    <router-link :to="'/studio/' + studioName + '/projects'" exact>Projects</router-link>
                    <router-link :to="'/studio/' + studioName + '/contact'" exact>Contact me</router-link>
                </nav>
            </div>
        </header>

        <!-- router-view -->
        <router-view v-slot="{ Component }">
            <transition name="fade" class="duration-500">
                <component :is="Component" />
            </transition>
        </router-view>

        <footer class="py-4 text-white bg-slate-900 text-xl">
            <div class="container flex content-center justify-between">
                &copy; Prolifolio
                <div class="gap-x-2 flex pr-4">
                    <a href="#">
                        <i class="bi bi-youtube"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
</style>
