import Sequelize from "sequelize";
import config from "../../config/config";
// import { getEnv } from
// export const ENVIRONMENT = getEnv("");
export const ENVIRONMENT = "development";

const sequelize = new Sequelize(
  config[ENVIRONMENT].DB_NAME,
  config[ENVIRONMENT].DB_USERNAME,
  config[ENVIRONMENT].DB_PASSWORD,
  {
    host: config[ENVIRONMENT].DB_HOST,
    dialect: config[ENVIRONMENT].DB_DIALECT,
    pool: {
      max: 10,
      idle: 10000,
    },
    logging:
      ENVIRONMENT == "development"
        ? (log) => {
            console.log(log);
          }
        : false,
    define: {
      underscored: true,
    },
  }
);

sequelize
  .then(() => {
    console.log("connection established successfuly");
  })
  .catch((error) => {
    console.error("could not connect", error);
  });

export default sequelize;
