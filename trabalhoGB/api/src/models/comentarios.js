import mongoose from 'mongoose';

const Comentarios = new mongoose.Schema({
  postagemId: { required: true, type: Number },
  data: { default: Date.now, type: Date },
  texto: { required: true, type: String },
  moderado: { default: false, type: Boolean },
  autorId: { required: true, type: String }
});

export default mongoose.model('Comentarios', Comentarios);