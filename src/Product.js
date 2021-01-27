import React from "react";
import "./Product.css";
import NumberFormat from "react-number-format";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="price">
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix="₹"
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          {/* {function rat(r) {
            for (let index = 0; index < r; index++) {
              <p>⭐</p>;
            }
          }} */}
        </div>
      </div>
      <img className="product_image" src={image} alt="product image" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
