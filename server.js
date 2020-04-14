var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var db = require("./src/routes/apiRoutes");
var apiRoutes = require("./app/routes/apiRoutes.js");

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));

//static directory
app.use(express.static("public"));

apiRoutes(app, db);

// default server calling
db.sequelize.sync().then(function () {
  app.listen(3000, function () {
    console.log(`Listening on port ${PORT}`);
  });
});
