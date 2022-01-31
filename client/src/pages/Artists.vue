<script setup lang="ts">
// import { ref } from 'vue'
import CardDefault from '../components/CardDefault.vue'

</script>
<template>
    <main>
        <section class="pt-12">
            <div class="container relative">
                <h2 class="header-text">See All Artists Here</h2>
                <div
                    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center content-center"
                >
                    <div v-for="(n, index) in 50" :key="index" class="p-6">
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