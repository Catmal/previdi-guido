<template>
  <section class="card section container my-6" style="background: rgba(255,255,255,0.95)">
    <h1
      v-if="slice.primary.title"
      class="mb-6 has-text-primary has-text-centered"
    >{{slice.primary.title}}</h1>
    <p
      v-if="slice.primary.content[0]"
      class="mb-6 has-text-centered has-text-black"
    >{{slice.primary.content[0].text}}</p>

    <b-modal v-model="isImageModalActive">
      <img style="max-height: 90vh;" v-if="currentImage" :src="currentImage.image.url" />
    </b-modal>

    <div v-if="slice.items" class="columns is-multiline">
      <div v-for="(item, i) in slice.items" :key="i" class="column is-one-quarter is-clickable">
        <img
          v-if="item.image.url"
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
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}

img {
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
}
</style>
