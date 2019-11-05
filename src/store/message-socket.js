import socket from '@/lib/socket'
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
    async subscribe() {
      await socket.auth()
      // socket.send({ payload: 'xxxx' })
    }
  }
}
export default store
