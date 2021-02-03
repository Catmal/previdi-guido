<template>
  <section class="section container my-6">
    <h1 class="mb-6 title">{{slice.primary.title}}</h1>

    <b-modal v-model="isImageModalActive">
      <img style="max-height: 90vh;" v-if="currentImage" :src="currentImage.image.url" />
    </b-modal>
    <div class="columns is-multiline">
      <div v-for="(item, i) in slice.items" :key="i" class="column is-one-quarter is-clickable">
        <img @click="currentImage = item, isImageModalActive = true" :src="item.image.url" />
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

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
