import Vue from 'vue'
import VueRouter from 'vue-router'
import account from './account'
import message from './message'
Vue.use(VueRouter)

const routes = [...account, ...message]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
