import React from "react";
import "./Home.css";
import Banner_1 from "./media/amazon_banner_1.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_banner" src={Banner_1} alt="Banner 1" />
      <div className="product_container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="product_container">
        <Product />
        <Product />
      </div>
      <div className="product_container">
        <Product />
      </div>
    </div>
  );
}

export default Home;
