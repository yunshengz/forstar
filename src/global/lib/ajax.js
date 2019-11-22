import AjaxBase from '@stand/ajax-base'
import { notification } from 'ant-design-vue'
import { apiDomain } from '../config'
import { authError } from '../imports'
class Ajax extends AjaxBase {
  constructor(...params) {
    super(...params)
    this.configEventGroups('request', { before: 500 })
    this.config({
      withCredentials: true,
      baseURL: apiDomain
    }).on('netSuccess', async function(res, raw) {
      const { error, payload, message } = res
      const config = this.get()
      if (!error) {
        if (message && config.notice !== false) {
          notification.success({
            message: '成功',
            description: message
          })
        }
        await this.emit('success', payload, res, raw)
      } else {
        const codeHandle = config[`error${error}`]
        if (codeHandle && typeof codeHandle === 'function') {
          await codeHandle.call(this, res)
        } else if (typeof codeHandle === 'undefined') {
          if (error === 601) {
            await this.error601(res)
          } else if (error === 602) {
            await this.error602(res)
          } else {
            if (message && config.notice !== false) {
              notification.error({
                message: '出错了',
                description: message
              })
            }
            await this.emit('errorcode', res, raw)
          }
        }
        await this.emit('error', res, raw)
      }
    })
  }
  cross(requestHandle = () => {}, completedHandle = () => {}) {
    return this.on('request/before', requestHandle).on(
      'netCompleted',
      completedHandle
    )
  }
  success(successHandle = () => {}) {
    return this.on('success', successHandle)
  }
  async error601() {
    await authError(this)
  }
  error602(res) {
    const { payload } = res
    const form = this.getForm()
    if (form) {
      const fields = {}
      payload.forEach(({ field, message }) => {
        fields[field] = {
          errors: [new Error(message)]
        }
      })
      form.setFields(fields)
    }
  }
  setForm(form) {
    return this.set('form', form)
  }
  getForm() {
    return this.get('form')
  }
}
export default Ajax
