//rfce
import React, { useEffect } from "react";
import "./Header.css";
import amazonLogo from "./media/amazon_PNG25.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //   console.log(authUser);
      if (authUser) {
        //you are already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(user);
  return (
    <div className="header">
      <Link to="/">
        <img src={amazonLogo} alt="amazon logo" className="header_logo" />
      </Link>
      <div className="header_opt">
        <LocationOnIcon />
      </div>
      <div className="header_option">
        <span className="option1">Hello</span>
        <span className="option2">Select Your Address</span>
      </div>
      <div className="header_input">
        <input type="text" className="input_field"></input>
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="option1">{user ? user.email : "Hello"}</span>
            <span className="option2">{user ? "Sign-out" : "Sign-in"}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="option1">Returns</span>
          <span className="option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="option1">Your</span>
          <span className="option2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="basket basketcount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
