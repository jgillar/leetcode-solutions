//this is a simple script to generate a template from any leetcode exercise
//basically it just pulls the description text and title
var makeTemplate = () => {
  let title = document.querySelector("[data-cy='question-title']").textContent;
  let filename = title.toLocaleLowerCase().replace(".", "");
  let description = document.querySelector(
    "[data-cy='question-detail-main-tabs']"
  ).innerHTML;
  let template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<link rel="stylesheet" href="styles.css">
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
    <h1>${title}</h1>
	<section>
		${description}
	<section>
	<section>
	<pre>
	  Example goes here!
	</p>
	</section>
      <p>
        Analysis goes here!
      </p>
    </section>
  </body>
</html>`;
  let dialog = `
<div id="lcs-dialog">
	  <section>
		  <label for="lcs-markup">Template markup:</label>
		  <textarea name="lcs-markup">${template}</textarea>
		  <label for="lcs-filename">Filename:</label>
		  <input type="text for="lcs-filename" value="${filename}" />
	  </section>
	  <section>
	  	<button onClick="close()">Close</button>
	  </section>
</div>`;

  return dialog;
};

var styles = `
	<style type="text/css">
		#lcs-dialog{
			background: #cccccc;
			border: 5px solid #aaaaaa;
			left: 50%;
			padding: 25px;
			position: absolute;
			top: 50%;
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
document
  .getElementsByTagName("body")[0]
  .insertAdjacentHTML("beforeend", makeTemplate() + " " + styles);
