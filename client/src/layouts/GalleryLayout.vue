<script lang="ts" setup>
// import { onMounted, ref } from 'vue'

</script>

<template>
    <div class="bg-white">
        <header
            class="fixed left-0 right-0 py-2 md:py-4 bg-white z-50 shadow-sm text-sm md:text-base"
        >
            <div class="flex container content-center justify-between gap-5">
                <router-link to="/" class="self-center">
                    <img src="../assets/logo.png" class="nav-logo" />
                </router-link>
                <nav
                    class="flex md:flex-grow gap-x-1 md:gap-x-5 justify-end content-center self-center md:font-semibold md:uppercase"
                >
                    <router-link to="/exhibitions/paintings" exact>Paintings</router-link>
                    <router-link to="/exhibitions/drawings" exact>Drawings</router-link>
                    <router-link to="/exhibitions/sculpture" exact>Sculpture</router-link>
                    <router-link to="/artists" exact>Artists</router-link>
                    <router-link to="/#">
                        <i class="bi bi-search"></i>
                    </router-link>
                    <router-link to="/#">
                        <i class="bi bi-cart"></i>
                    </router-link>
                </nav>
            </div>
        </header>

        <!-- router-view -->
        <router-view v-slot="{ Component }" class="pt-10 pb-5">
            <transition name="fade" class="duration-500">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style>
</style>
