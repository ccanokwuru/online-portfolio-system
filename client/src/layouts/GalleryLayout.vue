<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <main>
        <header class="flex">
            <div>prolifolio</div>
            <nav>navs</nav>
            <button>signin</button>
        </header>
        <router-view />
        <footer></footer>
    </main>
</template>

<style scoped>
</style>
