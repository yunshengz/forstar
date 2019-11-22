import { getStore } from '../imports'
let callbacks = []
const queue = async (callback = async () => {}) => {
  callbacks.push(callback)
}
export const dequeue = async () => {
  try {
    const { length } = callbacks
    for (let i = 0; i < length; i++) {
      const callback = callbacks[i]
      await callback()
    }
    callbacks = []
  } catch (err) {
    console.log(err)
  }
}

export const authError = async chain => {
  const store = getStore()
  await new Promise(resolve => {
    // 设置登录或注册成功的回调函数
    queue(async () => {
      await chain.fetch()
      resolve()
    })
    // 显示弹窗
    store.commit('account/updateDisplay', true)
  })
}
