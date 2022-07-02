const arraySnippets = [
    {
        key: 'Array.prototype.at',
        prefix: 'Array.prototype.at',
        body: `const arrayItem = $1.at($2);`,
        specification: 'Stage 4 Draft / January 24, 2022',
        description: 'at()方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。'
    },
    {
        key: 'Array.prototype.concat',
        prefix: 'Array.prototype.concat',
        body: `const array = $1.concat($2);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。'
    },
    {
        key: 'Array.prototype.copyWithin',
        prefix: 'Array.prototype.copyWithin',
        body: `const array = $1.copyWithin($2);`,
        specification: 'ECMAScript 2016 (ECMA-262)',
        description: 'copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。'
    },
    {
        key: 'Array.prototype.entries',
        prefix: 'Array.prototype.entries',
        body: `const iterator = $1.entries();
        console.log(iterator.next().value);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。'
    },
    {
        key: 'Array.prototype.every',
        prefix: 'Array.prototype.every',
        body: `const flag = $1.every((item, index, array) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。'
    },
    {
        key: 'Array.prototype.filter',
        prefix: 'Array.prototype.filter',
        body: `const array = $1.filter((item, index, array) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。'
    },
    {
        key: 'Array.prototype.find',
        prefix: 'Array.prototype.find',
        body: `const findResult = $1.find((item, index, array) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。'
    },
    {
        key: 'Array.prototype.findIndex',
        prefix: 'Array.prototype.findIndex',
        body: `const findIndex = $1.findIndex((item, index, array) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。'
    },
    {
        key: 'Array.prototype.flat',
        prefix: 'Array.prototype.flat',
        body: `const result = $1.flat();`,
        specification: 'ECMAScript 2019',
        description: 'flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。'
    },
    {
        key: 'Array.prototype.flatMap',
        prefix: 'Array.prototype.flatMap',
        body: `const result = $1.flatMap((item, index, array) => {});`,
        specification: 'ECMAScript (ECMA-262)',
        description: 'flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。'
    },
    {
        key: 'Array.prototype.forEach',
        prefix: 'Array.prototype.forEach',
        body: `$1.forEach((item, index, array) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'forEach() 方法对数组的每个元素执行一次给定的函数。'
    },
    {
        key: 'Array.from',
        prefix: 'Array.from',
        body: `const result = Array.from($1, (item) => {});`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。'
    },
    {
        key: 'Array.isArray',
        prefix: 'Array.isArray',
        body: `const flag = Array.isArray($1);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Array.isArray() 确定传递的值是否为数组。'
    },
    {
        key: 'Array.prototype.includes',
        prefix: 'Array.prototype.includes',
        body: `const flag = $1.includes($2);`,
        specification: 'ECMAScript 2016 (ECMA-262)',
        description: 'includes()方法确定数组的条目中是否包含某个值，并相应地返回true或false'
    },
    {
        key: 'Array.prototype.indexOf',
        prefix: 'Array.prototype.indexOf',
        body: `const index = $1.indexOf($2);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'indexOf()方法返回数组中可以找到给定元素的第一个索引，如果不存在，则返回-1'
    },
    {
        key: 'Array.prototype.join',
        prefix: 'Array.prototype.join',
        body: `const str = $1.join($2);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'join()方法通过连接数组(或类似数组的对象)中的所有元素(用逗号或指定的分隔符字符串分隔)来创建并返回一个新字符串。如果数组只有一个项目，则在不使用分隔符的情况下返回该项目'
    },
    {
        key: 'Array.prototype.keys',
        prefix: 'Array.prototype.keys',
        body: `const iterator = $1.keys();
        for (const key of iterator) {
            console.log(key);
        }`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'keys()方法返回一个包含数组中每个索引键的Array Iterator对象。'
    },
    {
        key: 'Array.prototype.lastIndexOf',
        prefix: 'Array.prototype.lastIndexOf',
        body: `const index = $1.lastIndexOf($2,fromIndex);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'lastIndexOf()方法返回指定元素(也即有效的 JavaScript 值或变量)在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。'
    },
    {
        key: 'Array.prototype.map',
        prefix: 'Array.prototype.map',
        body: `const result = $1.map((item, index, array) => {
            console.log(item, 'item');
            console.log(index, 'index');
            console.log(array, 'array');
        }, this);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'map()方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。'
    },
    {
        key: 'Array.prototype.of',
        prefix: 'Array.prototype.of',
        body: `const arr = Array.of(1, 2, 3);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。'
    },
    {
        key: 'Array.prototype.pop',
        prefix: 'Array.prototype.pop',
        body: `const result = $1.pop();`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。'
    },
    {
        key: 'Array.prototype.push',
        prefix: 'Array.prototype.push',
        body: `const result = $1.push('$2');`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'push()方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度'
    },
    {
        key: 'Array.prototype.reduce',
        prefix: 'Array.prototype.reduce',
        body: `const result = $1.reduce((pre, cur, index, array) => {
            return pre;
        }, []);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'reduce()方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值'
    },
    {
        key: 'Array.prototype.reduceRight',
        prefix: 'Array.prototype.reduceRight',
        body: `const result = $1.reduceRight((acc, cur, idx, arr) => {
            return acc;
        }, []);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'reduceRight()方法接受一个函数作为累加器(accumulator)和数组的每个值(从右到左)将其减少为单个值'
    },
    {
        key: 'Array.prototype.reverse',
        prefix: 'Array.prototype.reverse',
        body: `const result = $1.reverse();`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'reverse()方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。'
    },
    {
        key: 'Array.prototype.shift',
        prefix: 'Array.prototype.shift',
        body: `const result = $1.shift();`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。'
    },
    {
        key: 'Array.prototype.slice',
        prefix: 'Array.prototype.slice',
        body: `const result = $1.slice('begin','end');`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝(包括 begin，不包括end)。原始数组不会被改变。'
    },
    {
        key: 'Array.prototype.some',
        prefix: 'Array.prototype.some',
        body: `const flag = $1.some((item,index,array) => {},thisArg);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'some()方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。'
    },
    {
        key: 'Array.prototype.sort',
        prefix: 'Array.prototype.sort',
        body: `const flag = $1.sort((a, b) => a - b);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'sort() 方法用原地算法对数组的元素进行排序，并返回数组。'
    },
    {
        key: 'Array.prototype.splice',
        prefix: 'Array.prototype.splice',
        body: `const flag = $1.splice('start', 'deleteCount', 'item');`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。'
    },
    {
        key: 'Array.prototype.unshift',
        prefix: 'Array.prototype.unshift',
        body: `const length = $1.unshift($2);`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'unshift()方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。'
    }
];

module.exports = {
    type: 'Array',
    snippets: arraySnippets,
    columns: ['Snippet prefix', 'Specification', 'Description']
};

