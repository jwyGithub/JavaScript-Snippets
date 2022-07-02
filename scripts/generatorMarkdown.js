"use strict";
exports.__esModule = true;
var fs = require("fs");
var path_1 = require("path");
var generatorSnippets_1 = require("./generatorSnippets");
function tableStr(content, columns) {
    return "<table border>\n                <tr style=\"font-weight:bold\">\n                    ".concat((function () {
        return columns.reduce(function (pre, cur) {
            if (cur === 'Description') {
                pre += "<td>".concat(cur, "</td>");
            }
            else {
                pre += "<td width=\"200\">".concat(cur, "</td>");
            }
            return pre;
        }, '');
    })(), "\n                </tr>\n            ").concat(content, "\n            </table><br/>");
}
function trStr(content) {
    return "<tr style=\"color: #1296db\">".concat(content, "</tr>");
}
function tdStr(arrContent) {
    return arrContent.reduce(function (pre, cur, index, array) {
        return pre + "<td>".concat(cur, "</td>");
    }, '');
}
var keyMap = new Map([
    ['Code', 'key'],
    ['Snippet prefix', 'prefix'],
    ['body', 'body'],
    ['Specification', 'specification'],
    ['Description', 'description']
]);
function htmlMd(_a, type) {
    var _type = _a.type, snippets = _a.snippets, columns = _a.columns;
    return ('\n' +
        "> ".concat(_type) +
        '\n' +
        tableStr(snippets.reduce(function (pre, item, index, array) {
            return pre + trStr(tdStr([item.prefix, item[keyMap.get(columns[1])] || '', item.description]));
        }, ''), columns));
}
function markdownBody(body) {
    return "# JavaScript Snippets\n\n> JavaScript Snippets for MDN and Lib\n\n<p align=\"center\">\n  <img src=\"https://images.cnblogs.com/cnblogs_com/jwyblogs/1576071/o_220312063215_javascript.png\" alt=\"icon\">\n</p>\n<p align=\"center\">\n  <a href=\"https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self\">\n    <img src=\"https://img.shields.io/visual-studio-marketplace/i/jwy.javascript-snippets-self?style=square\" alt=\"\">\n  </a>\n  <a href=\"https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self\">\n    <img src=\"https://img.shields.io/visual-studio-marketplace/d/jwy.javascript-snippets-self?style=square\" alt=\"\">\n  </a>\n  <a href=\"https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self\">\n    <img src=\"https://img.shields.io/visual-studio-marketplace/stars/jwy.javascript-snippets-self?style=square\" alt=\"\">\n  </a>\n  <a href=\"https://github.com/jwyGithub/JavaScript-Snippets/blob/main/LICENSE\">\n    <img src=\"https://img.shields.io/github/license/jwyGithub/JavaScript-Snippets?style=square\" alt=\"\">\n  </a>\n</p>\n\n## Snippets\n\n".concat(body, "\n\n### Supported languages\n\n-   javascript (.js)\n-   typescript (.ts)\n-   javascriptreact (.jsx)\n-   typescripereact (.tsx)\n");
}
try {
    var mdContent = fs.readdirSync(generatorSnippets_1.SOURCE_CODE_ROOT, { withFileTypes: true }).reduce(function (pre, item) {
        var path = (0, path_1.resolve)(__dirname, generatorSnippets_1.SOURCE_CODE_ROOT, item.name);
        return pre + htmlMd(require(path), item.name) + '\n';
    }, '');
    fs.writeFileSync((0, path_1.resolve)(__dirname, '../README.md'), (0, generatorSnippets_1.prettierCode)(markdownBody((0, generatorSnippets_1.prettierCode)(mdContent, 'html')), 'markdown'));
}
catch (error) {
    console.log(error);
}
