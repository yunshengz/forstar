import Vue from 'vue'
import Vuex from 'vuex'

import accountReg from './account-reg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    'account-reg': accountReg
  }
})
