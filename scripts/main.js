// Configure RequireJS
requirejs.config({
  baseUrl: "src/lib/",
  paths: {
    "underscore": "../../node_modules/lodash/lodash", // registers as _
    "log": "../../node_modules/loglevel/loglevel", // registers as log
    "Poll": "../../node_modules/poll/poll" // not AMD compliant, hence shimming.
  },
  shim: {
    "Poll": { // example shimming of the non AMD-compliant Poll lib
      exports: "Poll",
      init: function () { 
        console.log("r_shim: Poll");
      }
    }
  }
});

// Start the main app logic.
requirejs(["appInitializer"],
  function(appInitializer) {}
);