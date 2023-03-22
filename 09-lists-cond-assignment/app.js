const app=Vue.createApp({
    data(){
        return {
            enteredValue:'',
            tasks:[],
            taskVisibility:true

        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredValue)
        },
        taskShow(){
            this.taskVisibility=!this.taskVisibility
        }
    },
    computed:{
        buttonCaption(){
            return this.taskVisibility? 'Hide Tasks': 'Show Tasks'
        }
    }
})

app.mount('#assignment')