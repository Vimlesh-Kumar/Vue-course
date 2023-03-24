<template>
    <div>
        <active-user v-for="user in users" :key="user.name" :name="user.name" :age="user.age"
        ></active-user>
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [{
                name: 'Raj',
                age: 22
            }]
        }
    },methods: {
        setUserData(name,age){
            // this.users.name=name;
            // this.users.age=age
            const newUser={
                name:name,
                age:age
            }
            this.users.push(newUser)
        }
    },
}
</script>

<style>
html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

#app input {
    font: inherit;
    padding: 0.15rem;
}

section {
    margin: 2rem auto;
    max-width: 40rem;
    padding: 1rem;
    border: 1px solid blanchedalmond;
    border-radius: 20px;
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

</style>