const fs = require('fs');
const { resolve } = require('path');
const prettier = require('prettier');

const snippetsRoot = resolve(__dirname, '../snippets/snippets.code-snippets');

const $1 = [];

const prettierOptions = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'crlf',
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxSingleQuote: true,
    printWidth: 200,
    proseWrap: 'never',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    parser: 'babel'
};

const objectSnippets = [
    {
        key: 'Object.keys',
        prefix: 'Object.keys',
        body: `Object.keys($1).forEach((key,index) => {});`,
        description: 'Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致'
    },
    {
        key: 'Object.values',
        prefix: 'Object.values',
        body: `Object.values($1).forEach((value,index) => {});`,
        description: 'Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。'
    },
    {
        key: 'Object.entries',
        prefix: 'Object.entries',
        body: `Object.entries($1).forEach(([key, value], index) => {});`,
        description: 'Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。'
    },
    {
        key: 'Object.assign',
        prefix: 'Object.assign',
        body: `Object.assign($1, $2);`,
        description: 'Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。'
    },
    {
        key: 'Object.freeze',
        prefix: 'Object.freeze',
        body: `Object.freeze($1);`,
        description:
            'Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。'
    },
    {
        key: 'Object.is',
        prefix: 'Object.is',
        body: `Object.is($1, $2);`,
        description: 'Object.is() 方法判断两个值是否为同一个值。'
    },
    {
        key: 'Object.prototype.toString',
        prefix: 'Object.prototype.toString',
        body: `Object.prototype.toString.call($1);`,
        description: 'toString() 方法返回一个表示该对象的字符串。'
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
            // 与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）
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
        description: 'Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。'
    }
];

const arraySnippets = [
    {
        key: 'Array.prototype.at',
        prefix: 'Array.prototype.at',
        body: `$1.at($2);`,
        description: 'at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。'
    },
    {
        key: 'Array.prototype.concat',
        prefix: 'Array.prototype.concat',
        body: `$1.concat($2);`,
        description: 'concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。'
    },
    {
        key: 'Array.prototype.copyWithin',
        prefix: 'Array.prototype.copyWithin',
        body: `$1.copyWithin($2);`,
        description: 'copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。'
    },
    {
        key: 'Array.prototype.entries',
        prefix: 'Array.prototype.entries',
        body: `$1.entries();`,
        description: 'entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。'
    },
    {
        key: 'Array.prototype.every',
        prefix: 'Array.prototype.every',
        body: `$1.every((item, index, array) => {});`,
        description: 'every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。'
    },
    {
        key: 'Array.prototype.filter',
        prefix: 'Array.prototype.filter',
        body: `$1.filter((item, index, array) => {});`,
        description: 'filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。'
    },
    {
        key: 'Array.prototype.find',
        prefix: 'Array.prototype.find',
        body: `$1.find((item, index, array) => {});`,
        description: 'find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。'
    },
    {
        key: 'Array.prototype.findIndex',
        prefix: 'Array.prototype.findIndex',
        body: `$1.findIndex((item, index, array) => {});`,
        description: 'findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。'
    },
    {
        key: 'Array.prototype.flat',
        prefix: 'Array.prototype.flat',
        body: `$1.flat();`,
        description: 'flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。'
    },
    {
        key: 'Array.prototype.flatMap',
        prefix: 'Array.prototype.flatMap',
        body: `$1.flatMap((item, index, array) => {});`,
        description: 'flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。'
    },
    {
        key: 'Array.prototype.forEach',
        prefix: 'Array.prototype.forEach',
        body: `$1.forEach((item, index, array) => {});`,
        description: 'forEach() 方法对数组的每个元素执行一次给定的函数。'
    },
    {
        key: 'Array.from',
        prefix: 'Array.from',
        body: `Array.from($1, (item) => {});`,
        description: 'Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。'
    },
    {
        key: 'Array.isArray',
        prefix: 'Array.isArray',
        body: `Array.isArray($1);`,
        description: 'Array.isArray() 确定传递的值是否为数组。'
    },
    {
        key: 'Array.prototype.includes',
        prefix: 'Array.prototype.includes',
        body: `$1.includes($2);`,
        description: 'includes()方法确定数组的条目中是否包含某个值，并相应地返回true或false'
    },
    {
        key: 'Array.prototype.indexOf',
        prefix: 'Array.prototype.indexOf',
        body: `$1.indexOf($2);`,
        description: 'indexOf()方法返回数组中可以找到给定元素的第一个索引，如果不存在，则返回-1'
    },
    {
        key: 'Array.prototype.join',
        prefix: 'Array.prototype.join',
        body: `$1.join($2);`,
        description: 'indexOf()方法通过连接数组（或类似数组的对象）中的所有元素（用逗号或指定的分隔符字符串分隔）来创建并返回一个新字符串。如果数组只有一个项目，则在不使用分隔符的情况下返回该项目'
    },
    {
        key: 'Array.prototype.keys',
        prefix: 'Array.prototype.keys',
        body: `$1.keys();`,
        description: 'keys方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键。'
    },
    {
        key: 'Array.prototype.keys',
        prefix: 'Array.prototype.keys',
        body: `$1.lastIndexOf($2);`,
        description: 'lastIndexOf方法返回可在数组中找到给定元素的最后一个索引，如果不存在，则返回 -1。向后搜索数组，从 开始。fromIndex'
    }
];

const format = ({ key, prefix, body, description }) => {
    return {
        [key]: {
            prefix,
            body: prettier.format(body, prettierOptions),
            description
        }
    };
};

const generator = () => {
    try {
        let snippets = {};
        objectSnippets.forEach(item => {
            const _snippet = format(item);
            snippets = { ...snippets, ..._snippet };
        });
        arraySnippets.forEach(item => {
            const _snippet = format(item);
            snippets = { ...snippets, ..._snippet };
        });

        fs.writeFileSync(snippetsRoot, JSON.stringify(snippets, null, 4));
    } catch (error) {
        console.log(error);
    }
};

generator();
