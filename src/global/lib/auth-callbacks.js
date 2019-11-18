let callbacks = []
export const queue = async (callback = async () => {}) => {
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
