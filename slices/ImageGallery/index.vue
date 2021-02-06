<template>
  <section class="card section container mt-4 mb-6" style="background: rgba(255,255,255,0.95)">
    <h2
      v-if="slice.primary.title"
      class="mb-6 has-text-primary has-text-centered"
    >{{slice.primary.title}}</h2>
    <p
      v-if="slice.primary.content[0]"
      class="mb-6 has-text-centered has-text-black"
    >{{slice.primary.content[0].text}}</p>

    <b-modal v-model="isImageModalActive">
      <img
        class="rounded-borders"
        style="max-height: 90vh;"
        v-if="currentImage"
        :src="currentImage.image.url"
      />
    </b-modal>

    <div v-if="slice.items" class="columns is-multiline">
      <div v-for="(item, i) in slice.items" :key="i" class="column is-one-quarter is-clickable">
        <img
          class="rounded-borders"
          v-if="item.image.thumb_400_350"
          @click="currentImage = item, isImageModalActive = true"
          :src="item.image.thumb_400_350.url"
        />
        <img
          v-else
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
