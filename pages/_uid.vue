<template>
  <div class="container">
    <h1
      class="my-6 is-size-1 has-text-weight-bold is-uppercase"
    >{{ $prismic.asText(document.title) }}</h1>
    <p class="mt-6">{{ $prismic.asText(document.content) }}</p>
    <slice-zone type="page" :uid="$route.params.uid" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
    components: {
        SliceZone
    },
      transition: 'home',
    async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const page = (await $prismic.api.getByUID('page', params.uid)).data
      const services = await $prismic.api.query(
        $prismic.predicates.at("document.type", "service"),
        { orderings : '[my.service.date desc]' }
      )

      // Returns data to be used in template
      return {
        document: page,
                services: services.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
