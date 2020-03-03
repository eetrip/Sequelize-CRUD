var express = require("express");
var app = express();
// var http = require("http");
// var https = require("https");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var db = require("./models");
var apiRoutes = require("./app/routes/apiRoutes.js");
// declaration for worker threads
// const {
//   Worker,
//   isMainThread,
//   parentPort,
//   workerData
// } = require("worker_threads");

// declaration for cluster
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
console.log(`
number of cpu alloted ${numCPUs}
`);

// let worker = cluster.worker;

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));

//static directory
app.use(express.static("public"));

apiRoutes(app, db);

// --------------------XXXXXXXXXXXXXXXXXXXX-------------
// CLUSTER HERE

if (cluster.isMaster) {
  console.log(`master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  db.sequelize.sync().then(function() {
    app.listen(PORT);
  });
  console.log(`
  worker ${process.pid} started
  `);
}
console.log(`Listening on port ${PORT}`);

//          -------------XXXXXXXXXXXXXXXXXX----------------

// WORKER THREAD HERE

// if (!isMainThread) {
//   console.log(`
//   code aya yaha tak
//   `);

//   module.exports = function parseJSAync(script) {
//     console.log(`
//     atleast yaha aya
//     `);
//     return new Promise((resolve, reject) => {
//       const worker = new Worker(__filename, {
//         workerData: script
//       });
//       console.log(`
//       YAHA TAK NI AYA CODEEEEEEEE
//       `);

//       worker.on("message", resolve);
//       worker.on("error", reject);
//       worker.on("exit", code => {
//         if (code !== 0)
//           reject(new Error(`worker stopped with exit code ${code}`));
//       });
//       console.log(`
//       resolve and reject ${resolve}, ${reject}
//       `);
//     });
//   };
// } else {
//   console.log(`
//   yaha ni aya
//   `);

//   const { parse } = require("esprima");
//   const script = workerData;
//   parentPort.postMessage(parse(script));
// }

// console.log(`Listening on port ${PORT}`);

//          -------------XXXXXXXXXXXXXXXXXX----------------

// default server calling
// db.sequelize.sync().then(function() {
//   app.listen(3000, function() {
//     console.log(`Listening on port ${PORT}`);
//   });
// });
