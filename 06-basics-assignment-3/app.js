const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    watch: {
        result(){
            const that=this
            setTimeout(function(){
                that.number=0
            },5000)
        }
    },
    methods: {
        addNumber(n) {
            return this.number += n;
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Number < 37';
            } else if (this.number === 37) {
                return 37;
            } else {
                return 'Number >37'
            }

        }
    }
})

app.mount('#assignment')