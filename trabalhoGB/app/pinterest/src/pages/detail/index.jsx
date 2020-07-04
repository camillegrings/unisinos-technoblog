import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header, RegisterButton, GoBackButton } from "../../components";

import "./styles.css";

function Detail({ match }) {
  const { id } = match.params;
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(`http://localhost:3001/postagem/${id}`);
      setData(data.postagem);
    }

    getData();
  }, []);

  function renderContent() {
    if (data._id) {
      return (
        <div className="detail-content">
          <img src={data.imagemPath} className="detail-image" />
          <div className="detail-info">
            <h3 className="detail-name">{data.titulo}</h3>
            <p className="detail-description">{data.descricao}</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <Header />
      <RegisterButton />
      <div className="detail-container">
        <GoBackButton />
        {renderContent()}
      </div>
    </div>
  );
}

export default Detail;
