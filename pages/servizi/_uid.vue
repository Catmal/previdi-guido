<template>
  <div>
    <div style="position:relative">
      <svg
        style="position: sticky; top: 100px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 200"
      >
        <path
          fill="#0e9246"
          fill-opacity="1"
          d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <div style=" margin-top:-28%">
        <div class="container p-4">
          <prismic-rich-text :field="document.title" />
          <div class="card pt-6" style="background: rgba(255,255,255,0.9)">
            <div
              v-if="document.content && document.content.length > 0 && document.content[0].text !== ''"
            >
              <div class="card-content has-text-centered">
                <prismic-rich-text :field="document.content" />
              </div>
            </div>
            <slice-zone type="service" :uid="$route.params.uid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  transition: 'home',
    components: {
        SliceZone
    },
    async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const page = (await $prismic.api.getByUID('service', params.uid)).data
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

<style   scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}
>>> h2 {
  margin-bottom: 2rem !important;
}
>>> h3 {
  margin-bottom: 2rem !important;
}
>>> ul {
  margin-bottom: 1rem !important;
  border: 1px solid #0e9246;
  padding: 1rem;
  border-radius: 4px;
}
>>> h4 {
  margin-bottom: 2rem !important;
}
</style>
