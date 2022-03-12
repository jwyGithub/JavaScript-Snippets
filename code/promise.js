const promiseSnippets = [
    {
        key: 'Promise',
        prefix: 'Promise-then-catch-fially',
        body: `new Promise((resolve, reject) => {
    
        })
            .then(() => {
        
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
        
            });`,
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
        description: 'Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。'
    },
    {
        key: 'Promise.allSettled',
        prefix: 'Promise.allSettled',
        body: `Promise.allSettled($1).then(results => results.forEach(result => console.log(result.status)));`,
        description: '该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。'
    },
    {
        key: 'Promise.race',
        prefix: 'Promise.race',
        body: `Promise.race($1).then(value => {
            console.log(value);
        });`,
        description: 'Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。'
    }
];

module.exports = promiseSnippets;
