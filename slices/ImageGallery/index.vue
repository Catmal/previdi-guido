<template>
  <section class="section container">
    <h2
      v-if="slice.primary.title"
      class="has-text-primary has-text-centered mb-6"
    >{{slice.primary.title}}</h2>
    <p v-if="slice.primary.content[0]" class="has-text-centered has-text-black mb-6">
      <prismic-rich-text :field="slice.primary.content" />
    </p>

    <b-modal v-model="isImageModalActive">
      <img
        class="rounded-borders"
        style="max-height: 90vh;"
        v-if="currentImage"
        :src="currentImage.image.url"
      />
    </b-modal>

    <div class="columns is-multiline is-mobile">
      <div
        v-for="(item, i) in slice.items"
        :key="i"
        class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-fullhd is-clickable"
      >
        <div style="position: relative">
          <b-image
            loading="lazy"
            webp-fallback=".jpg"
            class="rounded-borders"
            v-if="item.image.thumb_400_350"
            @click.native="currentImage = item, isImageModalActive = true"
            :src="item.image.thumb_400_350.url"
            width="400px"
            height="350px"
          >
            <template #placeholder>
              <b-skeleton class="skeleton-placeholder" height="100%"></b-skeleton>
            </template>
          </b-image>

          <b-image
            width="400"
            height="350"
            v-if="!item.image.thumb_400_350 && item.image.thumb"
            class="rounded-borders"
            @click.native="currentImage = item, isImageModalActive = true"
            :src="item.image.thumb.url"
          />
          <div
            v-if="item.image.alt && (item.image.alt.includes('prima') || item.image.alt.includes('dopo'))"
            class="p-4 rounded-borders"
            style="position: absolute; bottom: -2px; left: 0; width: 100%; background: rgba(255,255,255,0.95)"
          >
            <h5 style="text-transform: uppercase">{{item.image.alt}}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <b-button
        is-medium
        v-if="slice.primary.link.url"
        tag="nuxt-link"
        :to="slice.primary.link.url"
        type="is-primary"
      >Vedi Tutti</b-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ImageGallery",
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

<style lang="scss"  scoped>
.title {
  margin-bottom: 2em;
}

.b-skeleton {
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
