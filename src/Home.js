import React from "react";
import "./Home.css";
import Banner_1 from "./media/amazon_banner_1.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_banner" src={Banner_1} alt="Banner 1" />
      <div className="product_container">
        {/* <Product
          title="Redmi 9A (Nature Green, 2GB Ram, 32GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/710fuhtgISL._SL1500_.jpg"
          price="6,999.00"
          rating="4"
        /> */}
        <Product
          title="Samsung Galaxy M01 Core (Black, 2GB RAM, 32GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/71AYb2AGHXL._SL1500_.jpg"
          price={5999.0}
          rating={4}
        />
        <Product
          title="POLESTAR Noble Blue Casual bagpack/School Bag/Laptop Backpack"
          image="https://images-na.ssl-images-amazon.com/images/I/91SOSQyJXPL._SL1500_.jpg"
          price={399.0}
          rating={4}
        />
        <Product
          title="The Alchemist"
          image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          price={173.0}
          rating={4}
        />
        <Product
          title="Fossil Grant Chronograph Analog Black Dial Men's Watch - FS4832"
          image="https://images-na.ssl-images-amazon.com/images/I/71GhdYtz8cL._UL1500_.jpg"
          price={7095.0}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
