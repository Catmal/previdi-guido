<template>
  <section class="section container">
    <b-modal v-model="isImageModalActive">
      <img
        class="rounded-borders"
        style="max-height: 90vh;"
        v-if="currentImage"
        :src="currentImage.image.url"
      />
    </b-modal>

    <div class="columns is-multiline is-mobile">
      <div
        v-for="(item, i) in slice.items"
        :key="i"
        class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-fullhd is-clickable"
      >
        <div style="width: 400px; height:350px; background: #000" v-if="!item.image"></div>
        <b-skeleton v-if="!slice.items" width="400px" height="350px"></b-skeleton>
        <img
          class="rounded-borders"
          v-if="item.image.thumb_400_350"
          @click="currentImage = item, isImageModalActive = true"
          :src="item.image.thumb_400_350.url"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BeforeAfter",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data () {
    return {
    currentImage: false,
    isImageModalActive: false,
    }
  }
}
</script>

<style lang="scss"  scoped>
.title {
  margin-bottom: 2em;
}
</style>
