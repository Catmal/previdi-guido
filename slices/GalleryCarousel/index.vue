<template>
  <section class="section container" style="background: rgba(255,255,255,0.95)">
    <b-modal v-model="isImageModalActive">
      <img style="max-height: 90vh;" v-if="currentImage" :src="currentImage.coverImage.url" />
    </b-modal>
    <h1 class="has-text-primary">{{slice.primary.Title}}</h1>
    <div class="columns is-multiline is-mobile">
      <div
        v-for="(item, i) in slice.items"
        :key="i"
        class="column is-half-mobile is-one-quarter-desktop is-one-quarter-fullhd is-clickable"
      >
        <div style="position: relative">
          <img
            class="rounded-borders"
            @click="currentImage = item, isImageModalActive = true"
            :src="item.coverImage.url"
          />
          <div
            class="p-4 rounded-borders"
            style="position: absolute; bottom: 5px; left: 0; width: 100%; background: rgba(255,255,255,0.95)"
          >
            <p class="has-text-black">{{item.name}}</p>
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


