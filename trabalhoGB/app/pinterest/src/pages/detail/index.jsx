import React from "react";
import { Link } from "react-router-dom";

import arrowBack from "../../assets/return.png";

import { Header, RegisterButton } from "../../components";

import "./styles.css";

const data = {
  image:
    "https://images.pexels.com/photos/4450090/pexels-photo-4450090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  name: "Nome da Imagem",
  description:
    "descrição da imagem descrição da imagem descrição da imagem descrição da imagem v descrição da imagem descrição da imagem v descrição da imagem descrição da imagem",
};

function Detail() {
  function renderArrowBack() {
    return (
      <Link to="/" className="detail-back-link">
        <div>
          <img src={arrowBack} className="detail-arrow" />
        </div>
      </Link>
    );
  }

  return (
    <div>
      <Header />
      <RegisterButton />
      <div className="detail-container">
        {renderArrowBack()}
        <div className="detail-content">
          <img src={data.image} className="detail-image" />
          <div className="detail-info">
            <h3 className="detail-name">{data.name}</h3>
            <p className="detail-description">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
