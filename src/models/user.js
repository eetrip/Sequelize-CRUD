const express = require("express");
const app = express();
import BaseModel from "../database/base";
import userSchema from "../database/schema/user/user.schema";
// module.exports = function userModel(app, db) {
//   db.Item.findAll({}).then(function (result) {
//     res.json(result);
//   });
// };

export default class UserModel extends BaseModel {
  constructor() {
    super();
    this.UserModel = this.connection.define("user", userSchema);
  }

  list = async () => {
    try {
      // const Op = this.Op;
      const users = await this.UserModel.findAll({
        attributes: ["userId", "userName", "firstName", "lastName", "gender"],
      });
      return users.map((userData) => {
        const user = userData.get({ plain: true });
        return { ...users };
      });
    } catch (error) {
      console.error("some error");
    }
  };
}
