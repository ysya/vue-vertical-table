import VerticalTable from '@/components/VerticalTable.vue'
import CrossTable from '@/components/CrossTable.vue'

VerticalTable.install = function(Vue) {
  Vue.component(VerticalTable.name, VerticalTable)
}

CrossTable.install = function(Vue) {
  Vue.component(CrossTable.name, CrossTable)
}

const components = [VerticalTable, CrossTable]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  VerticalTable,
  CrossTable
}

export default {
  install,
  VerticalTable,
  CrossTable
}
