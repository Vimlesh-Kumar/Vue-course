const app = Vue.createApp({
    data() {
        return {
            inputData:'',
            inputDataAfterEnter:''
        }
    },
    methods: {
        showAlert() {
            alert('This Works...')
        },
        saveInput(event){
            this.inputData=event.target.value
        },
        confirmInput(){
            this.inputDataAfterEnter=this.inputData
        }
    },
})

app.mount('#assignment')