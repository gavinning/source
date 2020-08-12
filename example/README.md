# Source

### Install
```
npm i @4a/source
```

### Usage
```js
import source from '@4a/source'


// 查找来源
source.getFrom()

// 查找特定字段
source.get('field')

// 查找search对象
source.query()

// 查找referrer对象
source.referrerQuery()


// 查找百度搜索关键字
source.getBaiduKeyword()

// 查找搜狗搜索关键字
source.getSogouKeyword()
```


### Example
```sh
npm run dev
```