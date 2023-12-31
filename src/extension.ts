import * as vscode from 'vscode';
import { join } from 'path';
// import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Your extension "fed-ponavljanje-za-ispit-deprecated" is now active!');
	// let test = vscode.commands.registerCommand('fed-ponavljanje-za-ispit-deprecated.test', () => {
	// 	vscode.window.showInformationMessage('Hello World from FED ponavljanje za ispit!');
	// });

	// let webView = vscode.commands.registerCommand('fed-ponavljanje-za-ispit-deprecated.webView', () => {
	// 	const assetsRoot = vscode.Uri.file(join(context.extensionPath, 'assets'));

	// 	const panel = vscode.window.createWebviewPanel(
	// 		'gitCheatsheet',
	// 		'test.js',
	// 		vscode.ViewColumn.One, {
	// 			localResourceRoots: [assetsRoot],
	// 			enableScripts: true,
	// 			enableFindWidget: true
	// 		}
	// 	);

	// 	const assetsPath = panel.webview.asWebviewUri(assetsRoot);
	// 	const cspSource = panel.webview.cspSource;

	// 	panel.webview.html = getWebviewContent(cspSource, assetsPath);

	// 	panel.webview.onDidReceiveMessage(
	// 		(command: string) => {
	// 			vscode.env.clipboard.writeText(command)
	// 				.then(() => {
	// 					vscode.window.showInformationMessage(`Command copied: ${command}`);
	// 				}, () => {
	// 					vscode.window.showErrorMessage('Copy failed');
	// 				});
	// 		},
	// 		undefined,
	// 		context.subscriptions
	// 	);
	// });

	let mdView = vscode.commands.registerCommand('fed-ponavljanje-za-ispit-deprecated.mdView', () => {
		const mdFile = vscode.Uri.file(join(context.extensionPath, 'assets/pon.md'));
		vscode.commands.executeCommand("markdown.showPreview", mdFile);
	});

	let mdViewNoPic = vscode.commands.registerCommand('fed-ponavljanje-za-ispit-deprecated.mdViewNoPic', () => {
		const mdFile = vscode.Uri.file(join(context.extensionPath, 'assets/pon-np.md'));
		vscode.commands.executeCommand("markdown.showPreview", mdFile);
	});

	// context.subscriptions.push(test, webView, mdView);
	context.subscriptions.push(mdView, mdViewNoPic);
}

export function deactivate() {}
