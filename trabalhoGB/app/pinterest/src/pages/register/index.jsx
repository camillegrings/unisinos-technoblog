import React from "react";

import "./style.css";

import { Header } from "../../components";

function Register() {
  function renderForm() {
    return (
      <div class="container" id="body">
        <div id="uploadDiv">
          <input
            type="text"
            placeholder="Adicione a url da imagem"
            name="imagem"
            id="imagem"
          />
        </div>
        <div id="nomeDiv">
          <input
            type="text"
            placeholder="Adicione um titulo"
            name="Nome"
            id="Nome"
          />
        </div>

        <div id="descricaoDiv">
          <input
            type="text"
            placeholder="Conte sobre o que é sua postagem"
            name="Descricao"
            id="Descricao"
          />
        </div>
        <div>
          <input type="text" placeholder="Autor" name="Autor" id="Autor" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="register-container">{renderForm()}</div>;
    </div>
  );
}

export default Register;
