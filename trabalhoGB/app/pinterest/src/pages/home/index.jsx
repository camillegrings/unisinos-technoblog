import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import arrowBottom from "../../assets/bottom.png";

import "./style.css";

import { Header, RegisterButton } from "../../components";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        "http://localhost:3001/postagem/autor/5effa04950e505e6b09d24f3"
      );
      setData(data);
    }

    getData();
  }, []);

  function renderImages() {
    return data.map(({ imagemPath, _id }) => {
      return (
        <Link to={`/detalhe/${_id}`} className="home-imageLink" key={_id}>
          <img src={imagemPath} className="home-image" />
        </Link>
      );
    });
  }

  function renderContent() {
    if (!data.length) {
      return (
        <div className="home-no-data">
          <h3>Não há nenhum cadastro ainda!</h3>
          <h4>
            Utilize o botão de para começar a utilizar a sua galeria de fotos
            pessoal
          </h4>
          <img src={arrowBottom} className="home-arrow-bottom" />
        </div>
      );
    }
    return <div className="home-container">{renderImages()}</div>;
  }

  return (
    <div>
      <Header />
      <RegisterButton />
      {renderContent()}
    </div>
  );
}

export default Home;
