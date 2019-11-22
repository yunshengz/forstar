import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './imports'
import { setRouter } from './lib/globals'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

setRouter(router)

export default router
