const app = Vue.createApp({
    data:function(){
        return {
            courseGoal:'Finish the course and learn more about Vue.',
            vueLink:'https://vuejs.org/guide/introduction.html'
        }
    }
})

app.mount('#user-goal')