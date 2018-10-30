<template>
  <div class="app">
    <ul>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ul>
    引数付き
    <ul>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ul>
    <button @click='hoge'></button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import store from "./store";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    hoge : function () {
      store.commit('mutationType', 3)
    }
  },
  computed: {
    count() { return store.getters.count },   // 1
    max()   { return store.getters.max },     // 2
    // 引数付きゲッター
    itemA() { return store.getters.item(2) }, // 1 👍 いいね
    itemB() { return store.getters.item },    // 2 👎 よくないね
    nameA() { return store.getters.name(2) }, // 3 👍 いいね
    nameB() { return store.getters.name },    // 4 👎 よくないね
  },
  created () {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(this.$store.state.count)
    console.log(this.$store.getters.max)
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
