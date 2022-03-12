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

let arrStr = `<table border style="font-size:12px;"><tr>
<td width="200">snippet prefix</td>
<td width="200">function</td>
<td>Description</td>
</tr>`;

importSnippets.forEach(item => {
    arrStr += `<tr>
                    <td width='200' style="color:#1296db;font-weight:bold">${item.prefix}</td>
                    <td width='200' style="color:#1296db;font-weight:bold">${item.key}</td>
                    <td>${item.description}</td>
                </tr>`;
});

arrStr += '</table>';

console.log(arrStr, `arrStr`);
