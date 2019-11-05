import { site } from '@/services'
const store = {
  namespaced: true,
  state: {
    sending: false,
    submitting: false
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
    async create(ctx, params) {
      const chain = site.create()
      await chain.params(params).fetch()
    }
  }
}
export default store
