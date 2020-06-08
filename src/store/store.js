import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import {
  moduleLoading
} from './module/moduleLoading'
Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  modules: {
    loading: moduleLoading
  },
  state,
  getters,
  mutations,
  actions
})
