<template>
  <div>
    <h4>VerticalTable</h4>
    width: <input v-model="tableStyle.vTable.width" placeholder="px">
    <VerticalTable
      v-model="data"
      :table-data="vTableData"
      :table-style="tableStyle.vTable"
    />
    <button @click="getData('vTable')">Get Data</button>
    <vue-json-pretty :data="data" :deep="2" />

    <h4>CrossTable</h4>
    width: <input v-model="tableStyle.cTable.width" placeholder="px">

    <CrossTable
      v-model="data1"
      :table-data="crossTableData"
      :table-style="tableStyle.cTable"
    />
    <button @click="getData('crossTable')">Get Data</button>
    <div style="height: 200px">
      <vue-json-pretty :data="data1" :deep="2" />
    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
export default {
  components: {
    // eslint-disable-next-line
    VueJsonPretty
  },
  data() {
    return {
      data: '',
      data1: '',
      tableStyle: {
        vTable: { width: '600px' },
        cTable: { width: '500px' }
      },
      vTableData: [
        {
          name: 'row1',
          children: [
            { isEdit: false, key: 'Order No.', value: '1001' },
            {
              isEdit: true,
              type: 'input',
              key: 'Product Name',
              value: 'Basketball'
            },
            {
              isEdit: true,
              type: 'checkbox',
              key: 'Checked',
              value: false
            }
          ]
        },
        {
          name: 'row2',
          children: [
            { isEdit: true, type: 'input', key: 'Price', value: '120' },
            {
              isEdit: true,
              type: 'input',
              key: 'Date',
              value: '2017-03-01'
            },
            { isEdit: true, type: 'input', key: 'Payment', value: 'Creditcard' }
          ]
        }
      ],
      crossTableData: [
        {
          title: 'John',
          children: [
            { name: 'love me?', value: false, isEdit: true, type: 'checkbox' },
            { name: 'Gender', value: 'M', isEdit: true, type: 'input' },
            { name: 'Age', value: '18', isEdit: true, type: 'input' },
            { name: 'Height', value: '200', isEdit: true, type: 'input' },
            { name: 'Weight', value: '60', isEdit: true, type: 'input' }
          ]
        },
        {
          title: 'Amy',
          children: [
            { name: 'love me?', value: true, isEdit: true, type: 'checkbox' },
            { name: 'Gender', value: 'F', isEdit: true, type: 'input' },
            { name: 'Age', value: '22', isEdit: true, type: 'input' },
            {
              name: 'Height',
              value: '160',
              isEdit: true,
              type: 'input'
            },
            { name: 'Weight', value: '45', isEdit: true, type: 'input' }
          ]
        },
        {
          title: 'Ryan',
          children: [
            { name: 'love me?', value: false, isEdit: true, type: 'checkbox' },
            { name: 'Gender', value: 'M', isEdit: true, type: 'input' },
            { name: 'Age', value: '36', isEdit: true, type: 'input' },
            { name: 'Height', value: '171', isEdit: true, type: 'input' },
            { name: 'Weight', value: '70', isEdit: true, type: 'input' }
          ]
        },
        {
          title: 'Ted',
          children: [
            { name: 'love me?', value: false, isEdit: true, type: 'checkbox' },
            { name: 'Gender', value: 'M', isEdit: true, type: 'input' },
            { name: 'Age', value: '12', isEdit: true, type: 'input' },
            { name: 'Height', value: '168', isEdit: true, type: 'input' },
            { name: 'Weight', value: '58', isEdit: true, type: 'input' }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {
    getData(table) {
      if (table === 'vTable') {
        alert(JSON.stringify(this.vTableData))
        console.log('vTable:', this.vTableData)
      } else if (table === 'crossTable') {
        alert(JSON.stringify(this.crossTableData))
        console.log('crossTable:', this.crossTableData)
      }
    },
    handleAddHItem() {
      this.tableLabel.push({
        label: '新項目',
        prop: ''
      })
    }
  }
}
</script>
