import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import config from './config';

dotenv.config();

export const sequelize = new Sequelize({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  dialect: config.dialect as 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql',
  logging: false,
  models: [__dirname + '/../models'],
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('database connected successfully');
  } catch (error) {
    console.log(error);
  }
})();
