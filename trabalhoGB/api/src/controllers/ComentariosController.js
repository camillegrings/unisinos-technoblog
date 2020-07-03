import ComentariosModel from '../models/comentarios.js';

export const addComentario = async (request, response) => {
  try {
    const { body } = request;

    const comentario = new ComentariosModel({ ...body });

    const comentarioId = await comentario.save();

    return response.status(200).send(comentarioId);
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
};

export const deleteComentario = async (request, response) => {
  try {
    const { params: { id } } = request;

    await ComentariosModel.findByIdAndDelete(id);

    return response
      .status(200)
      .send({ message: 'Comentário removido com sucesso.' });
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
}

export const getComentarios = async (request, response) => {
  try {
    const { params: { id } } = request;

    const comentariosByPost = await ComentariosModel.find({ postagemId: id });

    return response
      .status(200)
      .send(comentariosByPost);
  } catch (err) {
    return response.status(500).send({ message: err.message })
  }
};