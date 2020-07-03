import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ComentariosRouter from './routes/comentarios.js';
import PostagensRouter from './routes/postagens.js';
import UsuariosRouter from './routes/usuarios.js';

const app = express();

const mongoConnection = () => {
  const url = `mongodb+srv://admin:5aGvKb5yoUWpHXNz@tripaseca.gmowk.gcp.mongodb.net/gb?retryWrites=true&w=majority`;
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
};

app.listen(3001, () => {
  console.log('API listening on port 3001');
  mongoConnection();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/comentarios', ComentariosRouter);
app.use('/postagem', PostagensRouter);
app.use('/usuarios', UsuariosRouter);