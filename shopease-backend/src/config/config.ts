import dotenv from 'dotenv';

dotenv.config();

interface Config {
  [key: string]: {
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    host: string | undefined;
    dialect: string | undefined;
  };
}

const config: Config = {
  dvelopment: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};

export default config[process.env.NODE_ENV || 'development'];
