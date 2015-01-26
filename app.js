(function() {

  window.nwgui = require('nw.gui');
  console.log("app.js: initializing requirejs main.js");
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.setAttribute("data-main", "scripts/main"); // main entry point requirejs
  script.src = "node_modules/requirejs/require.js"; // link to require.js
  document.body.appendChild(script);

}());