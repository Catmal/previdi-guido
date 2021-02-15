<template>
  <section
    :style="{ backgroundImage: 'url(' + slice.primary.image.url + '), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8))'}"
    class="hero  is-halfheight"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="mb-6 has-text-white">{{slice.primary.title}}</h2>
        <b-button
          v-if="slice.primary.link"
          tag="nuxt-link"
          :to="slice.primary.link.url"
          type="is-primary"
        >{{slice.primary.buttonText}}</b-button>
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
}
</script>

<style scoped>


.hero {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  background-blend-mode: overlay;

}
</style>