import AjaxBase from '@stand/ajax-base'
import store from '@/store'

class Ajax extends AjaxBase {
  constructor(...params) {
    super(...params)
    store.registerModule('services', {
      namespaced: true,
      state: {
        loading: false,
        datas: {},
        status: true
      },
      mutations: {
        setLoading(state, type) {
          state.loading = type
        }
      }
    })
    this.config({
      responseType: 'json',
      baseURL: '/mocks/'
    })
    this.on('request', async function() {
      store.commit('services/setLoading', true)
    })
    this.on('netCompleted', async function() {
      store.commit('services/setLoading', false)
    })
    this.state = store.state.services
  }
}

export default Ajax
