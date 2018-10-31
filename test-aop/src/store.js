import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    update (state) {
      state.count += 100
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    count: 2
  },
  mutations: {
    update (state) {
      state.count += 200
    }
  }
}

const store = new Vuex.Store({
  namespaced: true,
  state: {
    count: 0,
    message: '初期メッセージ'
  },
  getters: {
    message (state) { return state.message }
  },
  mutations: {
    setMessage (state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    doUpdate ({ commit }, message) {
      commit('setMessage', { message })
    }
  },
  modules: {
    moduleA,
    moduleB
  }
})

export default store
