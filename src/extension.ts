import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Space
	var ZeroWidthSpace = '\u200B';
	// Semicolon
	var GreekQuestionMark = '\u037E'

	console.log('Congratulations, your extension "ourcode" is now active!');

	// Add Space with Zero Width Space
	let space = vscode.commands.registerCommand('ourcode.space', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const documentText = vscode.window.activeTextEditor!.document;

			editor.edit(editBuilder => {
				for (let a = 0; a < documentText.lineCount; a++) {
					var line = documentText.lineAt(a);

					for (let i = 0; i < line.range.end.character; i++) {
						var startPositon = new vscode.Position(a, i);
						var endPostion = new vscode.Position(a, i + 1);
						var range = new vscode.Range(startPositon, endPostion);
						var character = editor.document.getText(range);

						if (character == " ") {
							editBuilder.replace(range, " " + ZeroWidthSpace);
						}
					}
				}
			});

			vscode.window.showInformationMessage('SIKE GOT\'EEEEMM!!!');
		} else {
			vscode.window.showErrorMessage('No Active File To Edit!!!');
		}
	});

	// Replace Semicolon with Greek Question Mark
	let semicolon = vscode.commands.registerCommand('ourcode.semicolon', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const documentText = vscode.window.activeTextEditor!.document;

			editor.edit(editBuilder => {
				for (let a = 0; a < documentText.lineCount; a++) {
					var line = documentText.lineAt(a);

					for (let i = 0; i < line.range.end.character; i++) {
						var startPositon = new vscode.Position(a, i);
						var endPostion = new vscode.Position(a, i + 1);
						var range = new vscode.Range(startPositon, endPostion);
						var character = editor.document.getText(range);

						if (character == ";") {
							editBuilder.replace(range, GreekQuestionMark);
						}
					}
				}
			});

			vscode.window.showInformationMessage('SIKE GOT\'EEEEMM!!!');
		} else {
			vscode.window.showErrorMessage('No Active File To Edit!!!');
		}
	});

	// Add Space with Zero Width Space Mayhem Version
	let spacemayhem = vscode.commands.registerCommand('ourcode.spacemayhem', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const documentText = vscode.window.activeTextEditor!.document;

			editor.edit(editBuilder => {
				for (let a = 0; a < documentText.lineCount; a++) {
					var line = documentText.lineAt(a);

					for (let i = 0; i < line.range.end.character; i++) {
						var startPositon = new vscode.Position(a, i);
						var endPostion = new vscode.Position(a, i + 1);
						var range = new vscode.Range(startPositon, endPostion);
						var character = editor.document.getText(range);

						if (Math.random() + .3 >> 0) {
							if (character == " ") {
								editBuilder.replace(range, " " + ZeroWidthSpace);
							}
						}
					}
				}
			});

			vscode.window.showInformationMessage('SIKE GOT\'EEEEMM!!!');
		} else {
			vscode.window.showErrorMessage('No Active File To Edit!!!');
		}
	});

	// Replace Semicolon with Greek Question Mark Mayhem Version
	let semicolonmayhem = vscode.commands.registerCommand('ourcode.semicolonmayhem', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const documentText = vscode.window.activeTextEditor!.document;

			editor.edit(editBuilder => {
				for (let a = 0; a < documentText.lineCount; a++) {
					var line = documentText.lineAt(a);

					for (let i = 0; i < line.range.end.character; i++) {
						var startPositon = new vscode.Position(a, i);
						var endPostion = new vscode.Position(a, i + 1);
						var range = new vscode.Range(startPositon, endPostion);
						var character = editor.document.getText(range);

						if (Math.random() + .7 >> 0) {
							if (character == ";") {
								editBuilder.replace(range, GreekQuestionMark);
							}
						}
					}
				}
			});

			vscode.window.showInformationMessage('SIKE GOT\'EEEEMM!!!');
		} else {
			vscode.window.showErrorMessage('No Active File To Edit!!!');
		}
	});

	context.subscriptions.push(space, semicolon, spacemayhem, semicolonmayhem);
}

export function deactivate() { }