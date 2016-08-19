var express = require("express");
console.log('testando');
var load = require("express-load");

module.exports = function() {

  var app = express();

  app.set('view engine','ejs');
  app.set('views','./app/views');

  load('routes',{cwd: 'app'})
    .then('infra')
    .into(app);

  return app;
};
