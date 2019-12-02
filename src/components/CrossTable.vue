<template>
  <div class="table-box" :style="styleObject">
    <table class="table-body" :rules="tableRules">
      <thead class="table-thead">
        <tr class="tr-body">
          <th />
          <th v-for="(thead, tIndex) in tTitle" :key="'title' + tIndex">
            {{ thead }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: 以最長陣列判斷產生多少tr -->
        <tr
          v-for="(rowTitle, rowTitleIndex) in Object.values(tData[0]).map(
            item => item.name
          )"
          :key="'rowTitle' + rowTitleIndex"
          class="tr-body"
        >
          <td class="td-title">
            {{ rowTitle }}
          </td>

          <td
            v-for="(col, outerIndex) in tData"
            :key="'outerIndex' + outerIndex"
          >
            <template v-if="Object.values(col)[rowTitleIndex].isEdit">
              <template
                v-if="Object.values(col)[rowTitleIndex].type === 'input'"
              >
                <input v-model="Object.values(col)[rowTitleIndex].value">
              </template>
            </template>
            <template v-if="!Object.values(col)[rowTitleIndex].isEdit">
              {{ Object.values(col)[rowTitleIndex].value }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CrossTable',
  props: {
    // eslint-disable-next-line
    value: null,
    tableRules: {
      type: String,
      default: 'cols'
    },
    tableData: {
      type: Array,
      default: () => {},
      require: true
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
    tData: function() {
      return Object.values(this.tableData).map(item => {
        return item.children
      })
    },
    tTitle: function() {
      return this.tableData.map(item => {
        return item.title
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
    // console.group('Data:')
    // console.log(this.tTitle)
    // console.log(this.tData)
    // console.groupEnd()
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
    .table-thead {
      .tr-body {
        display: flex;
        border-bottom: 1px solid #e6eaee;
        th {
          flex: 1 0;
          padding: 10px;
          line-height: 20px;
          text-align: center;
          background-color: #eff3f6;
          color: #393c3e;
        }
      }
    }
    .tr-body {
      display: flex;
      border-bottom: 1px solid #e6eaee;
      .td-title {
        background-color: #eff3f6;
        color: #393c3e;
        padding-top: 10px;
      }
      td {
        flex: 1 0;
        text-align: center;
        word-break: break-all;

        input {
          border-style: none;
          background: rgba(255, 255, 255, 0);
          padding: 0 0 0 10px;
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
</style>
