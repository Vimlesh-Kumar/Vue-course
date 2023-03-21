const app = Vue.createApp({
    data() {
        return {
            name: 'Vimlesh Kumar',
            age: 22,
            imageLink: 'https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg'
        }
    },

    methods: {
        randomNum() {
            return Math.random()
        }
    },
})

app.mount('#details');
