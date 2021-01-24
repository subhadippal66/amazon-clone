//rfce
import React from "react";
import "./Header.css";
import amazonLogo from "./media/amazon_PNG25.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img src={amazonLogo} alt="amazon logo" className="header_logo" />

      <div className="header_input">
        <input type="text" className="input_field"></input>
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="option1">Hello</span>
          <span className="option2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="option1">Returns</span>
          <span className="option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="option1">Your</span>
          <span className="option2">Prime</span>
        </div>
        <div className="header_basket">
          <ShoppingBasketIcon />
          <span className="basket basketcount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
