import AjaxBase from '@stand/ajax-base'
class Ajax extends AjaxBase {
  constructor(...params) {
    super(...params)

    this.on('netSuccess', async function(raw) {
      if (!raw.data.error) {
        console.log('ok!!!!!')
        await this.emit('success', raw.data, raw)
      } else {
        await this.emit('abnormal', raw)
        if (raw.data.error === 405) {
          // 跳转
        }
      }
    })
    //
    this.on('netFail', async function(error) {
      await this.emit('abnormal', error)
    })
    this.before('fetch', async function() {
      await this.emit('prefetch')
    })
  }
  onSuccess(callback) {
    this.on('success', callback)
    return this
  }
  onAbnormal(callback) {
    this.on('abnormal', callback)
    return this
  }
  process(successHandle, abnormalHandle) {
    this.on('success', successHandle)
    this.on('netCompleted', abnormalHandle)
    return this
  }
  onPrefetch(callback) {
    this.on('prefetch', callback)
    return this
  }
}
Ajax.create = (url, method) => {
  const ajax = new Ajax({
    responseType: 'json',
    baseURL: '/mocks/'
  })
  if (typeof url !== 'undefined') {
    ajax.url(url)
  }
  method && ajax.method(method)
  ajax.on('request', function() {
    console.log('======')
  })
  console.log('method: ', method)
  return ajax
}
export default Ajax
