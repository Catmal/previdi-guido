<template>
 
    <b-carousel    :indicator-inside="true">
      <b-carousel-item class="slider"  v-for="(item, i) in slice.items" :key="i">
        <span >
          <img class="slide"  v-if="item.image.url" :src="item.image.url" />
        
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
.slider {
    height: 100vh ;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    position: relative;
    top: -94px;
    display: flex;
  justify-content: center;
  
}

.slide {
position: absolute;
top: 0;
left: 0;
bottom: 0;
height: 100%

}




</style>
