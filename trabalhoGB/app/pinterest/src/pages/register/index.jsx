

import React from "react";
import { Link } from "react-router-dom";

import arrowBottom from "../../assets/bottom.png";

import "./style.css";

import { Header, RegisterButton } from "../../components";

const images = [
  "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]
 

function Register() {
  function renderForm() {
    return images.map((image) => {
      return (     

      <div class="container" id="body">
          
       <div id="uploadDiv"><input id="upload" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp" ></input></div>
        <div id="nomeDiv"><input type="text" placeholder="Adicione um titulo" name="Nome" id="Nome"/></div>
        
         <div id="descricaoDiv"><input type="text" placeholder="Conte sobre o que é seu PIN" name="Descricao" id="Descricao"/></div>
        
        </div>
          
      );
    });
  }

  function renderContent() { 
    return <div className="register-container">{renderForm()}</div>;
  }

  return (
    <div>
      <Header />
      <RegisterButton />
      {renderContent()}
    </div>
  );
}

export default Register;