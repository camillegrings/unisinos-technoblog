import express from 'express';
import {
  addUsuario,
  getUsuario,
  deleteUsuario
} from '../controllers/UsuariosController.js';

const router = express.Router();

router.get('/:id', getUsuario);
router.post('/', addUsuario);
router.delete('/:id', deleteUsuario);

export default router;