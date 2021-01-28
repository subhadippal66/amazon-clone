import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "./media/Amazon logo.png";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";

function Login() {
  const [{ user }, dispatch] = useStateValue();

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
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo} />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} type="submit" className="login_signinBtn">
            Sign-In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon-clone's Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={register} className="login_registerBtn">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
