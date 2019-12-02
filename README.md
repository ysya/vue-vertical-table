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
<VerticalTable :table-data="tableData" :table-style="tableStyle" />
```

### tableData

```
tableData: [
  {
    name: 'row1',
    children: [
      { isEdit: false, key: '單號', value: '1001' },
      { isEdit: true, type: 'input', key: '商品名稱', value: '籃球' }
    ]
  }
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
