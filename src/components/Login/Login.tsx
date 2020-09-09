import React from "react";
import "./Login.scss";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../../firebase";
import { useUserContext } from "../../contexts/UserContext";

const Login: React.FC = () => {
  const [, dispatch] = useUserContext();

  const signInWithGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(provider);
      dispatch({ type: "SET_USER", payload: response.user });
    } catch (error) {
      console.error(error);
    }
  };

  const signInAsGuest = async () => {
    const randomId = Math.floor(Math.random() * 80000) + 10000;
    const user = {
      uid: randomId,
      displayName: `Guest #${randomId}`,
      photoURL:
        "https://www.graphicsprings.com/filestorage/stencils/3f09542940267c887a5bcef0724cf3a4.png?width=500&height=500",
      email: null,
      phoneNumber: null,
      providerId: "client",
    };

    dispatch({ type: "SET_USER", payload: user });
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

      <div className="login__buttons">
        <Button type="submit" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>

        <Button type="submit" onClick={signInAsGuest}>
          Sign In As Guest
        </Button>
      </div>
    </div>
  );
};

export default Login;
