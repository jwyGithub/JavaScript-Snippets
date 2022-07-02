const importSnippets = [
    {
        key: "import moduleName from 'module'",
        prefix: 'imm',
        body: `import $1 from '$2';`,
        specification: '',
        description: 'ES module 引入默认模块'
    },
    {
        key: 'import { module } from module',
        prefix: 'imm',
        body: `import { $1 } from '$2';`,
        description: 'ES module 按需引入模块'
    },
    {
        key: "import * as module from 'module'",
        prefix: 'imam',
        body: `import * as $1 from '$2';`,
        specification: '',
        description: 'ES module 引入全部模块'
    }
];

module.exports = {
    type: 'import',
    snippets: importSnippets,
    columns: ['Snippet prefix', 'Code', 'Description']
};

