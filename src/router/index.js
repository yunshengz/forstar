import Vue from 'vue'
import VueRouter from 'vue-router'
import account from './account'
import site from './site'
Vue.use(VueRouter)

const routes = [...account, ...site]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
