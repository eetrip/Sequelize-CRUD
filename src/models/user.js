const express = require("express");
const app = express();

module.exports = function userModel(app, db) {
  db.Item.findAll({}).then(function (result) {
    res.json(result);
  });
};


export default class 