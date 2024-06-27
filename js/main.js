// inizializzo app Vue 3
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    methods: {

    },
    mounted() {
        console.log(`the component is now mounted.`)
      }
  }).mount('#app')