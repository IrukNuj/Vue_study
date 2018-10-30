import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 300 }
    ]
  },
  mutations: {
    mutationType(state, payload){
      state.count = payload
    }
  },
  getters: {
    count (state, getters, rootState, rootGetter) {
      return state.count
    },
    max (state) {
      return state.list.reduce((a, b) => {
        return a.price > b.price ? a.price : b.price
        // ここ a > b.price ? a :b.price でええのなんなん？
      })
    },
    item (state) {
      return id => state.list.find(el => el.id === id)
    },
    name (state,getters) {
      return id => getters.item(id).name
    }
  }
})

export default store
