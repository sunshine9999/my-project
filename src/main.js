import Vue from 'vue'
import App from './App'
import router from './router'
import {
  get,
  post,
  postStringify
} from '@/api/http.js'

Vue.config.productionTip = false
Vue.prototype.$http = {
  get: get,
  post: post,
  postStringify: postStringify
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
