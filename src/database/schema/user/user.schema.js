import Sequelize from "sequelize";
// import { GROUP_USER_TYPE, GROUP_TYPE } from "../../../constants";

const userSchema = {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
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
  gender: {
    type: Sequelize.ENUM(...GENDER),
    defaultValue: "",
    allowNull: true,
  },
  lastLoggedinOn: {
    type: Sequelize.DATE,
    defaultValue: "",
    allowNull: false,
  },
};

export default userSchema;
