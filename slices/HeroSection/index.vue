<template>
  <section
    :style="{ backgroundImage: 'url(' + slice.primary.image.url + ')'}"
    class="hero is-primary is-halfheight"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="mb-6 is-primary title">{{slice.primary.title}}</h1>
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
   {
  }
}
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
