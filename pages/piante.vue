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
      style="position:relative"
      class="background"
    >
      <svg
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
          <h1>Piante</h1>
          <div class="card p-6" style="min-height: 100vh; background: rgba(255,255,255,0.9)">
            <b-tabs type="is-boxed" v-model="activeTab">
              <b-tab-item label="Alberature">
                <slice-zone type="piante" uid="alberature" />
              </b-tab-item>
              <b-tab-item label="Arbusti">
                <slice-zone type="piante" uid="arbusti" />
              </b-tab-item>
              <b-tab-item label="Conifere">
                <slice-zone type="piante" uid="conifere" />
              </b-tab-item>
              <b-tab-item label="Frutti">
                <slice-zone type="piante" uid="frutti" />
              </b-tab-item>
              <b-tab-item label="Mediterranee">
                <slice-zone type="piante" uid="mediterranee" />
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
 head: {
    title: 'Vivai Previdi Guido - Vendita Piante',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }, 
  transition: 'home',
  data() {
    return {
      activeTab: 0
    }
  },
  components: {
    SliceZone
  },
   async asyncData({ $prismic, params, error }) {
    try{
      const page = (await $prismic.api.getByUID('page', 'piante')).data      
      return {
        document: page,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
   }
   
  
}
</script>

<style lang="scss"  scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
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
