import './base/css.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import viewDesign from 'view-design'
// echart
import echarts from './base/echarts.js'
// echart
import cryptoJs from './base/cryptoJs'
import {
  get,
  post,
  postStringify
} from '@/api/http.js'
Vue.use(viewDesign)
Vue.use(echarts)
Vue.use(cryptoJs)
Vue.config.productionTip = false
Vue.prototype.$http = {
  get: get,
  post: post,
  postStringify: postStringify
}
router.beforeEach((to, from, next) => {
  next(vm => {})
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
