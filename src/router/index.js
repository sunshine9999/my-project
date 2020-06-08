import Vue from 'vue'
import VueRouter from 'vue-router'
const index = () => import('../views/index/index')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: index
}
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
