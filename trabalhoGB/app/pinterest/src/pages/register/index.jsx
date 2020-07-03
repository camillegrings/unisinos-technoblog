import React from "react";
import "./style.css";

import { Header } from "../../components";



function Register(){
 function renderElements(){
 return(  
   React.createElement(
    "textarea",
    {id :"Nome"},
    "Adicione um titulo"
  ),

  React.createElement(
    "textarea",
    {id :"Nome"},
    "Conte sobre a sua criação"
  ),

 React.createElement(
    "input",
    {id : "upload"},
    "cole aqui seu trabalho"
  )  
 );
 }
  


 return (
  <div>
    <header className="App-header">
      <Header />
    </header>
    <div className="container">{renderElements()}</div>
  </div>
);

};


export default Register;
