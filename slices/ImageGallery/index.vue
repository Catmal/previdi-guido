<template>
  <section class="section container">
    <h2
      v-if="slice.primary.title"
      class="has-text-primary has-text-centered"
    >{{slice.primary.title}}</h2>
    <p
      v-if="slice.primary.content[0]"
      class="has-text-centered has-text-black"
    >{{slice.primary.content[0].text}}</p>

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
        class="column is-half-mobile is-half-tablet is-one-third-desktop is-one-quarter-fullhd is-clickable"
      >
        <img
          class="rounded-borders"
          v-if="item.image.thumb_400_350"
          @click="currentImage = item, isImageModalActive = true"
          :src="item.image.thumb_400_350.url"
        />
        <img
          v-if="!item.image.thumb_400_350 && item.image.thumb"
          class="rounded-borders"
          @click="currentImage = item, isImageModalActive = true"
          :src="item.image.thumb.url"
        />
      </div>
    </div>
    <b-button
      v-if="slice.primary.link.url"
      tag="nuxt-link"
      :to="slice.primary.link.url"
      type="is-primary"
    >Vedi Tutti</b-button>
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
</style>
