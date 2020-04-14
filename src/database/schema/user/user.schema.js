import Sequelize from "sequelize";
// import { GROUP_USER_TYPE, GROUP_TYPE } from "../../../constants";

const userSchema = {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false,
    unique: true,
    isEmail: true,
  },
  lastLoggedinOn: {
    type: Sequelize.DATE,
    defaultValue: "",
    allowNull: false,
  },
};

export default userSchema;
