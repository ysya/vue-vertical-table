<template>
  <div>
    <VerticalTable :table-data="tableData" :table-style="tableStyle" />
    <el-button type="primary" @click="getData">取得資料</el-button>

    <h4>雙向綁定：</h4>
    <el-input v-model="tableStyle.width" placeholder="" />
    <div v-for="(row, outerIndex) in tableData" :key="outerIndex">
      <div
        v-for="(col, innerIndex) in row"
        :key="innerIndex"
        :style="{ flex: '0 0 ' + 100 / row.length + '%' }"
      >
        {{ col.key }}: {{ col.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableStyle: { width: '500px' },
      tableData: [
        [
          { isEdit: false, key: '單號', value: '1001' },
          { isEdit: true, key: '商品名稱', value: '籃球' }
        ],
        [
          { isEdit: false, key: '價格', value: '120' },
          { isEdit: false, key: '訂單日期', value: '2017-03-01' },
          { isEdit: false, key: '付款方式', value: '信用卡' }
        ],
        [
          { isEdit: false, key: '姓名', value: '王大明' },
          { isEdit: false, key: '性別', value: '女' },
          { isEdit: false, key: '職業', value: '學生' },
          { isEdit: false, key: '年齡', value: '100' }
        ]
      ]
    }
  },
  methods: {
    getData() {
      console.log(this.tableData)
    }
  }
}
</script>
