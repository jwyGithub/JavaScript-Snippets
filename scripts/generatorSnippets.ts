import * as fs from 'fs';
import { resolve } from 'path';
import * as prettier from 'prettier';

const SNIPPETS_JSON_ROOT = resolve(__dirname, '../snippets/snippets.code-snippets');
export const SOURCE_CODE_ROOT = resolve(__dirname, '../src/snippets/source');
/**
 * @description - This function is used to generate the snippets for the language.
 * @param code
 * @param parser
 */
export function prettierCode(code: string, parser: string) {
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

/**
 * @description 生成snippets item格式
 * @param param0
 */
function format({ key, prefix, body, description }) {
    return {
        [key]: {
            prefix,
            body: prettierCode(body, 'babel'),
            description
        }
    };
}

function generator() {
    try {
        let snippets = fs.readdirSync(SOURCE_CODE_ROOT, { withFileTypes: true }).reduce((pre, item) => {
            const path = resolve(__dirname, SOURCE_CODE_ROOT, item.name);
            require(path).snippets.forEach(item => {
                const _snippet = format(item);
                pre = { ...pre, ..._snippet };
            });
            return pre;
        }, {});

        fs.writeFileSync(SNIPPETS_JSON_ROOT, JSON.stringify(snippets, null, 4));
    } catch (error) {
        console.log(error);
    }
}

generator();

