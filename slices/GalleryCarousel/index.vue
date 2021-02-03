<template>
  <section>
    <b-modal v-model="isImageModalActive">
      <img style="max-height: 90vh;" v-if="currentImage" :src="currentImage.coverImage.url" />
    </b-modal>
    <h1 class="title">{{slice.primary.Title}}</h1>
    <div class="columns">
      <div v-for="(item, i) in slice.items" :key="i" class="column is-clickable">
        <div style="position: relative">
          <img @click="currentImage = item, isImageModalActive = true" :src="item.coverImage.url" />
          <div
            class="full-width p-4 has-background-primary-light"
            style="position: absolute; bottom: 5px; left: 0; "
          >
            <p class="has-text-dark">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
   data () {
    return {
    currentImage: false,
    isImageModalActive: false,
    }
  }
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
