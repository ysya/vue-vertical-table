<template>
  <div>
    <VerticalTable :table-data="tableData" :table-style="tableStyle" />
    <el-button type="primary" @click="getData">取得資料</el-button>

    <h4>雙向綁定：</h4>
    <el-input v-model="tableStyle.width" placeholder="" />
    <vue-json-pretty :data="tableData" />
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
        },
        {
          name: 'row3',
          children: [
            { isEdit: true, type: 'input', key: '姓名', value: '王大明' },
            { isEdit: true, type: 'input', key: '性別', value: '女' },
            { isEdit: true, type: 'input', key: '職業', value: '學生' },
            { isEdit: true, type: 'input', key: '年齡', value: '100' }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {
    getData() {
      console.log(this.tableData)
    }
  }
}
</script>
