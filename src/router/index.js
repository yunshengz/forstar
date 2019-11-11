import Vue from 'vue'
import VueRouter from 'vue-router'
import account from './account'
import site from './site'
import article from './artile'
Vue.use(VueRouter)

const routes = [...account, ...site, ...article]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
