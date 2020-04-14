import Sequelize from "sequelize";
import sequelize from "./sequelize";

export default class BaseModel {
  constructor() {
    this.connection = sequelize;
    this.Op = Sequelize.Op;
  }
}
