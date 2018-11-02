<template>
  <div id="app">
    <nav>
      <router-link to="/">hoge</router-link>
      <router-link to="Product">huge</router-link>
      <router-link to="hoge/hanya">aaaaaaaaaa</router-link>
      <p>{{ this.$route.fullPath }}</p>
      <p>{{ this.$route.query }}</p>
      <p>{{ this.$route.params }}</p>

      <p><router-link :to="{ path: 'hoge/hanya' }">aaa</router-link></p>
      <p><router-link :to="{ name: 'Home', params: { id: 1 } }">aaa</router-link></p>
      <p><router-link :to="{ name: 'Home', query: { id: 1 } }">aaa</router-link></p>

      <p><router-link :to="{ path: '/Product/1' }">product/1</router-link></p>
    </nav>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
