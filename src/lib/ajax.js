import AjaxBase from '@stand/ajax-base'
import store from '@/store'
class Ajax extends AjaxBase {
  constructor(...params) {
    super(...params)

    store.registerModule('ajax', {
      state: {
        loading: false
      },
      mutations: {
        setLoading(state, type) {
          state.loading = type
        }
      }
    })
    this.on('request', async function() {
      console.log('req1: ', store.state.ajax.loading)
      store.commit('setLoading', true)
      console.log('req2: ', store.state.ajax.loading)
    })
    this.on('netCompleted', async function() {
      console.log('req3: ', store.state.ajax.loading)
      store.commit('setLoading', false)
      console.log('req4: ', store.state.ajax.loading)
    })
  }
}
Ajax.create = (url, method) => {
  const ajax = new Ajax()
  ajax.config({
    responseType: 'json',
    baseURL: '/mocks/'
  })
  if (typeof url !== 'undefined') {
    ajax.url(url)
  }
  method && ajax.method(method)
  ajax.state = store.state.ajax
  // ajax.set('state', store.state.ajax)
  return ajax
}
export default Ajax
