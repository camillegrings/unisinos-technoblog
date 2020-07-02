import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export function RegisterButton() {
  return (
    <Link to="/cadastro" className="registerButton">
      <i className="registerIcon">+</i>
    </Link>
  );
}
