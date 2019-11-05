import StandBase from '@stand/base'
class StandSocket extends StandBase {
  constructor(url = 'ws://192.168.8.118:18308/notice') {
    super()
    this.ws = new WebSocket(url)
    this.ws.onmessage = data => {
      console.log('res data: ', data)
    }
  }
  until(callback) {
    if (this.ws.readyState === 1) {
      callback()
    } else if (this.ws.readyState === 0) {
      setTimeout(function() {
        this.until(callback)
      }, 50)
    }
  }
  async auth(
    token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBcHBcXFV0aWxcXEF1dGhcXFVzZXJBY2NvdW50Iiwic3ViIjoiMTAwMDc3IiwiaWF0IjoxNTcwNjc2MDg3LCJleHAiOjE1NzMyNjgwODcsImRhdGEiOnsidXNlcmlkIjoxMDAwNzd9fQ.qULBUagNbzzd9UqcuTPieYePZOdZqaNnQZWpcyGeOng'
  ) {
    await new Promise(resolve => {
      this.until(() => {
        console.log('state: ', this.ws.readyState)
        this.send({
          type: 'auth',
          token
        })
        resolve()
      })
    })
    return this
  }
  send(json) {
    this.ws.send(JSON.stringify(json))
    return this
  }
}

const socket = new StandSocket()
export default socket
