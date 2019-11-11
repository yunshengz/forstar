import Ajax from '@/lib/ajax'
const store = {
  namespaced: true,
  state() {
    return {
      loading: false,
      list: []
    }
  },
  mutations: {
    setLoading(state, type) {
      state.loading = !!type
    },
    setList(state, list) {
      state.list = list
    }
  },
  actions: {
    getService({ commit }) {
      commit('setLoading', true)
      const service = new Ajax()
      console.log('ser: ', service)
      service.url('/article/list').on('netSuccess', function(data, raw) {
        commit('setList', data)
        commit('setLoading', true)
        console.log('data: ', data)
        console.log('raw: ', raw)
      })
      return service
    }
  }
}
export default store
