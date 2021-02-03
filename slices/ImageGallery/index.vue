<template>
  <section class="section container my-6">
    <h1 class="mb-6 title">{{slice.primary.title}}</h1>

    <b-modal v-model="isImageModalActive">
      <img v-if="currentImage" :src="currentImage.image.url" />
    </b-modal>
    <div class="columns">
      <div v-for="(item, i) in slice.items" :key="i" class="column has-cursor-pointer">
        <img
          class="has-pointer-cursor"
          @click="currentImage = item, isImageModalActive = true"
          :src="item.image.url"
        />
      </div>
    </div>
    <b-button
      v-if="slice.primary.link"
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
