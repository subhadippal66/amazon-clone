import React from "react";
import NumberFormat from "react-number-format";
import { useStateValue } from "./Stateprovider";
import "./Subtotal.css";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const t_price = (b) => {
    let p = 0;
    for (let a of b) {
      p += a.price;
    }
    return p;
  };

  return (
    <div className="subtotal">
      <div className="price">
        <h3>Subtotal ({basket?.length} items):</h3>
        <div>
          <NumberFormat
            value={t_price(basket)}
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
      <button onClick={(e) => history.push("/payment")} className="btn_process">
        Process to checkout
      </button>
    </div>
  );
}

export default Subtotal;
