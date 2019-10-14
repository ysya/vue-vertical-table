import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VerticalTable from './index'
Vue.use(VerticalTable)
import CrossTable from './index'
Vue.use(CrossTable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
