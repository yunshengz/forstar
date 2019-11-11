import Vue from 'vue'
import Vuex from 'vuex'

import accountReg from './account-reg'
import siteCreate from './site-create'
import article from './article'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    'account-reg': accountReg,
    siteCreate,
    article
  }
})
