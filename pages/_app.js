import React, { useState, useEffect, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/router";
import { setToken, getToken, removeToken } from "../api/token";

import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import '../sass/index.scss'
import "react-toastify/dist/ReactToastify.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [ realoadUser, setReloadUser ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if(token){
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    }else{
      setAuth(null);
    }
    setReloadUser(false);
  }, [realoadUser]);

  const login  = (token) => {
    setToken(token);
    console.log(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logout = () =>{
    if(auth){
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
  );

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value = {authData}>
      <Component {...pageProps}/>
        <ToastContainer
          position = "top-right"
          autoClose = {5000}
          hideProgressBar
          newestOntop
          closeOnClick
          rtl = {false}
          pauseOnFocusLoss = {false}
          draggable
          pauseOnHover
        />
    </AuthContext.Provider>
  );
}

export default MyApp
