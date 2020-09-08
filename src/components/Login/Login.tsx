import React from "react";
import "./Login.scss";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../../firebase";
import { useUserContext, UserActionTypes } from "../../contexts/UserContext";

const Login: React.FC = () => {
  const { dispatch } = useUserContext();

  const signIn = async () => {
    try {
      const response = await auth.signInWithPopup(provider);
      dispatch({ type: UserActionTypes.SET_USER, payload: response.user });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://en.facebookbrand.com/wp-content/uploads/2019/06/f_logo_RGB-Blue_512.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
