// var userModel = require("./mod")
import route from "../routes/routes";
// var userModel = require("../models/user");
import UserModel from "../models/user.js";

// module.exports = function (app, db) {};

export const userController = route(async (req, res) => {
  try {
    // const response = await module.list({ something });
    const userDb = new UserModel();
    const response = await userDb.list({});
    console.log(response);
    res.json(response);
  } catch {
    console.log(error in allApi);
    return "error";
  }
});
