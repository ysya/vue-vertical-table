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
      { isEdit: false, key: 'Order No.', value: '1001' },
      { isEdit: true, type: 'input', key: 'Product Name', value: 'Basketball' },
      { isEdit: true, type: 'checkbox', key: 'Checked', value: false }
    ]
  },
  ...
]
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
      { name: 'Height', value: '160', isEdit: true, type: 'input'},
      { name: 'Weight', value: '45', isEdit: true, type: 'input' }
    ]
  },
  ...
]
```

#### Input

| prop   | type     | value |
| ------ | -------- | ----- |
| isEdit | boolean  | -     |
| type   | String   | input |
| key    | String   | -     |
| value  | String   | -     |

#### Checkbox

| prop   | type     | value |
| ------ | -------- | ----- |
| isEdit | boolean  | -     |
| type   | String   | checkbox |
| key    | String   | -     |
| value  | boolean  | -     |

## Demo

[Click here](https://frank.shellwe.me/vue-vertical-table)

## License

[MIT](https://github.com/ysya/vue-vertical-table/blob/master/LICENSE)

Copyright (c) 2019-present ysya
