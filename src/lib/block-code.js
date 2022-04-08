exports.tableStr = (content, columns) => {
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
};

exports.trStr = content => {
    return `<tr style="color: #1296db">${content}</tr>`;
};

exports.tdStr = arrContent => {
    return arrContent.reduce((pre, cur, index, array) => {
        return pre + `<td>${cur}</td>`;
    }, '');
};

const keyMap = new Map([
    ['Code', 'key'],
    ['Snippet prefix', 'prefix'],
    ['body', 'body'],
    ['Specification', 'specification'],
    ['Description', 'description']
]);

exports.htmlMd = ({ type: _type, snippets, columns }, type) => {
    return (
        '\n' +
        `> ${_type}` +
        '\n' +
        this.tableStr(
            snippets.reduce((pre, item, index, array) => {
                return pre + this.trStr(this.tdStr([item.prefix, item[keyMap.get(columns[1])] || '', item.description]));
            }, ''),
            columns
        )
    );
};

