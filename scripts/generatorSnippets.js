"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.prettierCode = exports.SOURCE_CODE_ROOT = void 0;
var fs = require("fs");
var path_1 = require("path");
var prettier = require("prettier");
var SNIPPETS_JSON_ROOT = (0, path_1.resolve)(__dirname, '../snippets/snippets.code-snippets');
exports.SOURCE_CODE_ROOT = (0, path_1.resolve)(__dirname, '../src/snippets/source');
/**
 * @description - This function is used to generate the snippets for the language.
 * @param code
 * @param parser
 */
function prettierCode(code, parser) {
    return prettier.format(code, {
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
        parser: parser
    });
}
exports.prettierCode = prettierCode;
/**
 * @description 生成snippets item格式
 * @param param0
 */
function format(_a) {
    var _b;
    var key = _a.key, prefix = _a.prefix, body = _a.body, description = _a.description;
    return _b = {},
        _b[key] = {
            prefix: prefix,
            body: prettierCode(body, 'babel'),
            description: description
        },
        _b;
}
function generator() {
    try {
        var snippets = fs.readdirSync(exports.SOURCE_CODE_ROOT, { withFileTypes: true }).reduce(function (pre, item) {
            var path = (0, path_1.resolve)(__dirname, exports.SOURCE_CODE_ROOT, item.name);
            require(path).snippets.forEach(function (item) {
                var _snippet = format(item);
                pre = __assign(__assign({}, pre), _snippet);
            });
            return pre;
        }, {});
        fs.writeFileSync(SNIPPETS_JSON_ROOT, JSON.stringify(snippets, null, 4));
    }
    catch (error) {
        console.log(error);
    }
}
generator();
