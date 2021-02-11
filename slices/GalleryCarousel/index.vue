<template>
  <section class="container">
    <b-modal v-model="isImageModalActive">
      <img style="max-height: 90vh;" v-if="currentImage" :src="currentImage.firstImage.url" />
    </b-modal>
    <div class="columns is-multiline is-mobile">
      <div
        v-for="(item, i) in slice.items"
        :key="i"
        class="column is-half-mobile is-one-quarter-desktop is-one-quarter-fullhd is-clickable"
      >
        <div style="position: relative">
          <img
            v-if="item.firstImage.thumbb"
            class="rounded-borders"
            @click="currentImage = item, isImageModalActive = true"
            :src="item.firstImage.thumbb.url"
          />
          <img
            v-else
            class="rounded-borders"
            @click="currentImage = item, isImageModalActive = true"
            :src="item.firstImage.url"
          />
          <div
            class="p-4 rounded-borders"
            style="position: absolute; bottom: 5px; left: 0; width: 100%; background: rgba(255,255,255,0.95)"
          >
            <p class="has-text-black">{{item.firstImage.alt}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
   data () {
    return {
    currentImage: false,
    isImageModalActive: false,
    }
  }
}
</script>


