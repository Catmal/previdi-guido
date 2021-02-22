<template>
  <div>
    <div
      :style="{ 
      backgroundImage: 'url(' + document.background_image.url + '), linear-gradient(rgba(0,0,0,0.6)  20%, rgba(14,146,70,0.2) )',
      backgroundBlendMode: overlay,
      backgroundAttachment: fixed,
      backgrounPosition: center,
      backgroundRepeat: no-repeat,
      backgroundSize: cover,
     

      }"
      class="background"
      style="position:relative"
    >
      <transition name="bkg">
        <svg
          v-if="show"
          style="position: sticky; top: 94px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 200"
        >
          <path
            fill="#0e9246"
            fill-opacity="0"
            d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </transition>
      <div style=" margin-top:-28%">
        <div class="container p-4">
          <prismic-rich-text :field="document.title" />
          <div class="card pt-6" style="min-height: 100vh; background: rgba(255,255,255,0.85)">
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
  head () {
    return {
      title: this.document.data.meta_title,
      meta: [
        { hid: 'og-title', property: 'og:title', content: document.data.meta_description },
        // other meta
      ]
    }
  },
  mounted() {
    this.show = true
  },
  data () {
    return {
      show: false
    }
  },
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
  margin-bottom: 40px !important;
  color: #0e9246;
  font-weight: 700 !important;
}
>>> h3 {
  margin-top: 2rem !important;
  margin-bottom: 40px !important;
  color: #0e9246;
}
>>> h4 {
  margin-bottom: 4rem !important;
}
>>> ul {
  background: #dee5e5;
  margin-bottom: 1.5rem !important;
  border: 1px solid #0e9246;
  padding: 1rem;
  border-radius: 4px;
}
>>> h4 {
  margin-bottom: 2rem !important;
}

.background {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background-blend-mode: overlay;
}
</style>
