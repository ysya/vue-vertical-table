<template>
  <div>
    <VerticalTable
      v-model="data"
      :table-data="tableData"
      :table-style="tableStyle"
    />
    <button @click="getData">取得資料</button>
    <h4>雙向綁定：</h4>
    <input v-model="tableStyle.width" placeholder="">
    <!-- <vue-json-pretty :data="data" /> -->

    <CrossTable
      v-model="data1"
      :table-data="tableData1"
      :table-style="tableStyle"
    />
    <input v-model="tableData1[0].title" placeholder="">
    <vue-json-pretty :data="data1" />
    <button type="primary" @click="handleAddHItem">水平項目</button>
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
      tableStyle: { width: '500px' },
      tableData: [
        {
          name: 'row1',
          children: [
            { isEdit: false, key: '單號', value: '1001' },
            { isEdit: true, type: 'input', key: '商品名稱', value: '籃球' }
          ]
        },
        {
          name: 'row2',
          children: [
            { isEdit: true, type: 'input', key: '價格', value: '120' },
            {
              isEdit: true,
              type: 'input',
              key: '訂單日期',
              value: '2017-03-01'
            },
            { isEdit: true, type: 'input', key: '付款方式', value: '信用卡' }
          ]
        }
      ],
      tableData1: [
        {
          title: 'A機',

          children: [
            { name: '電壓', value: '11', isEdit: true, type: 'input' },
            { name: '電流', value: '111', isEdit: true, type: 'input' },
            { name: '是否更換', value: '1111', isEdit: true, type: 'input' },
            { name: '耗材', value: '11111', isEdit: true, type: 'input' }
          ]
        },
        {
          title: 'B機',
          isEdit: true,
          children: [
            { name: '電壓', value: '22', isEdit: true, type: 'input' },
            { name: '電流', value: '222', isEdit: true, type: 'input' },
            {
              name: '是否更換',
              value: '2222',
              isEdit: true,
              type: 'input'
            },
            { name: '耗材', value: '22222', isEdit: true, type: 'input' }
          ]
        },
        {
          title: 'C機',
          isEdit: true,
          children: [
            { name: '電壓', value: '33', isEdit: true, type: 'input' },
            { name: '電流', value: '333', isEdit: true, type: 'input' },
            { name: '是否更換', value: '3333', isEdit: true, type: 'input' },
            { name: '耗材', value: '33333', isEdit: true, type: 'input' }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {
    getData() {
      console.log(this.tableData)
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
