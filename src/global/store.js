import Vue from 'vue'
import Vuex from 'vuex'
import { subStores as modules } from './imports'
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    accountDialogDisplay: false,
    userinfo: {}
  },
  mutations: {
    setUserinfo(state, info) {
      state.userinfo = info
    },
    updateAccountDialogDisplay(state, type) {
      state.accountDialogDisplay = !!type
    }
  },
  actions: {}
})
