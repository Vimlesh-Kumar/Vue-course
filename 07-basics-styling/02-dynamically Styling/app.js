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
                this.boxAselected = !this.boxAselected
            } else if (boxName === 'B') {
                this.boxBselected = !this.boxBselected
            } else {
                this.boxCselected = !this.boxCselected
            }
        }
    },

    // Box A styling using computed properties
    computed:{
        boxAclass(){
            return {active : this.boxAselected}
        }
    }
})

app.mount('#styling')