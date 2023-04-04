import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Space
  var ZeroWidthSpace = "\u200B";
  // Semicolon
  var GreekQuestionMark = "\u037E";

  // Cyrillic (3)
  var CyrillicZE = "\u0430";
  // Cyrillic (A)
  var CyrillicASmall = "\u0430";
  var CyrillicACapital = "\u0410";
  // Cyrillic (C)
  var CyrillicESSmall = "\u0441";
  var CyrillicESCapital = "\u0421";
  // Cyrillic (E)
  var CyrillicIESmall = "\u0435";
  var CyrillicIECapital = "\u0415";
  // Cyrillic (O)
  var CyrillicOSmall = "\u043E";
  var CyrillicOCapital = "\u041E";
  // Cyrillic (P)
  var CyrillicERSmall = "\u0440";
  var CyrillicERCapital = "\u0420";
  // Cyrillic (X)
  var CyrillicHASmall = "\u0445";
  var CyrillicHACapital = "\u0425";
  // Cyrillic (B, H, M, T)
  var CyrillicVECapital = "\u0412";
  var CyrillicENCapital = "\u041D";
  var CyrillicEMCapital = "\u041C";
  var CyrillicTECapital = "\u0422";

  // Replace Space With Zero Width Space
  let space = vscode.commands.registerCommand("ourcode.space", () => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      const documentText = vscode.window.activeTextEditor!.document;

      editor.edit((editBuilder) => {
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

      vscode.window.showInformationMessage("SIKE GOT'EEEEMM!!!");
    } else {
      vscode.window.showErrorMessage("No Active File To Edit!!!");
    }
  });

  // Replace Semicolon With Greek Question Mark
  let semicolon = vscode.commands.registerCommand("ourcode.semicolon", () => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      const documentText = vscode.window.activeTextEditor!.document;

      editor.edit((editBuilder) => {
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

      vscode.window.showInformationMessage("SIKE GOT'EEEEMM!!!");
    } else {
      vscode.window.showErrorMessage("No Active File To Edit!!!");
    }
  });

  // Replace Space With Zero Width Space Mayhem Version
  let spacemayhem = vscode.commands.registerCommand(
    "ourcode.spacemayhem",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const documentText = vscode.window.activeTextEditor!.document;

        editor.edit((editBuilder) => {
          for (let a = 0; a < documentText.lineCount; a++) {
            var line = documentText.lineAt(a);

            for (let i = 0; i < line.range.end.character; i++) {
              var startPositon = new vscode.Position(a, i);
              var endPostion = new vscode.Position(a, i + 1);
              var range = new vscode.Range(startPositon, endPostion);
              var character = editor.document.getText(range);

              if ((Math.random() + 0.3) >> 0) {
                if (character == " ") {
                  editBuilder.replace(range, " " + ZeroWidthSpace);
                }
              }
            }
          }
        });

        vscode.window.showInformationMessage("SIKE GOT'EEEEMM!!!");
      } else {
        vscode.window.showErrorMessage("No Active File To Edit!!!");
      }
    }
  );

  // Replace Semicolon With Greek Question Mark Mayhem Version
  let semicolonmayhem = vscode.commands.registerCommand(
    "ourcode.semicolonmayhem",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const documentText = vscode.window.activeTextEditor!.document;

        editor.edit((editBuilder) => {
          for (let a = 0; a < documentText.lineCount; a++) {
            var line = documentText.lineAt(a);

            for (let i = 0; i < line.range.end.character; i++) {
              var startPositon = new vscode.Position(a, i);
              var endPostion = new vscode.Position(a, i + 1);
              var range = new vscode.Range(startPositon, endPostion);
              var character = editor.document.getText(range);

              if ((Math.random() + 0.7) >> 0) {
                if (character == ";") {
                  editBuilder.replace(range, GreekQuestionMark);
                }
              }
            }
          }
        });

        vscode.window.showInformationMessage("SIKE GOT'EEEEMM!!!");
      } else {
        vscode.window.showErrorMessage("No Active File To Edit!!!");
      }
    }
  );

  // Replace Random Characters With Lookalike Unicode Characters
  let goodluck = vscode.commands.registerCommand("ourcode.goodluck", () => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      const documentText = vscode.window.activeTextEditor!.document;

      editor.edit((editBuilder) => {
        for (let a = 0; a < documentText.lineCount; a++) {
          var line = documentText.lineAt(a);

          for (let i = 0; i < line.range.end.character; i++) {
            var startPositon = new vscode.Position(a, i);
            var endPostion = new vscode.Position(a, i + 1);
            var range = new vscode.Range(startPositon, endPostion);
            var character = editor.document.getText(range);

            if ((Math.random() + 0.7) >> 0) {
              if (character == " ") {
                editBuilder.replace(range, ZeroWidthSpace);
              }

              if (character == ";") {
                editBuilder.replace(range, GreekQuestionMark);
              }

              if (character == "3") {
                editBuilder.replace(range, CyrillicZE);
              }

              if (character == "a") {
                editBuilder.replace(range, CyrillicASmall);
              }

              if (character == "A") {
                editBuilder.replace(range, CyrillicACapital);
              }

              if (character == "B") {
                editBuilder.replace(range, CyrillicVECapital);
              }

              if (character == "c") {
                editBuilder.replace(range, CyrillicESSmall);
              }

              if (character == "C") {
                editBuilder.replace(range, CyrillicESCapital);
              }

              if (character == "e") {
                editBuilder.replace(range, CyrillicIESmall);
              }

              if (character == "E") {
                editBuilder.replace(range, CyrillicIECapital);
              }

              if (character == "H") {
                editBuilder.replace(range, CyrillicENCapital);
              }

              if (character == "M") {
                editBuilder.replace(range, CyrillicEMCapital);
              }

              if (character == "o") {
                editBuilder.replace(range, CyrillicOSmall);
              }

              if (character == "O") {
                editBuilder.replace(range, CyrillicOCapital);
              }

              if (character == "p") {
                editBuilder.replace(range, CyrillicERSmall);
              }

              if (character == "P") {
                editBuilder.replace(range, CyrillicERCapital);
              }

              if (character == "T") {
                editBuilder.replace(range, CyrillicTECapital);
              }

              if (character == "x") {
                editBuilder.replace(range, CyrillicHASmall);
              }

              if (character == "X") {
                editBuilder.replace(range, CyrillicHACapital);
              }
            }
          }
        }
      });

      vscode.window.showInformationMessage("SIKE GOT'EEEEMM!!!");
    } else {
      vscode.window.showErrorMessage("No Active File To Edit!!!");
    }
  });

  context.subscriptions.push(
    goodluck,
    space,
    semicolon,
    spacemayhem,
    semicolonmayhem
  );
}

export function deactivate() {}