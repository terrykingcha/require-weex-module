const modules = {};

export default function requireWeexModule(moduleName) {
    if (moduleName.startsWith('@weex-module/')) {
        moduleName = moduleName.split('/')[1];
    }

    const moduleKey = `__weex-module-${moduleName}__`;

    if (!modules[moduleKey]) {
        __weex_define__(`@weex-component/${moduleKey}`, (__weex_require__) => {
            modules[moduleKey] = __weex_require__(`@weex-module/${moduleName}`);
        });
    }

    return modules[moduleKey];
}