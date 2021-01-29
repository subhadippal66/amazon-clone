import React from "react";
import "./Home.css";
import Banner_1 from "./media/amazon_banner_1.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_banner" src={Banner_1} alt="Banner 1" />
      <div className="product_container">
        <Product
          title="Redmi 9A (Nature Green, 2GB Ram, 32GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/710fuhtgISL._SL1500_.jpg"
          price="6,999.00"
          rating="4"
        />
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
          rating={5}
        />
      </div>
      <div className="product_container">
        <Product
          title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
          image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
          price={34990.0}
          rating={4}
        />
        <Product
          title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
          price={2999.0}
          rating={4}
        />
        <Product
          title="SKYVIK Signi Pro 2 in 1 (Wide+Macro) Clip on Mobile Camera Lens Kit for iPhone, Samsung and Other Smartphones."
          image="https://images-na.ssl-images-amazon.com/images/I/81V6zqNfhYL._SL1500_.jpg"
          price={2299.0}
          rating={4}
        />
      </div>
      <div className="product_container">
        <Product
          title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey"
          image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
          price={224900.0}
          rating={5}
        />
        <Product
          title="Dell XPS 7390 13.3-inch FHD Thin & Light Laptop (10th Gen Core i5-10210U/8GB/512GB SSD/Win 10 + MS Office/Integrated Graphics) White"
          image="https://images-na.ssl-images-amazon.com/images/I/61ovuhL6hrL._SL1000_.jpg"
          price={106005.0}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
