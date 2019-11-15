// import Ajax from '@/lib/ajax'
import Ajax from '@stand/ajax-base'
// import { createArticle } from './article'
export const account = {
  reg: () => {
    return Ajax.create('/account/reg', 'POST')
    // .on('request', async function() {
    //   const that = this
    //   await Ajax.create('/message/read', 'POST')
    //     // .attach(that, 'message')
    //     .on('netSuccess', function() {
    //       that.set('messageState', this.state)
    //     })
    //     .on('netError', async function() {
    //       that.disable()
    //     })
    // })
  },
  login: () => Ajax.create('/account/login', 'post')
}
export const site = {
  create: () => Ajax.create('/site/create', 'POST')
}

export { createArticle, listArticle } from './article'
