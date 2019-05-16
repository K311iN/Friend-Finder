var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app, path);
require("./app/routing/htmlRoutes.js")(app, path);

app.listen(PORT, function () {
    console.log("app listening on PORT: " + PORT);
});
