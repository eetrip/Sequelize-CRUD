var babelParser = require("babylon");
var acorn = require("acorn");
var esprima = require("esprima");
var babelGenerator = require("babel-generator");
var escodegen = require("escodegen");

var code = require("fs")
  .readFileSync(
    "/home/poornima/Documents/Sequelize-CRUD/parseSpeedTest/jquery.js"
  )
  .toString();
var ts;
var ast;

// babel
ts = +new Date();
ast = babelParser.parse(code);
console.log("babylon", +new Date() - ts);
ts = +new Date();
babelGenerator.default(ast, {}, "");
console.log("babel generator", +new Date() - ts);

// acorn + escodegen
ts = +new Date();
ast = acorn.parse(code);
console.log("acorn", +new Date() - ts);
ts = +new Date();
escodegen.generate(ast, { sourceMap: "original", sourceMapWithCode: true });
console.log("escodegen", +new Date() - ts);

// esprima + escodegen
ts = +new Date();
ast = esprima.parse(code);
console.log("esprima", +new Date() - ts);
ts = +new Date();
escodegen.generate(ast, { sourceMap: "original", sourceMapWithCode: true });
console.log("escodegen", +new Date() - ts);
