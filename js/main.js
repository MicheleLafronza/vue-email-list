// inizializzo app Vue 3
const { createApp } = Vue

  createApp({
    data() {
      return {
        EmailLists: [],
      }
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((randomEmail) => {
                    const mail = randomEmail.data.response;
                    this.EmailLists.push(mail);
            })
        }
        console.log(this.EmailLists);
    }
  }).mount('#app')