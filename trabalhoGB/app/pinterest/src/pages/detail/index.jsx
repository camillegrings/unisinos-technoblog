import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import arrowBack from "../../assets/return.png";

import { Header, RegisterButton } from "../../components";

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

  function renderArrowBack() {
    return (
      <Link to="/" className="detail-back-link">
        <div>
          <img src={arrowBack} className="detail-arrow" />
        </div>
      </Link>
    );
  }

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
        {renderArrowBack()}
        {renderContent()}
      </div>
    </div>
  );
}

export default Detail;
