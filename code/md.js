const objectSnippets = require('./object.js');
const arraySnippets = require('./array.js');
const promiseSnippets = require('./promise.js');
const proxySnippets = require('./proxy.js');
const consoleSnippets = require('./console.js');
const importSnippets = require('./import.js');

let str = '';

[...consoleSnippets, ...arraySnippets, ...objectSnippets, ...promiseSnippets, ...proxySnippets].forEach((item, index, array) => {
    str += `| \`${item.prefix}\` | ${item.description} |\r\n`;
});

let arrStr = `<table border>
                <tr style="font-weight:bold">
                    <td width="200">Snippet prefix</td>
                    <td width="200">Specification</td>
                    <td>Description</td>
                </tr>`;

importSnippets.forEach(item => {
    arrStr += `<tr style="color:#1296db;">
                    <td width='200'>${item.prefix}</td>
                    <td width='200'>${item.specification || ''}</td>
                    <td>${item.description}</td>
                </tr>`;
});

arrStr += '</table>';

console.log(arrStr, `arrStr`);
