# gs_convert2_json
convert xlsx to json

## xlsx's format
Content in 'translation.en.xlsx':

| Item name        | Chinese         | English      |
| ---------------- | --------------- | ------------ |
| export default { |                 |              |
| item1            | ‘你好’          | ‘Hello’      |
| item2            | '再见'          | ‘Bye’        |
| item3,           |                 |              |
| item4            | ['我'， ‘吃饭’] | ['I', 'eat'] |
| }                |                 |              |

Changes as 'my.en.json':
```js
export default {
  item1: 'Hello',
  item2: 'Bye',
  item3,
  item4: ['I', 'eat']
}
```

#### Use method:
`convert2Json('path/translation.en.xlsx', 'path/my.en.json');`
