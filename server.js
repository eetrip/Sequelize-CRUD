var express = require("express");
var app = express();
var http = require("http");
var https = require("https");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var db = require("./models");
var apiRoutes = require("./app/routes/apiRoutes.js");

// var socket = require("socket.io");

// var sockets = {
//   // How many are in use altogether
//   inUse: function(http) {
//     // Set default to 0
//     var httpPool = 0;

//     var socketList = http.globalAgent.sockets;

//     // For each socket
//     for (var socket in socketList) {
//       if (socketList.hasOwnProperty(socket)) {
//         // Add the number of sockets
//         httpPool += socketList[socket].length;
//         /*
//          * Note that each item in socketList[socket] is an instance
//          * of a net socket (http://nodejs.org/api/net.html#net_class_net_socket)
//          */
//       }
//     }

//     return httpPool;
//   },

//   // Which hosts are we connected to
//   hosts: function(http) {
//     var hosts = [];

//     var socketList = http.globalAgent.sockets;

//     for (var socket in socketList) {
//       if (socketList.hasOwnProperty(socket)) {
//         hosts.push(socket);
//       }
//     }

//     return hosts;
//   }
// };

// // Usage
// // Log the number of connections in use
// console.log(socket.inUse(http));
// // Hosts connected to
// console.log(sockets.hosts(http));

console.log(https.globalAgent.maxFreeSockets);
console.log(http.globalAgent.maxFreeSockets);

http.globalAgent.maxFreeSockets = 25;
https.globalAgent.maxFreeSockets = 25;

//data parsing part
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));

//static directory
app.use(express.static("public"));

apiRoutes(app, db);

db.sequelize.sync().then(function() {
  app.listen(3000, function() {
    console.log(`Listening on port ${PORT}`);
  });
});
