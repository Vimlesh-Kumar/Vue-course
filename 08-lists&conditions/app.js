const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal != '') {
        this.goals.push(this.enteredGoal)
      }

    },
    removeAgoal(indx){
      return this.goals.splice(indx,1)
    }
  },
});

app.mount('#user-goals');
