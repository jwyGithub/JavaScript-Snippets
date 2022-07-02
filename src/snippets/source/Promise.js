const promiseSnippets = [
    {
        key: 'Promise',
        prefix: 'Promise-then-catch-finally',
        body: `new Promise((resolve, reject) => {
    
        })
            .then(() => {
        
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
        
            });`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。'
    },
    {
        key: 'Promise.all',
        prefix: 'Promise.all',
        body: `Promise.all($1)
        .then(res => {
            console.log(res, 'res');
        })
        .catch(err => {
            console.log(err, 'err');
        })
        .finally(() => {
            
        });`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description:
            'Promise.all() 方法接收一个promise的iterable类型(注:Array，Map，Set都属于ES6的iterable类型)的输入，并且只返回一个Promise实例， 那个输入的所有promise的resolve回调的结果是一个数组。这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息'
    },
    {
        key: 'Promise.allSettled',
        prefix: 'Promise.allSettled',
        body: `Promise.allSettled($1).then(results => results.forEach(result => console.log(result.status)));`,
        specification: 'Promise.allSettled() (TC39第4阶段草案)',
        description:
            '该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。'
    },
    {
        key: 'Promise.any',
        prefix: 'Promise.any',
        body: `Promise.any($1).then(result => console.log(result));`,
        specification: 'Promise.any() (TC39第4阶段草案)',
        description:
            'Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。'
    },
    {
        key: 'Promise.race',
        prefix: 'Promise.race',
        body: `Promise.race($1).then(value => {
            console.log(value);
        });`,
        specification: 'ECMAScript 2015 (6th Edition, ECMA-262)',
        description: 'Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。'
    }
];

module.exports = {
    type: 'Promise',
    snippets: promiseSnippets,
    columns: ['Snippet prefix', 'Specification', 'Description']
};

