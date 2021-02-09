<template>
  <div class="slider">
    <div v-if="!slice.items.length > 0" style="height: 100vh; width: 100%; background-color: #000"></div>

    <b-carousel :indicator-inside="true">
      <b-carousel-item
        v-for="(item, i) in slice.items"
        :key="i"
        style="height: calc(100vh); width: 100%"
      >
        <span class="image rounded-borders">
          <img v-if="item.image.url" :src="item.image.url" />
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
