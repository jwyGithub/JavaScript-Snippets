const objectSnippets = require('./object.js');
const arraySnippets = require('./array.js');
const promiseSnippets = require('./promise.js');
const proxySnippets = require('./proxy.js');
const consoleSnippets = require('./console.js');

let str = '';

[...consoleSnippets, ...arraySnippets, ...objectSnippets, ...promiseSnippets, ...proxySnippets].forEach((item, index, array) => {
    str += `| \`${item.prefix}\` | ${item.description} |\r\n`;
});

console.log(str, `str`);
