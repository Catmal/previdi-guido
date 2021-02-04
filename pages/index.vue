<template>
  <section class="hero">
    <slice-zone type="page" uid="home" />
  </section>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  name: 'HomePage',
  components: {
    SliceZone
  },
   async asyncData({ $prismic, error }) {
    try{
      // Query to get post content
      const services = await $prismic.api.query(
        $prismic.predicates.at("document.type", "service"),
        { orderings : '[my.service.date desc]' }
      )
      // Returns data to be used in template
      return {
        services: services.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
