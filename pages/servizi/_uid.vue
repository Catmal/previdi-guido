<template>
  <div>
    <div
      :style="{ 
      backgroundImage: 'url(' + document.background_image.url + '), linear-gradient(rgba(0,0,0,0.6)  20%, rgba(14,146,70,0.2) )',
      }"
      class="background py-6"
      style="position:relative"
    >
      <div class="container p-6">
        <prismic-rich-text :field="document.title" />
        <div class="card pt-6 mb-6" style="min-height: 100vh; background: rgba(255,255,255,0.85)">
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
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  transition: 'home',
  head () {
      return {
        title: this.document.meta_title,
        meta: [
          { hid: 'og-title', property: 'og:title', content: this.document.meta_description },
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
      
      // Returns data to be used in template
      return {
        document: page,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
   
}
</script>

<style scoped>
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
