# vue-vertical-table

## Install

```
npm i ysya/vue-vertical-table
```

## Use

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

## License

[MIT](https://github.com/ysya/vue-vertical-table/blob/master/LICENSE)

Copyright (c) 2019-present ysya
