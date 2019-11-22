import Vue from 'vue'
import Vuex from 'vuex'
import { modules } from './imports'
import { setStore } from './lib/globals'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {}
})

setStore(store)

export default store
