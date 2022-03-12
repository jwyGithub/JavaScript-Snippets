const fs = require('fs');
const { resolve } = require('path');
const prettier = require('prettier');

const snippetsRoot = resolve(__dirname, '../snippets/snippets.code-snippets');

const objectSnippets = require('./object.js');
const arraySnippets = require('./array.js');
const promiseSnippets = require('./promise.js');
const proxySnippets = require('./proxy.js');
const consoleSnippets = require('./console.js');

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
        promiseSnippets.forEach(item => {
            const _snippet = format(item);
            snippets = { ...snippets, ..._snippet };
        });
        proxySnippets.forEach(item => {
            const _snippet = format(item);
            snippets = { ...snippets, ..._snippet };
        });
        consoleSnippets.forEach(item => {
            const _snippet = format(item);
            snippets = { ...snippets, ..._snippet };
        });

        fs.writeFileSync(snippetsRoot, JSON.stringify(snippets, null, 4));
    } catch (error) {
        console.log(error);
    }
};

generator();
