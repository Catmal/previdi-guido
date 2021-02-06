<template>
  <div class="slider">
    <b-carousel :indicator-inside="true">
      <b-carousel-item
        v-for="(item, i) in slice.items"
        :key="i"
        style="height: calc(100vh); width: 100%"
      >
        <span class="image rounded-borders">
          <img :src="item.image.url" />
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
  position: relative;
  top: -94px;
}
</style>
