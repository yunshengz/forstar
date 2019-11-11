import { account } from '@/services'
const store = {
  namespaced: true,
  state() {
    return {
      sending: false,
      submitting: false
    }
  },
  mutations: {
    setSending(state, type) {
      state.sending = !!type
    },
    setSubmitting(state, type) {
      state.submitting = !!type
    }
  },
  actions: {
    async submit() {
      const chain = account.reg()
      await chain
        // .onPrefetch(() => {
        //   commit('setSubmitting', true)
        // })
        // .params(params)
        // .process(
        //   () => {
        //     console.log('ok!')
        //   },
        //   () => {
        //     commit('setSubmitting', false)
        //     console.log('completed!')
        //   }
        // )
        .fetch()
      return chain
    }
  }
}
export default store
