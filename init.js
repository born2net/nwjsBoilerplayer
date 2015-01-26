// Configure RequireJS
requirejs.config({
  baseUrl: "js",
  paths: {
    'jquery': 'common/jq/jq1.9.1',
    "underscore": "node_modules/lodash/lodash",
    "Poll": "node_modules/poll/poll"
  },
  shim: {
    "Poll": {
      exports: "Poll",
      init: function () { 
        console.log("r_shim: Poll");
      }
    }
  }
});

requirejs(["app"],
  function(app) {}
);