# vue-vertical-table

## Install

```
npm i vue-vertical-table
```

## Use
```
import VerticalTable from 'vue-vertical-table'
import 'vue-vertical-table/lib/vertical-table.css'
```

```
<VerticalTable v-model="data" :table-data="vTableData" :table-style="tableStyle" />
<CrossTable v-model="data" :table-data="crossTableData" :table-style="tableStyle" />
```

### tableData

```
vTableData: [
  {
    name: 'row1',
    children: [
      { isEdit: false, key: '單號', value: '1001' },
      { isEdit: true, type: 'input', key: '商品名稱', value: '籃球' }
    ]
  },
  ...
]
crossTableData: [
  {
    title: 'John',
    children: [
      { name: 'Gender', value: 'M', isEdit: true, type: 'input' },
      { name: 'Age', value: '18', isEdit: true, type: 'input' },
      { name: 'Height', value: '200', isEdit: true, type: 'input' },
      { name: 'Weight', value: '60', isEdit: true, type: 'input' }
    ]
  },
  {
    title: 'Amy',
    children: [
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
  ...
]
```

| prop   | type     | value |
| ------ | -------- | ----- |
| isEdit | boolean  | -     |
| type   | String   | input |
| key    | String   | -     |
| value  | String - |

## Demo

[Click here](https://frank.shellwe.me/vue-vertical-table)

## License

[MIT](https://github.com/ysya/vue-vertical-table/blob/master/LICENSE)

Copyright (c) 2019-present ysya
