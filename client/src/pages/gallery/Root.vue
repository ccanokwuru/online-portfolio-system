<script lang="ts" setup>
import CardDefault from '../../components/CardDefault.vue'
</script>
<template>
    <section class="pt-20">
        <div class="container flex items-center content-center justify-between">
            <h2 class="header-text">Featured Paintings</h2>
            <router-link to="/exhibitions/paintings" class="text-red-900 text-3xl">
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <div class="scroll-hor">
            <div v-for="(n, index) in 9" :key="index" class="p-6 px-1 !min-w-[250px]">
                <CardDefault
                    class="bg-white card mx-3"
                    :open-in-blank="true"
                    :rounded-image="false"
                    :rounded="false"
                    header="Anokwuru Chisom"
                    description="Consectetur minim nostrud in eu."
                    href="/gallery"
                    image-url="https://i.pravatar.cc/"
                />
            </div>
        </div>
    </section>
    <section class="bg-gray-300 pt-6">
        <div class="container flex items-center content-center justify-between">
            <h2 class="header-text">Featured Drawings</h2>
            <router-link to="/exhibitions/paintings" class="text-red-900 text-3xl">
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <div class="scroll-hor">
            <div v-for="(n, index) in 9" :key="index" class="p-6 px-1 !min-w-[250px]">
                <CardDefault
                    class="bg-white card mx-3"
                    :open-in-blank="true"
                    :rounded-image="false"
                    :rounded="false"
                    header="Anokwuru Chisom"
                    description="Consectetur minim nostrud in eu."
                    href="/gallery"
                    image-url="https://i.pravatar.cc/"
                />
            </div>
        </div>
    </section>
    <section class="pt-6">
        <div class="container flex items-center content-center justify-between">
            <h2 class="header-text">Featured Sculptures</h2>
            <router-link to="/exhibitions/paintings" class="text-red-900 text-3xl">
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <div class="scroll-hor">
            <div v-for="(n, index) in 9" :key="index" class="p-6 px-1 !min-w-[250px]">
                <CardDefault
                    class="bg-white card mx-3"
                    :open-in-blank="true"
                    :rounded-image="false"
                    :rounded="false"
                    header="Anokwuru Chisom"
                    description="Consectetur minim nostrud in eu."
                    href="/gallery"
                    image-url="https://i.pravatar.cc/"
                />
            </div>
        </div>
    </section>
</template>