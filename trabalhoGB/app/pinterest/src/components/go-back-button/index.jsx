import React from "react";
import { Link } from "react-router-dom";

import arrowBack from "../../assets/return.png";

import "./style.css";

export function GoBackButton() {
  return (
    <Link to="/" className="detail-back-link">
      <div>
        <img src={arrowBack} className="detail-arrow" />
      </div>
    </Link>
  );
}
