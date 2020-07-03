import mongoose from 'mongoose';

const Usuarios = new mongoose.Schema({
  nome: { required: true, type: String },
  email: { required: true, type: String },
  senha: { required: true, type: String },
  sessao: { type: String }
});

export default mongoose.model('Usuarios', Usuarios);