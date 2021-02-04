<template>
  <section class="card section container my-6" style="background: rgba(255,255,255,0.7)">
    <b-modal v-model="isImageModalActive">
      <img style="max-height: 90vh;" v-if="currentImage" :src="currentImage.coverImage.url" />
    </b-modal>
    <h1 class="title has-text-primary">{{slice.primary.Title}}</h1>
    <div class="columns is-multiline">
      <div
        v-for="(item, i) in slice.items"
        :key="i"
        class="column column is-one-quarter is-clickable"
      >
        <div style="position: relative">
          <img
            class="rounded-borders"
            @click="currentImage = item, isImageModalActive = true"
            :src="item.coverImage.url"
          />
          <div
            class="p-4 rounded-borders"
            style="position: absolute; bottom: 5px; left: 0; width: 100%; background: rgba(255,255,255,0.8)"
          >
            <p class="has-text-black">{{item.name}}</p>
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
.rounded-borders {
  border-radius: 4px;
}
</style>
