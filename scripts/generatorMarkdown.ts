import * as fs from 'fs';
import { resolve } from 'path';
import { prettierCode, SOURCE_CODE_ROOT } from './generatorSnippets';

function tableStr(content: string, columns: any[]) {
    return `<table border>
                <tr style="font-weight:bold">
                    ${(() => {
                        return columns.reduce((pre, cur) => {
                            if (cur === 'Description') {
                                pre += `<td>${cur}</td>`;
                            } else {
                                pre += `<td width="200">${cur}</td>`;
                            }
                            return pre;
                        }, '');
                    })()}
                </tr>
            ${content}
            </table><br/>`;
}

function trStr(content: string) {
    return `<tr style="color: #1296db">${content}</tr>`;
}

function tdStr(arrContent: any[]) {
    return arrContent.reduce((pre, cur, index, array) => {
        return pre + `<td>${cur}</td>`;
    }, '');
}

const keyMap = new Map([
    ['Code', 'key'],
    ['Snippet prefix', 'prefix'],
    ['body', 'body'],
    ['Specification', 'specification'],
    ['Description', 'description']
]);

function htmlMd({ type: _type, snippets, columns }: any, type: any) {
    return (
        '\n' +
        `> ${_type}` +
        '\n' +
        tableStr(
            snippets.reduce((pre: string, item: { [x: string]: any; prefix: any; description: any }, index: any, array: any) => {
                return pre + trStr(tdStr([item.prefix, item[keyMap.get(columns[1])] || '', item.description]));
            }, ''),
            columns
        )
    );
}

function markdownBody(body: string) {
    return `# JavaScript Snippets

> JavaScript Snippets for MDN and Lib

<p align="center">
  <img src="https://images.cnblogs.com/cnblogs_com/jwyblogs/1576071/o_220312063215_javascript.png" alt="icon">
</p>
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self">
    <img src="https://img.shields.io/visual-studio-marketplace/i/jwy.javascript-snippets-self?style=square" alt="">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self">
    <img src="https://img.shields.io/visual-studio-marketplace/d/jwy.javascript-snippets-self?style=square" alt="">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jwy.javascript-snippets-self">
    <img src="https://img.shields.io/visual-studio-marketplace/stars/jwy.javascript-snippets-self?style=square" alt="">
  </a>
  <a href="https://github.com/jwyGithub/JavaScript-Snippets/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jwyGithub/JavaScript-Snippets?style=square" alt="">
  </a>
</p>

## Snippets

${body}

### Supported languages

-   javascript (.js)
-   typescript (.ts)
-   javascriptreact (.jsx)
-   typescripereact (.tsx)
`;
}

try {
    const mdContent = fs.readdirSync(SOURCE_CODE_ROOT, { withFileTypes: true }).reduce((pre, item) => {
        const path = resolve(__dirname, SOURCE_CODE_ROOT, item.name);
        return pre + htmlMd(require(path), item.name) + '\n';
    }, '');

    fs.writeFileSync(resolve(__dirname, '../README.md'), prettierCode(markdownBody(prettierCode(mdContent, 'html')), 'markdown'));
} catch (error) {
    console.log(error);
}

