const arraySnippets = [
    {
        key: 'Array.prototype.at',
        prefix: 'Array.prototype.at',
        body: `const arrayItem = $1.at($2);`,
        description: 'at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。'
    },
    {
        key: 'Array.prototype.concat',
        prefix: 'Array.prototype.concat',
        body: `const array = $1.concat($2);`,
        description: 'concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。'
    },
    {
        key: 'Array.prototype.copyWithin',
        prefix: 'Array.prototype.copyWithin',
        body: `const array = $1.copyWithin($2);`,
        description: 'copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。'
    },
    {
        key: 'Array.prototype.entries',
        prefix: 'Array.prototype.entries',
        body: `const iterator = $1.entries();
        console.log(iterator.next().value);`,
        description: 'entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。'
    },
    {
        key: 'Array.prototype.every',
        prefix: 'Array.prototype.every',
        body: `const flag = $1.every((item, index, array) => {});`,
        description: 'every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。'
    },
    {
        key: 'Array.prototype.filter',
        prefix: 'Array.prototype.filter',
        body: `const array = $1.filter((item, index, array) => {});`,
        description: 'filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。'
    },
    {
        key: 'Array.prototype.find',
        prefix: 'Array.prototype.find',
        body: `const findResult = $1.find((item, index, array) => {});`,
        description: 'find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。'
    },
    {
        key: 'Array.prototype.findIndex',
        prefix: 'Array.prototype.findIndex',
        body: `const findIndex = $1.findIndex((item, index, array) => {});`,
        description: 'findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。'
    },
    {
        key: 'Array.prototype.flat',
        prefix: 'Array.prototype.flat',
        body: `const result = $1.flat();`,
        description: 'flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。'
    },
    {
        key: 'Array.prototype.flatMap',
        prefix: 'Array.prototype.flatMap',
        body: `const result = $1.flatMap((item, index, array) => {});`,
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
        body: `const result = Array.from($1, (item) => {});`,
        description: 'Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。'
    },
    {
        key: 'Array.isArray',
        prefix: 'Array.isArray',
        body: `const flag = Array.isArray($1);`,
        description: 'Array.isArray() 确定传递的值是否为数组。'
    },
    {
        key: 'Array.prototype.includes',
        prefix: 'Array.prototype.includes',
        body: `const flag = $1.includes($2);`,
        description: 'includes()方法确定数组的条目中是否包含某个值，并相应地返回true或false'
    },
    {
        key: 'Array.prototype.indexOf',
        prefix: 'Array.prototype.indexOf',
        body: `const index = $1.indexOf($2);`,
        description: 'indexOf()方法返回数组中可以找到给定元素的第一个索引，如果不存在，则返回-1'
    },
    {
        key: 'Array.prototype.join',
        prefix: 'Array.prototype.join',
        body: `const str = $1.join($2);`,
        description: 'join()方法通过连接数组（或类似数组的对象）中的所有元素（用逗号或指定的分隔符字符串分隔）来创建并返回一个新字符串。如果数组只有一个项目，则在不使用分隔符的情况下返回该项目'
    },
    {
        key: 'Array.prototype.keys',
        prefix: 'Array.prototype.keys',
        body: `const iterator = $1.keys();
        for (const key of iterator) {
            console.log(key);
        }`,
        description: 'keys方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键。'
    },
    {
        key: 'Array.prototype.lastIndexOf',
        prefix: 'Array.prototype.lastIndexOf',
        body: `const index = $1.lastIndexOf($2);`,
        description: 'lastIndexOf方法返回可在数组中找到给定元素的最后一个索引，如果不存在，则返回 -1。向后搜索数组，从 开始。fromIndex'
    },
    {
        key: 'Array.prototype.map',
        prefix: 'Array.prototype.map',
        body: `const result = $1.map((item, index, array) => {
            console.log(item, 'item');
            console.log(index, 'index');
            console.log(array, 'array');
        }, this);`,
        description: 'map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。'
    },
    {
        key: 'Array.prototype.reduce',
        prefix: 'Array.prototype.reduce',
        body: `const result = $1.reduce((pre, cur, index, array) => {
            return pre;
        }, []);`,
        description: 'reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。'
    },
    {
        key: 'Array.prototype.reduceRight',
        prefix: 'Array.prototype.reduceRight',
        body: `const result = $1.reduceRight((acc, cur, idx, arr) => {
            return acc;
        }, []);`,
        description: 'reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。'
    }
];

module.exports = arraySnippets;
