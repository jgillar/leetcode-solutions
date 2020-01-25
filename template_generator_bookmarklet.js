javascript: !(function() {
  let t = document.getElementById("lcs-dialog");
  t
    ? (t.style.opacity = 1)
    : (document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        (() => {
          let t = document.querySelector("[data-cy='question-title']")
              .textContent,
            n = t.toLocaleLowerCase().replace(".", "");
          return `\n<div id="lcs-dialog">\n\t  <section>\n\t\t  <label for="lcs-markup">Template markup:</label>\n\t\t  <textarea name="lcs-markup">${`<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge" />\n\t<link rel="stylesheet" href="styles.css">\n\t<script type="text/javascript" src="common.js"><\/script>\n    <script\n      type="text/javascript"\n      src="${n}.js"\n    ><\/script>\n    <script type="text/javascript">\n      document.addEventListener("DOMContentLoaded", function() {\n        //document.getElementById("result").innerHTML = 101;\n      });\n    <\/script>\n    <title>${t}</title>\n  </head>\n  <body>\n\t<main>\n\t\t<h1>${t}</h1>\n\t\t<section>\n\t\t\t<h2>Description</h2>\n\t\t\t${
            document.querySelector(
              "div[data-cy='description-content'] > div > div:nth-child(2)"
            ).innerHTML
          }\n\t\t</section>\n\t\t<section>\n\t\t\t<h2>My Solution</h2>\n\t\t\t<h3>Example Testcase</h3>\n\t\t\t<pre> Example goes here! </pre>\n\t\t\t<h3>Analysis</h3>\n\t\t\t<p>\n\t\t\t\tAnalysis goes here!\n\t\t\t</p>\n\t\t</section>\n\t</main>\n  </body>\n</html>`}</textarea>\n\t\t  <label for="lcs-filename">Filename:</label>\n\t\t  <input type="text" name="lcs-filename" value="${n}" />\n\t  </section>\n\t  <section>\n\t  \t<button id="lcs-close">Close</button>\n\t  </section>\n</div>`;
        })() +
          ' \n\t<style type="text/css">\n\t\t#lcs-dialog{\n\t\t\tbackground: #cccccc;\n\t\t\tborder: 5px solid #aaaaaa;\n\t\t\tleft: 50%;\n\t\t\tpadding: 25px;\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\ttransition: opacity .5s;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\twidth: 400px;\n\t\t\tz-index: 100;\n\t\t}\n\t\t#lcs-dialog label{\n\t\t\tdisplay: block;\n\t\t}\n\t\t#lcs-dialog textarea, input{\n\t\t\tdisplay: block;\n\t\t\tmargin: 10px 0px;\n\t\t\tpadding: 10px;\n\t\t\twidth: 100%;\n\t\t}\n\t</style>\n'
      ),
      (t = document.getElementById("lcs-dialog"))),
    document.addEventListener("click", function(n) {
      n.target && "lcs-close" == n.target.id && (t.style.opacity = 0);
    });
})();
