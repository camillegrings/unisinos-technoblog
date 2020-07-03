import express from 'express';

const router = express.Router();

router.get('/:id');
router.post('/add');
router.delete('/delete/:id');

export default router;