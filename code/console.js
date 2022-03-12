const consoleSnippets = [
    {
        key: 'console.log()',
        prefix: 'clg',
        body: `console.log($1, \`$1\`);`,
        description: ''
    },
    {
        key: 'console.group()',
        prefix: 'clgr',
        body: `console.group('第一层');
        console.group('第二层');
        
        console.log('error');
        console.error('error');
        console.warn('error');
        
        console.groupEnd();
        console.groupEnd();`,
        description: '用于将显示的信息分组，可以把信息进行折叠和展开。'
    },
    {
        key: 'console.table()',
        prefix: 'clt',
        body: `console.table($1)`,
        description: '将复合类型的数据转为表格显示。'
    },
    {
        key: 'console.time()',
        prefix: 'cltime',
        body: `console.time('start time');
        $1;
        console.timeEnd('end time');`,
        description: '计时器'
    }
];

module.exports = consoleSnippets;
