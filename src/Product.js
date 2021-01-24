import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="price">
          <small>₹</small>
          <strong>{price} </strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img className="product_image" src={image} alt="product image" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
