import express from 'express';

const router = express.Router();

router.get('/');
router.get('/get-user');
router.post('/add-user');
router.put('/update-user/:id');
// router.delete('/delete-user/:id');

export default router;
