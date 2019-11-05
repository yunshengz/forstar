import Nes from '@hapi/nes/lib/client'
// const client = new Nes.Client('wss://echo.websocket.org/')
const client = new Nes.Client('ws://127.0.0.1:1111')
// const client = new Nes.Client('ws://192.168.8.118:18308/notice')

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
      client.onConnect = function() {
        console.log('ok')
      }
      // client.onUpdate = function(message) {
      //   console.log('message: ', message)
      // }
      await client.connect({
        headers: { authorization: 'Basic am9objpzZWNyZXQ=' }
      })
      // await client.connect()
      // const ws = client._ws
      // ws.onmessage = function(data) {
      //   console.log(data)
      //   // setTimeout(function timeout() {
      //   //   ws.send(Date.now())
      //   // }, 500)
      // }
      client.onError = function(err) {
        console.log('err: ', err)
      }
      await client.message('xxxxx')
      client.subscribe('/user', (err, update) => {
        console.log('update: ', update)
      })
    }
  }
}
export default store
