const app = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
        }
    },
    methods: {
        boxSelection(boxName) {
            if (boxName === 'A') {
                return this.boxAselected = true
            } else if (boxName === 'B') {
                return this.boxBselected = true
            } else {
                this.boxCselected = true
            }
        }
    },
})

app.mount('#styling')