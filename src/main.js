import 'proto-polyfill'
import Vue from 'vue'
import './lib/antd'
import App from './views/global-app'
import router from './router'
import store from './store'

console.log('store: ', store)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
