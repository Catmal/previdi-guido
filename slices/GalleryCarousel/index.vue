<template>
  <section class="container">
    <b-modal v-model="isImageModalActive">
      <img
        style="max-height: 90vh;"
        v-if="currentImage && Object.keys(currentImage.secondImage).length === 0 "
        :src="currentImage.firstImage.url"
      />
      <b-carousel
        v-if="currentImage.secondImage && Object.keys(currentImage.secondImage).length > 0"
        class="carousel"
        :indicator-inside="true"
      >
        <b-carousel-item style="height: 100%" :key="i">
          <span class="rounded-borders">
            <img style="max-height: 85vh;" v-if="currentImage" :src="currentImage.firstImage.url" />
          </span>
        </b-carousel-item>
        <b-carousel-item style="height: 100%" :key="i">
          <span class="rounded-borders">
            <img
              style="max-height: 90vh;"
              v-if="currentImage.secondImage"
              :src="currentImage.secondImage.url"
            />
          </span>
        </b-carousel-item>
      </b-carousel>
    </b-modal>
    <div class="columns is-multiline is-mobile">
      <div
        v-for="(item, i) in slice.items"
        :key="i"
        class="column is-full-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-fullhd is-clickable"
      >
        <div style="position: relative">
          <b-image
            height="350px"
            width="400px"
            v-if="item.firstImage.thumbb"
            class="rounded-borders-bottom"
            @click.native="currentImage = item, isImageModalActive = true"
            :src="item.firstImage.thumbb.url"
            webp-fallback=".jpg"
          >
            <template #placeholder>
              <b-skeleton class="skeleton-placeholder" height="100%"></b-skeleton>
            </template>
          </b-image>
          <b-image
            v-else
            height="350px"
            width="400px"
            webp-fallback=".jpg"
            class="rounded-borders"
            @click.native="currentImage = item, isImageModalActive = true"
            :src="item.firstImage.url"
          >
            <template #placeholder>
              <b-skeleton class="skeleton-placeholder" height="100%"></b-skeleton>
            </template>
          </b-image>
          <div
            class="p-4 rounded-borders-bottom"
            style="position: absolute; bottom: 0; left: 0; width: 100%; height: auto; background: rgba(255,255,255,0.95)"
          >
            <h5>{{item.firstImage.alt}}</h5>
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

<style scoped>
.rounded-borders-bottom {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
}
</style>


