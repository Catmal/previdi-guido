<template>
  <b-carousel class="home-slider" :indicator-inside="true">
    <b-carousel-item class="slide-container" v-for="(item, i) in slice.items" :key="i">
      <span>
        <img class="slide" v-if="item.image.url" :src="item.image.url" />
        <b-skeleton v-if="!item.image" width="400px" height="350px"></b-skeleton>
      </span>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
 
}
</script>

<style lang="scss"  scoped>
/* purgecss start ignore */

.home-slider {
  margin-top: -94px;
  height: 100vh;
}

.slide-container img {
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slide {
  position: absolute;
  object-fit: cover;
  left: 0;
  right: 0;
}
/* purgecss end ignore */
</style>
