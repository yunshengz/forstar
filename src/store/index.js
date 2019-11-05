import Vue from 'vue'
import Vuex from 'vuex'

import accountReg from './account-reg'
import messageSocket from './message-socket'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    'account-reg': accountReg,
    'message-socket': messageSocket
  }
})
