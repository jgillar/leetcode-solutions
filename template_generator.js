(function() {
  //this is a simple script to generate a template from any leetcode exercise
  //basically it just pulls the description text and title
  let makeTemplate = () => {
    let title = document.querySelector("[data-cy='question-title']")
      .textContent;
    let filename = title.toLocaleLowerCase().replace(".", "");
    let description = document.querySelector(
      "div[data-cy='description-content'] > div > div:nth-child(2)"
    ).innerHTML;
    let template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<link rel="stylesheet" href="styles.css">
	<script type="text/javascript" src="common.js"></script>
    <script
      type="text/javascript"
      src="${filename}.js"
    ></script>
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", function() {
        //document.getElementById("result").innerHTML = 101;
      });
    </script>
    <title>${title}</title>
  </head>
  <body>
	<main>
		<h1>${title}</h1>
		<section>
			<h2>Description</h2>
			${description}
		</section>
		<section>
			<h2>My Solution</h2>
			<h3>Example Testcase</h3>
			<pre> Example goes here! </pre>
			<h3>Analysis</h3>
			<p>
				Analysis goes here!
			</p>
		</section>
	</main>
  </body>
</html>`;
    let dialog = `
<div id="lcs-dialog">
	  <section>
		  <label for="lcs-markup">Template markup:</label>
		  <textarea name="lcs-markup">${template}</textarea>
		  <label for="lcs-filename">Filename:</label>
		  <input type="text" name="lcs-filename" value="${filename}" />
	  </section>
	  <section>
	  	<button id="lcs-close">Close</button>
	  </section>
</div>`;

    return dialog;
  };

  let styles = `
	<style type="text/css">
		#lcs-dialog{
			background: #cccccc;
			border: 5px solid #aaaaaa;
			left: 50%;
			padding: 25px;
			position: absolute;
			top: 50%;
			transition: opacity .5s;
			transform: translate(-50%, -50%);
			width: 400px;
			z-index: 100;
		}
		#lcs-dialog label{
			display: block;
		}
		#lcs-dialog textarea, input{
			display: block;
			margin: 10px 0px;
			padding: 10px;
			width: 100%;
		}
	</style>
`;
  let dialog = document.getElementById("lcs-dialog");
  if (dialog) {
    dialog.style.opacity = 1;
  } else {
    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", makeTemplate() + " " + styles);
    dialog = document.getElementById("lcs-dialog");
  }
  document.addEventListener("click", function(e) {
    if (e.target && e.target.id == "lcs-close") {
      dialog.style.opacity = 0;
    }
  });
})();
