import express from 'express';
import {
  addComentario,
  deleteComentario,
  getComentarios
} from '../controllers/ComentariosController.js';

const router = express.Router();

router.get('/:id', getComentarios);
router.post('/', addComentario);
router.delete('/:id', deleteComentario);

export default router;