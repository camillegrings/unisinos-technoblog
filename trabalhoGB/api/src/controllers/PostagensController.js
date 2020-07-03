import PostagensModel from '../models/postagens.js';
import ComentariosModel from '../models/comentarios.js';

export const addPostagem = async (request, response) => {
  try {
    const { body } = request;

    const post = new PostagensModel({ ...body });

    const newPost = await post.save();

    return response.status(200).send(newPost);
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
};

export const deletePostagem = async (request, response) => {
  try {
    const { params: { id } } = request;

    await PostagensModel.deleteOne({ _id: id });

    return response
      .status(200)
      .send({ message: 'Postagem removida com sucesso.' });
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
};

export const getPostagem = async (request, response) => {
  try {
    const { params: { id } } = request;

    const responseObject = {};

    const postagem = await PostagensModel.findById(id);

    responseObject.postagem = postagem;

    const comentarios = await ComentariosModel.find({ postagemId: postagem._id });

    responseObject.comentarios = comentarios;

    return response
      .status(200)
      .send(responseObject);
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
};

export const getPostagensByAutor = async (request, response) => {
  try {
    const { params: { autor } } = request;

    const postagens = PostagensModel.find({ autor });

    return response
      .status(200)
      .send(postagens);
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
};