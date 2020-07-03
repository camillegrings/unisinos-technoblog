import UsuariosModel from '../models/usuarios.js';

export const login = async (request, response) => {
  try {
    const { body } = request;

    const usuario = await UsuariosModel.findOne({ ...body });

    if (usuario) {
      return response.status(200).send();
    } else {
      return response.status(401).send({ message: 'Erro na autenticação' });
    }

  } catch (err) {
    return response.status(500).send({ message: err.message });
  }
};

export const logout = async (request, response) => {
  try {
    const { body } = request;

    await UsuariosModel.findByIdAndUpdate(body.id, { sessao: '' });

    return response.status(200).send();
  } catch (err) {
    return response.status(500).send({ message: err.message });
  }
};

export const addUsuario = async (request, response) => {
  try {
    const { body } = request;

    const usuario = new UsuariosModel({ ...body });

    const newUsuario = await usuario.save();

    return response.status(200).send(newUsuario);
  } catch (err) {
    return response.status(500).send({ message: err.message });
  }
};

export const getUsuario = async (request, response) => {
  try {
    const { params: { id } } = request;

    const usuario = await UsuariosModel.findById(id);

    return response
      .status(200)
      .send(usuario);
  } catch (err) {
    return response.status(500).send({ message: err.message });
  }
};

export const deleteUsuario = async (request, response) => {
  try {
    const { params: { id } } = request;

    await UsuariosModel.findByIdAndDelete(id);

    return response
      .status(200)
      .send({ message: 'Conta removida com sucesso.' });
  } catch (err) {
    return response.status(500).send({ message: err.message });
  }
}