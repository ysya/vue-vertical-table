<template>
  <div class="table-box" :style="styleObject">
    <table class="table-body">
      <tr v-for="(row, outerIndex) in tData" :key="outerIndex" class="tr-body">
        <div
          v-for="(col, innerIndex) in row"
          :key="innerIndex"
          class="td-box"
          :style="{ flex: '0 0 ' + 100 / row.length + '%' }"
        >
          <td class="td-key">{{ col.key }}</td>
          <template v-if="!col.isEdit">
            <td class="td-value">{{ col.value }}</td>
          </template>
          <template v-if="col.isEdit">
            <template v-if="col.type === 'input'">
              <td class="td-value">
                <input v-model="col.value">
              </td>
            </template>
          </template>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VerticalTable',
  // props: ['tableData', 'tableStyle'],
  props: {
    // eslint-disable-next-line
    value: null,
    multiRow: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: Array,
      default: () => []
    },
    tableStyle: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      styleObject: {},
      currentValue: this.value
    }
  },
  computed: {
    rowCount: function() {
      return Math.ceil(this.tableData.length / 2)
    },
    tData: function() {
      return this.tableData.map(item => {
        return item.children
      })
    }
  },
  watch: {
    value(value) {
      if (value === this.currentValue) return
      this.currentValue = value
    },
    tableStyle(tableStyle) {
      if (tableStyle === this.styleObject) return
      this.styleObject = tableStyle
    }
  },
  created() {
    this.styleObject = this.tableStyle
    // console.log(this.tData)
  },
  mounted() {
    this.$emit('input', this.tableData)
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
          input {
            border-style: none;
            background: rgba(255, 255, 255, 0);
            padding: 0;
            line-height: 32px;
            height: 32px;
            font-size: inherit;
            width: 100%;
            outline: none;
          }

          // line-height: 20px;
          // padding: 10px 20px;
        }
      }
    }
  }

  tr td {
    // border: 1px solid #e6eaee;
    // width: 150px;
    // width: 100%;
    // height: 35px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 8px;
  }
}
</style>
