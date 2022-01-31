<script lang="ts" setup>
</script>
<template>
    <header class="fixed w-screen py-2 z-50 bg-blur shadow-md text-sm md:text-base">
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
    <div class="w-screen h-screen flex bg-gray-200 content-center">
        <div class="self-center text-center container">
            <h1 class="text-3xl text-stale-900 my-4 font-bold">
                Ooops!!
                <br />Not Reachable
            </h1>
            <router-link
                to="/"
                class="text-white bg-red-900 hover:bg-slate-900 animate-bounce duration-300 btn"
            >Back Home</router-link>
        </div>
    </div>
    <footer class="py-4 text-white bg-slate-900 text-xl fixed bottom-0 w-screen">
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
</template>