const proxySnippets = [
    {
        key: 'Proxy',
        prefix: 'Proxy',
        body: `const p = new Proxy($1, {
            get: function (target, key) {
                return target[key] || target.getItem(key) || undefined;
            },
            set: function (target, key, value) {
                if (key in target) {
                    return false;
                }
                return target.setItem(key, value);
            },
            deleteProperty: function (target, key) {
                if (key in target) {
                    return false;
                }
                return target.removeItem(key);
            },
            enumerate: function (target, key) {
                return target.keys();
            },
            ownKeys: function (target, key) {
                return target.keys();
            },
            has: function (target, key) {
                return key in target || target.hasItem(key);
            },
            defineProperty: function (target, key, oDesc) {
                if (oDesc && 'value' in oDesc) {
                    target.setItem(key, oDesc.value);
                }
                return target;
            },
            getOwnPropertyDescriptor: function (target, key) {
                var vValue = target.getItem(key);
                return vValue
                    ? {
                          value: vValue,
                          writable: true,
                          enumerable: true,
                          configurable: false
                      }
                    : undefined;
            }
        });`,
        description: 'Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。'
    }
];

module.exports = proxySnippets;
