import React from "react";
import NumberFormat from "react-number-format";
import "./Checkout_Product.css";
import { useStateValue } from "./Stateprovider";

function Checkout_Product({ title, image, price, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="product_checkout">
      <img src={image} className="img" alt="" />
      <div className="product_details">
        <h3>{title}</h3>
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
        <button className="remove_btn" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default Checkout_Product;
