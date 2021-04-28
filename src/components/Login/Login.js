import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import { UserContext } from "../../App";

function Login() {
  const [user, setUser] = useContext(UserContext);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          className="facebook"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign IN
      </Button>
    </div>
  );
}

export default Login;
