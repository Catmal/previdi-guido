<template>
  <section class="hero">
    <h1 class="has-text-primary">SERVIZI</h1>
    <slice-zone type="home_page" queryType="single" />
    <section class="container my-6" style="background: rgba(255,255,255,0.95)">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="service in services" :key="service.id">
          <div style="position: relative">
            <img class="rounded-borders" :src="service.data.home_image.url" />
            <div
              class="p-4 rounded-borders"
              style="position: absolute; bottom: 5px; left: 0; width: 100%; background: rgba(255,255,255,0.95)"
            >
              <p class="has-text-black">{{service.data.title[0].text}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
