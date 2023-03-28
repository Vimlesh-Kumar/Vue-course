import { createApp } from 'vue';
import { createStore } from 'vuex'


const app = createApp(App);
const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        //Payload
        increase(state, payload){
            state.counter+=payload.value
        }
    }
})



import App from './App.vue';

app.use(store)
app.mount('#app');
