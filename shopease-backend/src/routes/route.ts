import express from 'express';
import { addUser, getUser, updateUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/get-user', (req, res, next) => {
  Promise.resolve(getUser(req, res)).catch(next);
});

router.post('/add-user', (req, res, next) => {
  Promise.resolve(addUser(req, res)).catch(next);
});

router.put('/update-user/:id', (req, res, next) => {
  Promise.resolve(updateUser(req, res)).catch(next);
});

export default router;
