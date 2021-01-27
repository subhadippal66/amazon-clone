import React from "react";
import NumberFormat from "react-number-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="price">
        <h3>Subtotal (2 items):</h3>
        <div>
          <NumberFormat
            value={1255}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix="₹"
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </div>
      </div>
      <small className="checkbox">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button className="btn_process">Process to checkout</button>
    </div>
  );
}

export default Subtotal;
