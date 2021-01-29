import React from "react";
import Checkout_Product from "./Checkout_Product";
import "./Payment.css";
import { useStateValue } from "./Stateprovider";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment_product">
            {basket.map((p) => (
              <Checkout_Product
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
