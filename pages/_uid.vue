<template>
  <div>
    <div
      :style="{ 
      backgroundImage: 'url(' + document.background.url + '), linear-gradient(rgba(0,0,0,0.6)  20%, rgba(14,146,70,0.2) )',
      }"
      class="background py-6"
      style="position:relative"
    >
      <div class="container p-4">
        <prismic-rich-text :field="document.title" />
        <div class="card" style="min-height: 100vh; background: rgba(255,255,255,0.9)">
          <div v-if="document.content.length > 0 && document.content[0].text !== ''">
            <div class="card-content">
              <prismic-rich-text :field="document.content" />
            </div>
          </div>
          <slice-zone type="page" :uid="$route.params.uid" />
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
    data () {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true
    },
    head () {
      return {
        title: this.document.meta_title,
        meta: [
          { hid: 'og-title', property: 'og:title', content: this.document.meta_description },
          // other meta
        ]
      }
    },
    async asyncData({ $prismic, params, error }) {
    try{
      const page = (await $prismic.api.getByUID('page', params.uid)).data
      return {
        document: page,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss"  >
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}

h3 {
  margin-top: 2rem !important;
  margin-bottom: 40px !important;
  color: #0e9246;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

svg {
  display: inline-block;
  position: sticky;
  top: 0;
}
@media only screen and (max-width: 600px) {
  svg {
    top: 0;
  }
}
.cont {
  width: 100%;
  overflow: hidden;
  position: relative;
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
