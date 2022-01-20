<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
    <div>
        <header class="shadow-sm fixed w-screen py-3 bg-white text-xl">
            <div class="flex container content-center justify-between">
                <router-link to="/">
                    <img src="../assets/logo.png" class="nav-logo" />
                </router-link>
                <nav class="flex flex-grow gap-3 justify-center content-center self-center">
                    <router-link to="/">Home</router-link>
                    <router-link to="/exhibitions">Exhibitions</router-link>
                    <router-link to="/news">News</router-link>
                    <router-link to="/artists">Artists</router-link>
                </nav>
                <button class="btn text-xl text-red-900">Signin</button>
            </div>
        </header>
        <div class="pt-[75px]">
            <router-view />
        </div>
        <footer class="py-4 text-white bg-slate-900 text-xl">
            <div class="container flex content-center justify-between">
                &copy; Prolifolio
                <div class="gap-x-2 flex pr-4">
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-twitter"></i>
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
