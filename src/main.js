import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VerticalTable from './index'
Vue.use(VerticalTable)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
