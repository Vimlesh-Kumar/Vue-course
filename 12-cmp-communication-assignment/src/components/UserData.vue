<template>
    <section>
        <form @submit.prevent="submitData">
            <label for="name">Name-</label>
            <input type="text" v-model="enteredName">
            <label for="age">Age-</label>
            <input type="number" v-model="enteredAge">
            <button>Add User Data</button>
        </form>
    </section>
</template>

<script>
export default {
    emits:['set-data'],
    data() {
        return {
            enteredName:'',
            enteredAge:''
        }
    },
    methods:{
        submitData(){
            this.$emit('set-data',this.enteredName,this.enteredAge)
        }
    }
}   
</script>