const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nameAfterEnterKey1:''
    }
  },
  methods: {
    add() {
      return this.counter++;
    },
    reduce() {
      return this.counter--;
    },

    setName(event) {
      this.name = event.target.value
    },
    nameAfterEnterKey()
    {
      this.nameAfterEnterKey1=this.name
    },
    submitForm(){
      alert('Form submitted..')
    }
  }
})

app.mount('#events')