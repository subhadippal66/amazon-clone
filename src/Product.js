import React from "react";
import "./Product.css";
import NumberFormat from "react-number-format";
import { useStateValue } from "./Stateprovider";

function Product({ title, image, price, rating, id = Date.now() }) {
  const [{ basket }, dispatch] = useStateValue();
  //console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: Date.now(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
        </div>
      </div>

      <img className="product_image" src={image} alt="" />

      <button onClick={addToBasket} className="btn">
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
