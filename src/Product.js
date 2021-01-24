import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>
          Nokia 5.3 Android One Smartphone with Quad Camera, 4 GB RAM and 64 GB
          Storage - Charcoal
        </p>
        <p className="price">
          <small>₹</small>
          <strong>11,498.00 </strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        className="product_image"
        src="https://images-na.ssl-images-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg"
        alt="product image"
      />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
