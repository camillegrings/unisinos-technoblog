import express from 'express';

import {
  addPostagem,
  deletePostagem,
  getPostagem,
  getPostagensByAutor
} from '../controllers/PostagensController.js';

const router = express.Router();

router.get('/:id', getPostagem);
router.get('/autor/:id', getPostagensByAutor);
router.post('/', addPostagem);
router.delete('/:id', deletePostagem);

export default router;