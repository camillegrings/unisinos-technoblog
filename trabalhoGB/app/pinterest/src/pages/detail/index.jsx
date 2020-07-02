import React from "react";

import { Header } from "../../components";

import "./styles.css";

const image =
  "https://images.pexels.com/photos/4450090/pexels-photo-4450090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

function Detail() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img src={image} className="imageDetail" />
          <h3>Nome da Imagem</h3>
          <p>descrição da imagem</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
