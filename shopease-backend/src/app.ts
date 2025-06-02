import dotenv from 'dotenv';
import express from 'express';
import { sequelize } from './config/database';
import router from './routes/route';

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('database sync successfully');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
})();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
