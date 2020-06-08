import CryptoJS from 'crypto-js'
// 需要在这里加载需要用到的组件

const CryptoJs = {
  install: function (Vue) {
    Vue.component('CryptoJS', CryptoJS)
  }
}
export default CryptoJs
