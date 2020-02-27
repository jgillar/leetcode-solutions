/* 
this is a simple script that pulls a leetcode problem's 
description HTML so I can use it for my writeup pages
*/
(function() {
  let makeTemplate = () => {
    let title = document.querySelector("[data-cy='question-title']")
      .textContent;
    let filename = title.toLocaleLowerCase().replace(".", "");

    let description =
      `
---
title: ${title}
---
      <section>
		<h2>Description</h2>` +
      document.querySelector(
        "div[data-cy='description-content'] > div > div:nth-child(2)"
      ).innerHTML +
      `</section>`;

    //grab the solution code from localStorage
    //this prevents the weird formatting issues
    //that happen when copying the code off the page
    //solution keys are formatted nn_mmmmmm_language
    let solutionKey = Object.keys(localStorage).filter(key => {
      return key.match(
        `^${title.slice(0, title.indexOf("."))}.*(javascript|c|java|php|sql)$`
      );
    });
    //substring() offset is 1 because the values are wrapped in ""s
    let solution = localStorage.getItem(solutionKey).replace(/\\n/gi, "\n");
    solution = solution.trimEnd().substring(1, solution.length - 1);

    let dialog = `
  <div id="lcs-dialog">
		<section>
			<p id="lcs-title">${title}</p>
			<label for="lcs-description">Description markup:</label>
			<textarea name="lcs-description" rows="3">${description}</textarea>

			<label for="lcs-solution">Solution markup:</label>
			<textarea name="lcs-solution" rows="3">
---
title: ${title}
language: javascript
---
${solution}
			</textarea>

			<button id="lcs-download">Download files</button>

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
		  #lcs-title{
			  font-weight: bold;
		  }
		  #lcs-dialog label{
			  display: block;
		  }
		  #lcs-dialog textarea, input{
        display: block;
        font-family: Courier, monospaced;
			  margin: 10px 0px;
			  padding: 2px 10px;
			  width: 100%;
		  }
	  </style>
  `;

  let download = (filename, text) => {
    let el = document.createElement("a");
    el.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    el.setAttribute("download", filename);

    el.style.display = "none";
    document.body.appendChild(el);

    el.click();

    document.body.removeChild(el);
  };

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
    //close button
    if (e.target && e.target.id == "lcs-close") {
      dialog.style.opacity = 0;
    }

    //download button
    if (e.target && e.target.id == "lcs-download") {
      e.preventDefault();
      let description = document.querySelector(
        "#lcs-dialog textarea[name='lcs-description']"
      ).value;
      let solution = document.querySelector(
        "#lcs-dialog textarea[name='lcs-solution']"
      ).value;
      let filename = document.querySelector(
        "#lcs-dialog input[name='lcs-filename']"
      ).value;

      download(filename + ".html", description);
      download(filename + ".txt", solution);
    }
  });
})();
