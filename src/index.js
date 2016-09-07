const modules = {}

export default function weexRequirePolyfill (moduleName) {
  if (global.__weex_require__) {
    return global.__weex_require__(moduleName)
  }
  else {
    moduleName = moduleName.split('/')[1]
    const moduleKey = `__weex-module-${moduleName}__`

    if (!modules[moduleKey]) {
      // eslint-disable-next-line
      __weex_define__(`@weex-component/${moduleKey}`, (__weex_require__) => {
        modules[moduleKey] = __weex_require__(`@weex-module/${moduleName}`)
      })
    }

    return modules[moduleKey]
  }
}
