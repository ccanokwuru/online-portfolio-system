<script lang="ts" setup>
// import { onMounted, ref } from 'vue'

</script>

<template>
    <div>
        <header
            class="fixed w-screen py-2 z-50 bg-opacity-10 bg-slate-900 bg-blur text-sm md:text-base"
        >
            <div class="flex container content-center justify-between gap-5">
                <router-link to="/" class="self-center">
                    <img src="../assets/logo.png" class="nav-logo" />
                </router-link>
                <nav
                    class="flex md:flex-grow gap-x-2 md:gap-x-5 justify-center content-center self-center md:font-semibold"
                >
                    <router-link to="/" exact>Home</router-link>
                    <router-link to="/exhibitions" exact>Exhibitions</router-link>
                    <router-link to="/news" exact>News</router-link>
                    <router-link to="/artists" exact>Artists</router-link>
                </nav>
                <router-link
                    to="#"
                    class="font-semibold md:font-bold text-red-900 self-center md:uppercase"
                >Signin</router-link>
            </div>
        </header>

        <!-- router-view -->
        <router-view v-slot="{ Component }" class="bg-gray-100">
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
