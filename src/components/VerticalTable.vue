<template>
  <div class="table-box" :style="styleObject">
    <table class="table-body">
      <tr
        v-for="(row, outerIndex) in tableData"
        :key="outerIndex"
        class="tr-body"
      >
        <div
          v-for="(col, innerIndex) in row"
          :key="innerIndex"
          class="td-box"
          :style="{ flex: '0 0 ' + 100 / row.length + '%' }"
        >
          <td class="td-key">{{ col.key }}</td>
          <template v-if="col.isEdit === false">
            <td class="td-value">{{ col.value }}</td>
          </template>
          <template v-if="col.isEdit === true">
            <td class="td-value">
              <el-input v-model="col.value" clearable />
            </td>
          </template>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VerticalTable',
  // eslint-disable-next-line
  props: ['tableData', 'tableStyle'],
  data() {
    return {
      styleObject: {}
    }
  },
  computed: {
    rowCount: function() {
      return Math.ceil(this.tableData.length / 2)
    }
  },
  created() {
    this.styleObject = this.tableStyle
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.table-box {
  .table-body {
    width: 100%;
    font-size: 12px;
    color: #71787e;
    border: 1px solid #e6eaee;
    .tr-body {
      display: flex;
      border-bottom: 1px solid #e6eaee;

      &:last-child {
        border-bottom: 0;
      }

      .td-box {
        display: flex;
        &:first-child {
          border-left: 0;
        }
        .td-key {
          padding: 10px;
          line-height: 20px;
          text-align: center;
          background-color: #eff3f6;
          color: #393c3e;
        }
        .td-value {
          flex: 1 0;
          // line-height: 20px;
          // padding: 10px 20px;
        }
      }
    }
  }

  tr td {
    // border: 1px solid #e6eaee;
    // width: 150px;
    widows: 100%;
    // height: 35px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 8px;
  }
}
</style>
<style lang="scss">
.td-value {
  .el-input {
    input {
      border-style: none;
    }
  }
}
</style>
