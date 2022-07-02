import * as vscode from 'vscode';

interface ConfigItem {
    trigger: string;
    description: string;
    format: string;
    prefix: string;
    suffix: string;
}

class CompletionItemProvider implements vscode.CompletionItemProvider {
    config: ConfigItem[];
    position?: vscode.Position;
    constructor(config: ConfigItem[]) {
        this.config = config;
    }
    provideCompletionItems(_: vscode.TextDocument, position: vscode.Position) {
        this.position = position;
        const completions = this.config.map((item: { trigger: string | vscode.CompletionItemLabel; description: string }) => {
            const snippetCompletion = new vscode.CompletionItem(item.trigger, vscode.CompletionItemKind.Enum);
            snippetCompletion.documentation = new vscode.MarkdownString(item.description);
            return snippetCompletion;
        });

        return completions;
    }

    /**
     *
     * @param {vscode.CompletionItem} item
     */
    resolveCompletionItem(item: vscode.CompletionItem) {
        const label = item.label;
        if (this.position && this.config && typeof label === 'string') {
            const config = this.config.find(config => config.trigger === label);
            item.command = {
                command: 'complete-code.refactor',
                title: 'refactor',
                arguments: [this.position.translate(0, label.length + 1), config]
            };
        }

        return item;
    }
}

export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    const CompletedCodeConfig = vscode.workspace.getConfiguration('CompletedCode').get('config');

    // @ts-ignore
    const options = vscode.languages.registerCompletionItemProvider(['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue'], new CompletionItemProvider(CompletedCodeConfig), '.');

    const command = 'complete-code.refactor';

    const commandHandler = (editor: vscode.TextEditor, edit: vscode.TextEditorEdit, position: vscode.Position, config: any) => {
        const lineText = editor.document.lineAt(position.line).text;

        // match case name.log etc.
        const matchVarReg = new RegExp(`\(\[^\\s\]*\[^\'\"\`\]\).${config.trigger}$`);
        // match case 'name'.log etc.  /(['"`])([^'"])\1.log/
        const matchStrReg = new RegExp(`\(\[\'\"\`\]\)\(\[^\'\"\`\]*\)\\1\.${config.trigger}$`);
        let matchFlag = 'var';
        let text: string | any[],
            key: string | string[],
            quote = "'",
            insertVal = '';
        [text, key] = lineText.match(matchVarReg) || [];

        if (!key) {
            [text, quote, key] = lineText.match(matchStrReg) || [];
            matchFlag = 'str';
        }
        // if matched
        if (key) {
            const index = lineText.indexOf(text);
            edit.delete(new vscode.Range(position.with(undefined, index), position.with(undefined, index + text.length)));
            const prefix = config.prefix || '';
            const suffix = config.suffix || '';

            if (matchFlag === 'var' && key.includes("'")) {
                quote = '"';
            }
            // format like console.log("xxx", xxx)
            if (matchFlag === 'var') {
                insertVal = `${config.format}(${quote}${prefix}${key}${suffix}${quote},${key})`;
            }

            // if key is string format like console.log("xxx")
            if (matchFlag === 'str') {
                insertVal = `${config.format}(${quote}${key}${quote})`;
            }
            edit.insert(position.with(undefined, index), insertVal);
        }

        return Promise.resolve([]);
    };

    context.subscriptions.push(vscode.commands.registerTextEditorCommand(command, commandHandler));
    context.subscriptions.push(options);
}

