const objectSnippets = [
    {
        key: 'Object.keys',
        prefix: 'Object.keys',
        body: `Object.keys($1).forEach((key,index) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致'
    },
    {
        key: 'Object.values',
        prefix: 'Object.values',
        body: `Object.values($1).forEach((value,index) => {});`,
        specification: 'ECMAScript 2017 (ECMA-262)',
        description: 'Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。'
    },
    {
        key: 'Object.entries',
        prefix: 'Object.entries',
        body: `Object.entries($1).forEach(([key, value], index) => {});`,
        specification: 'ECMAScript 2017 (ECMA-262)',
        description: 'Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致(区别在于 for-in 循环还会枚举原型链中的属性)。'
    },
    {
        key: 'Object.assign',
        prefix: 'Object.assign',
        body: `Object.assign({}, $1, $2);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。'
    },
    {
        key: 'Object.freeze',
        prefix: 'Object.freeze',
        body: `Object.freeze($1);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description:
            'Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。'
    },
    {
        key: 'Object.is',
        prefix: 'Object.is',
        body: `Object.is($1, $2);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Object.is() 方法判断两个值是否为同一个值。'
    },
    {
        key: 'Object.prototype.toString',
        prefix: 'Object.prototype.toString',
        body: `Object.prototype.toString.call($1);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'toString() 方法返回一个表示该对象的字符串。'
    },
    {
        key: 'Object.prototype.hasOwnProperty',
        prefix: 'Object.prototype.hasOwnProperty',
        body: `$1.hasOwnProperty($2)`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性(也就是，是否有指定的键)。'
    },
    {
        key: 'Object.getOwnPropertyDescriptor',
        prefix: 'Object.getOwnPropertyDescriptor',
        body: `Object.getOwnPropertyDescriptor($1,$2)`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。(自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性)'
    },
    {
        key: 'Object.getOwnPropertyNames',
        prefix: 'Object.getOwnPropertyNames',
        body: `Object.getOwnPropertyNames($1)`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名(包括不可枚举属性但不包括Symbol值作为名称的属性)组成的数组。'
    },
    {
        key: 'Object.defineProperty',
        prefix: 'Object.defineProperty',
        body: `
        Object.defineProperty($1, $2, {
            // 只有该属性描述符的类型可以被改变并且该属性可以从对应对象中删除,默认为 false
            configurable: true,
            // 只有在枚举相应对象上的属性时该属性显现,默认为 false
            enumerable: true,
            // 与属性关联的值。可以是任何有效的JavaScript值(数字，对象，函数等)
            value: undefined,
            // 只有与该属性相关联的值被assignment operator (en-US)改变时
            writable: true,
            // 作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
            get() {
                return $1[$2];
            },
            // 作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。
            set(value) {
                $1[$2] = value;
            }
        });`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。'
    }
];

module.exports = { type: 'Object', snippets: objectSnippets, columns: ['Snippet prefix', 'Specification', 'Description'] };

