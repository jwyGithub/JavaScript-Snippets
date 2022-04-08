const requireSnippets = [
    {
        key: 'const module = require(module)',
        prefix: 'rmm',
        body: `const $1 = require('$1');`,
        specification: '',
        description: 'commonJS引入默认模块'
    },
    {
        key: 'const {  } = require(module)',
        prefix: 'rmm',
        body: `const {  } = require('$1');`,
        specification: '',
        description: 'commonJS按需引入模块'
    }
];

module.exports = { type: 'require', snippets: requireSnippets, columns: ['Snippet prefix', 'Code', 'Description'] };

