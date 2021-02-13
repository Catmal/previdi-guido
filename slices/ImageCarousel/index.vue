<template>
  <div
    class="slider"
   
  >
    <b-carousel  class="carousel"  :indicator-inside="true">
      <b-carousel-item style="height: 100%" v-for="(item, i) in slice.items" :key="i">
        <span class="rounded-borders">
          <img style="height: 100%" v-if="item.image.url" :src="item.image.url" />
        </span>
      </b-carousel-item>
    </b-carousel>
  </div>
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
.slider {
max-width: 100%;
    max-height: 100vh ;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    position: relative;
    top: -94px;
    display: flex;
  justify-content: center;
  
}




</style>
