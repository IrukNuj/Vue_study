<template>
  <div class="app">
    <p>{{ message }}</p>
    <EditForm />
    <p>hogehoge</p>
  </div>
</template>
6
<script>
import store from './store'
import EditForm from './components/EditForm'
export default {
  name: 'App',
  components: {
    EditForm
  },
  computed: {
    message () { return store.getters.message }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
