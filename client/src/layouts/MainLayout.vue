<script lang="ts" setup>
// import { ref } from 'vue'

</script>

<template>
    <div>
        <header class="fixed w-screen py-2 z-50">
            <div class="flex container content-center justify-between">
                <router-link to="/" class="self-center">
                    <img src="../assets/logo.png" class="nav-logo" />
                </router-link>
                <nav
                    class="flex flex-grow gap-6 justify-center content-center self-center font-semibold"
                >
                    <router-link to="/">Home</router-link>
                    <router-link to="/exhibitions">Exhibitions</router-link>
                    <router-link to="/news">News</router-link>
                    <router-link to="/artists">Artists</router-link>
                </nav>
                <button
                    class="btn font-bold text-red-900 self-center rounded-full py-2 ease-in-out duration-500"
                >SIGNIN</button>
            </div>
        </header>

        <!-- router-view -->
        <router-view v-slot="{ Component }" class="min-h-screen">
            <transition name="fade" class="duration-500">
                <component :is="Component" />
            </transition>
        </router-view>

        <footer class="py-4 text-white bg-slate-900 text-xl w-screen">
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
.nav-logo {
    width: 50px;
    height: auto;
}

</style>
