import mongoose from 'mongoose';

const Postagens = new mongoose.Schema({
  imagemPath: { type: String },
  descricao: { required: true, type: String },
  data: { default: Date.now, type: Date },
  autor: { required: true, type: String },
  titulo: { required: true, type: String }
});

export default mongoose.model('Postagens', Postagens);