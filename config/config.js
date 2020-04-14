// import { config as loadEnvs } from "dotenv";
// loadEnvs();

const config = {
  development: {
    // DB_HOST: process.env.DEV_DB_HOST,
    // DB_DIALECT: process.env.DEV_DB_DIALECT,
    // DB_PORT: process.env.DEV_DB_PORT,
    // DB_USERNAME: process.env.DEV_DB_USERNAME,
    // DB_PASSWORD: process.env.DEV_DB_PASSWORD,
    // DB_NAME: process.env.DEV_DB_NAME,
    DB_HOST: "localhost",
    DB_DIALECT: "mysql",
    DB_USERNAME: "root",
    DB_PASSWORD: "root",
    DB_NAME: "crudtest_db",
  },
};

export const PASSWORD_MAX = 15;
export const PASSWORD_MIN = 5;

export default config;
