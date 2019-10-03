import VerticalTable from '@/components/VerticalTable.vue'

VerticalTable.install = function(Vue) {
  Vue.component(VerticalTable.name, VerticalTable)
}

const components = [VerticalTable]

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
  VerticalTable
}

export default {
  install,
  VerticalTable
}
