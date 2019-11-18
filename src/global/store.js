import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
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
