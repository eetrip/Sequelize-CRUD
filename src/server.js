// var express = require("express");
import express from "express";
const app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3200;
// var db = require("./src/routes/apiRoutes");
var db = require("./src/database");
import routes from "./routes/routes";
// var routes = require("./src/routes/routes");

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));

//static directory
app.use(express.static("public"));

app.use(routes);

// default server calling
// db.sequelize.sync().then(function () {
//   app.listen(3000, function () {
//     console.log(`Listening on port ${PORT}`);
//   });
// });

app.listen(PORT, () => {
  console.log(`
  app listening on port ${PORT}
  `);
});
