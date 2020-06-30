import React from "react";
import "./style.css";

import { Header } from "../../components";

const images = [
  "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4450090/pexels-photo-4450090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/4593876/pexels-photo-4593876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/4562685/pexels-photo-4562685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/4327786/pexels-photo-4327786.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Home() {
  function renderImages() {
    return images.map((image) => {
      return <img src={image} class="image" />;
    });
  }

  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <div className="container">{renderImages()}</div>
    </div>
  );
}

export default Home;
