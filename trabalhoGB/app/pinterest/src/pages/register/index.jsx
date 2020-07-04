import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";

import { Header, GoBackButton } from "../../components";

function Register() {
  const [imagem, setImagem] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  async function sendData() {
    if (imagem && nome && descricao) {
      const { status } = await axios.post("http://localhost:3001/postagem", {
        imagemPath: imagem,
        descricao,
        titulo: nome,
        autor: "5effa04950e505e6b09d24f3",
      });

      if (status === 200) {
        toast.success("Sua imagem foi cadastrada com sucesso!");
      } else {
        toast.error("Ocorreu um erro ao cadastrar");
      }
    }
  }

  function renderForm() {
    return (
      <div className="register-form-content">
        <div className="register-uploadDiv">
          <input
            type="text"
            placeholder="Adicione a url da imagem"
            name="imagem"
            id="imagem"
            onChange={(event) => setImagem(event.target.value)}
          />
        </div>
        <div className="register-input-wrapper">
          <div id="nomeDiv">
            <input
              type="text"
              placeholder="Adicione um titulo"
              name="Nome"
              id="Nome"
              onChange={(event) => setNome(event.target.value)}
            />
          </div>

          <div id="descricaoDiv">
            <input
              type="text"
              placeholder="Conte sobre o que é sua postagem"
              name="Descricao"
              id="Descricao"
              onChange={(event) => setDescricao(event.target.value)}
            />
          </div>
          <div>
            <input type="submit" id="submit-button" onClick={sendData} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-container">
      <Header />
      <div className="register-form-container">
        <GoBackButton />
        {renderForm()}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Register;
