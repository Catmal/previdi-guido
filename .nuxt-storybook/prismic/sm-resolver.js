import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/home/mirco/Webapps/vivai-previdi/slices/${sliceName}.vue`), import(`/home/mirco/Webapps/vivai-previdi/slices/${sliceName}/index.vue`), import(`/home/mirco/Webapps/vivai-previdi/slices/${sliceName}/index.js`), import(`/home/mirco/Webapps/vivai-previdi/slices/${sliceName}/${sliceName}.vue`),import(`vue-essential-slices/src/slices/${sliceName}.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.js`), import(`vue-essential-slices/src/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
