import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/home/mirco/Webapps/previdi-guido/slices/${sliceName}.vue`), import(`/home/mirco/Webapps/previdi-guido/slices/${sliceName}/index.vue`), import(`/home/mirco/Webapps/previdi-guido/slices/${sliceName}/index.js`), import(`/home/mirco/Webapps/previdi-guido/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
