
import gansu from 'echarts/map/json/province/gansu'
import echarts from 'echarts'
const VueECharts = () => import('vue-echarts')

echarts.registerMap('gansu', gansu)

const ECharts = {
  install: function (Vue) {
    Vue.component('v-chart', VueECharts)
  }
}
export default ECharts
