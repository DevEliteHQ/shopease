import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

export const sequlize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
//   password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  models: [__dirname + "/../models"],
});

(async () => {
  try {
    await sequlize.authenticate();
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
})();
