<script>
import { ref } from 'vue'
import RowList from 'src/components/RowList.vue'

export default {
  components: {
    RowList
  },
  setup() {

    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',

    }
  }
}
</script>
<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="flex flex-center row">
      <q-input
        rounded
        outlined
        v-model="text"
        dense
        class="shadow-2 col-md-6 col-12"
        style="border-radius: 50px;"
        bg-color="white"
      >
        <template v-slot:prepend>
          <q-icon name="bi-search" size=".9rem" class="q-ml-5" />
        </template>
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="bi-x" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>
    </q-form>

    <div class="q-pt-lg">
      <div class="row flex-between q-pa-md">
        <div class="col-md-6 col-12 q-px-sm">
          <strong class="text-subtitle2">Trendings</strong>
          <div>
            <q-carousel
              v-model="slide"
              swipeable
              animated
              navigation-position="bottom"
              navigation
              padding
              height="300px"
              class="bg-purple text-white rounded-borders"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">{{ lorem }}</div>
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">{{ lorem }}</div>
              </q-carousel-slide>
              <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">{{ lorem }}</div>
              </q-carousel-slide>
              <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">{{ lorem }}</div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="row q-px-sm">
            <div class="col-md-4 col-sm-6 q-px-sm">
              <strong class="text-subtitle2">Artist of the week</strong>
              <div class="bg-blue-grey-2 rounded-borders">
                <q-img
                  src="~assets/defaultCreator.png"
                  spinner-color="primary"
                  spinner-size="82px"
                  height="300px"
                  class="rounded-borders"
                />
              </div>
            </div>
            <div class="col-md-8 col-sm-6 q-px-sm q-pt-lg row">
              <small class="text-subtitle2 col-12">//Album</small>
              <h6 class="text-h4 text-weight-bold q-my-none q-pb-sm col-12">Always Authentic</h6>
              <p
                class="text-caption col-md-10 col-12"
              >Velit voluptate adipisicing quis velit eiusmod nulla nostrud magna magna minim minim consectetur.</p>

              <div class="q-pt-sm col-12">
                <RowList v-for="(n, i) in 5" :key="i" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-pa-md">
        <div class="col-md-6 col-12 q-px-sm">
          <strong class="text-subtitle2">More News</strong>
        </div>
        <div class="col-md-6 col-12 q-px-sm">
          <strong class="text-subtitle2">Popular Artist</strong>
          <div>
            <q-avatar
              v-for="(n, i) in 6"
              :key="i"
              size="100px"
              font-size="52px"
              color="teal"
              text-color="white"
              icon="directions"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
