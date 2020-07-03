import React from "react";

import "./style.css";

import { Header } from "../../components";

function Register() {
  function renderForm() {
<<<<<<< HEAD
    return images.map((image) => {
      return (     

      <div id="body" class="container">
          
          <form id="elementos">

       <div id="uploadDiv"><input id="upload" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp" ></input></div>
        <div id="nomeDiv"><input type="text" placeholder="Adicione um titulo" name="Nome" id="Nome"/></div>
         <div id="descricaoDiv"><input type="text" placeholder="Conte sobre o que é seu PIN" name="Descricao" id="Descricao"/></div>

          </form>
=======
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
>>>>>>> 0f62986d29fcfb4c8f0a5edae7a6ccb351ac184c
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
