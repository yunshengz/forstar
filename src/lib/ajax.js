import AjaxBase from '@stand/ajax-base'
// import store from '@/store'

class Ajax extends AjaxBase {
  constructor(...params) {
    super(...params)
    this.config({
      baseURL: 'http://ipliu.com:8000',
      responseType: 'json'
    })
  }
  process(successHandle, completedHandle) {
    return this.on('netSuccess', successHandle).on(
      'netCompleted',
      completedHandle
    )
  }
}

export default Ajax
