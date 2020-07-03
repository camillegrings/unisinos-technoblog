import express from 'express';
import {
  addComentario,
  deleteComentario,
  getComentarios
} from '../controllers/ComentariosController.js';

const router = express.Router();

router.get('/:id', getComentarios);
router.post('/add', addComentario);
router.delete('/delete/:id', deleteComentario);

export default router;