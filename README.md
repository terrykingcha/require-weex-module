# weex-require-polyfill

[![npm version](https://img.shields.io/npm/v/weex-require-polyfill.svg)](https://www.npmjs.com/package/weex-require-polyfill)
[![CircleCI](https://circleci.com/gh/terrykingcha/weex-require-polyfill/tree/master.svg?style=svg)](https://circleci.com/gh/terrykingcha/weex-require-polyfill/tree/master)

## usage

```bash
npm install weex-require-polyfill
```

```javascript
var __weex_require__ = require('weex-require-polyfill')
var modal = __weex_require__('@weex-module/modal')
modal.toast({message: "success"})
```

For more information, please see [weex_require](https://github.com/alibaba/weex/blob/dev/doc/specs/js-bundle-format.md#__weex_require__name-string-object)