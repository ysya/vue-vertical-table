<template>
  <div>
    <VerticalTable
      v-model="data"
      :table-data="tableData"
      :table-style="tableStyle"
    />
    <button @click="getData">取得資料</button>
    <h4>雙向綁定：</h4>
    <el-input v-model="tableStyle.width" placeholder="" />
    <vue-json-pretty :data="data" />

    <CrossTable
      :table-data="tableData1"
      :table-label="tableLabel"
      :table-style="tableStyle"
    />
    <button type="primary" @click="handleAddHItem">水平項目</button>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
export default {
  components: {
    VueJsonPretty
  },
  data() {
    return {
      data: '',
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
      tableLabel: [
        { label: '', width: '120', prop: 'name', fixed: 'left' },
        { label: '是', width: '40', prop: '是' },
        { label: '否', width: '40', prop: '否' },
        { label: '不需要', width: '60', prop: '不需要' }
      ],
      tableData1: [
        { isEdit: true, name: '檢測項目1', 是: '○', 否: '○', 不需要: '○' },
        { isEdit: true, name: '檢測項目2', 是: '○', 否: '○', 不需要: '○' },
        { isEdit: true, name: '檢測項目3', 是: '○', 否: '○', 不需要: '○' }
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
