<template>
  <div>
    <div
      :style="{ 
      backgroundImage: 'url(' + document.background.url + '), linear-gradient(rgba(0,0,0,0.6)  20%, rgba(14,146,70,0.2) )',
      backgroundBlendMode: overlay,
      backgroundAttachment: fixed,
      backgrounPosition: center,
      backgroundRepeat: no-repeat,
      backgroundSize: cover,
      }"
      class="background"
      style="position:relative"
    >
      <svg
        v-if="show"
        style="position: sticky; top: 94px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 200"
      >
        <path
          fill="#0e9246"
          fill-opacity="0.1"
          d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <div style=" margin-top:-28%; padding: 15px">
        <div class="container">
          <prismic-rich-text :field="document.title" />
          <div class="card p-6" style="min-height: 100vh; background: rgba(255,255,255,0.9)">
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
      title: this.document.title[0].text,
      meta: [
        { hid: 'og-title', property: 'og:title', content: "kk" },
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
