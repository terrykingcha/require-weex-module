# weex-require-polyfill

## usage

```bash
npm install weex-require-polyfill
```

```javascript
var __weex_require__ = require('weex-require-polyfill')
var modal = __weex_require__('@weex-module/modal')
modal.toast({message: "success"})
```

For more information, please see [__weex_require__](https://github.com/alibaba/weex/blob/dev/doc/specs/js-bundle-format.md#__weex_require__name-string-object)