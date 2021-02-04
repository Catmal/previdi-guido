<template>
  <div>
    <div class="cont">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">
        <path
          fill="#0e9246"
          fill-opacity="1"
          d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <div style=" margin-top:-28%; padding: 15px">
        <div class="container">
          <h1
            class="is-size-1 has-text-weight-bold is-uppercase has-text-white mb-6"
          >{{ $prismic.asText(document.title) }}</h1>
          <b-skeleton size="is-large" :active="document.title === ''" :count="2"></b-skeleton>

          <div
            v-if="document.content.length > 0 && document.content[0].text !== ''"
            class="card p-6"
            style="background: rgba(255,255,255,0.9)"
          >
            <div class="card-content">
              <p>{{ $prismic.asText(document.content) }}</p>
              <b-skeleton size="is-large" :active="!document.content" :count="2"></b-skeleton>
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
    async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const page = (await $prismic.api.getByUID('page', params.uid)).data
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
  display: inline-block;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;
}
</style>
