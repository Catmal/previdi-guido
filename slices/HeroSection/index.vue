<template>
  <section
    :style="{ backgroundImage: 'url(' + slice.primary.image.url + ')'}"
    class="hero is-primary is-halfheight"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="mb-6">{{slice.primary.title}}</h2>
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

