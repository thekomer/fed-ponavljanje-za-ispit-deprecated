import { Uri } from "vscode";

export function getWebviewContent(cspSource: string, assetsPath: Uri) {
  return /*html*/ `<!doctype html>
	<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${cspSource}; script-src ${cspSource}">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Git Cheatsheet</title>

		<link rel="stylesheet" href="${assetsPath}/custom.css">
	</head>

	<body>
		<h1>FED ponavljanje</h1>

		<p>Jump to:</p>
		<nav>
			<ul>
				<li><a href="#HTML" title="HTML - struktura i sadržaj">HTML &mdash; struktura i sadržaj</a></li>
			</ul>
		</nav>

		<h2 id="HTML">HTML &mdash; struktura i sadržaj</h2>

		<h3>Što je HTML?</h3>

		<ul>
			<li>HTML - HyperText Markup Language</li>
			<li>prezentacijski jezik (jezik označavanja) za kreiranje web stranica</li>
			<li>aktualna verzija: HTML5</li>
			<li>aktualna verzija: HTML5</li>
			<ul>
				<li>aktualna verzija: HTML5</li>
				<li>sadržaj dokumenta i njegove karakteristike</li>
			</ul>
		</ul>

		<h3>HTML elementi</h3>



		<p>Display the status of modified files</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
      <pre><code class="language-JavaScript">
        function foo() {
          console.log('Hello');
        }
      </code></pre>
		</div>



		<script src="${assetsPath}/main.js"></script>
	</body>
</html>
`;
}
