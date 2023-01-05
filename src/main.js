import Vue from 'vue'
import App from './App.vue'

import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china',china)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


new Vue({
  render: h => h(App),
}).$mount('#app')
