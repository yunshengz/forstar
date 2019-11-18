import Vue from 'vue'
import Router from 'vue-router'

import homepage from '@/homepage/router'
import account from '@/account/router'
import album from '@/album/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [...homepage, ...account, ...album]
})
