<template>
  <h2>Dynamic Components</h2>
  <div>
    <button @click="checkTab('AngularCourse')">Angular</button>
    <button @click="checkTab('JavaCourse')">Java</button>
    <button @click="checkTab('NodeCourse')">Node</button>
  </div>
  <component :is='activeTab'></component>
</template>

<script>
import AngularCourse from './components/AngularCourse.vue'
import JavaCourse from './components/JavaCourse.vue'
import NodeCourse from './components/NodeCourse.vue'

export default {
  name: 'App',
  components: {
    AngularCourse,
    JavaCourse,
    NodeCourse

  },
  data() {
    return {
      activeTab: ''
    }
  },
  checkTab(para) {
    this.activeTab = para
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
