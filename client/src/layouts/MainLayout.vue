<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
    <main>
        <header>
            <div flex container mx-auto>
                <router-link to="/">
                    <img src="../assets/logo.png" class="nav-logo" />
                </router-link>
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/exhibitions">Exhibitions</router-link>
                    <router-link to="/news">News</router-link>
                    <router-link to="/artists">Artists</router-link>
                </nav>
                <button>signin</button>
            </div>
        </header>
        <router-view />
        <footer>
            <div>
                &copy; Prolifolio
                <div>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-twitter"></i>
                </div>
            </div>
        </footer>
    </main>
</template>

<style>
.nav-logo {
    width: 50px;
    height: auto;
}
</style>
