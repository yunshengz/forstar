const store = {
  namespaced: true,
  state: {
    display: false,
    userinfo: {}
  },
  mutations: {
    setUserinfo(state, info) {
      state.userinfo = info
    },
    updateDisplay(state, type) {
      state.display = !!type
    }
  },
  actions: {}
}
export default store
