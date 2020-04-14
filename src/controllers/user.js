// var userModel = require("./mod")
import route from "../routes/routes";
var userModel = require("../models/user");

// module.exports = function (app, db) {};

export const allApi = route(async (req, res) => {
  try {
    const response = await module.list({ something });
    console.log(response);
    res.json(response);
  } catch {
    console.log(error in allApi);
    return "error";
  }
});
