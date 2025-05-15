import express from 'express';
import { addUser, getUser, updateUser } from '../controllers/user.controller';

const router = express.Router();

// router.get('/');
router.get('/get-user', getUser);
router.post('/add-user', addUser);
router.put('/update-user/:id', updateUser);
// router.delete('/delete-user/:id');

export default router;
