import React from "react";
import "./Checkout.css";
import Checkout_Product from "./Checkout_Product";
import checkout_banner from "./media/checkout_banner.jpg";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_banner"
          src={checkout_banner}
          alt="checkout_banner"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((p) => (
            <Checkout_Product
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
