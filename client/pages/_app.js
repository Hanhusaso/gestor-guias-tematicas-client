import React, { useState, useEffect, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import { setToken, getToken, removeToken } from "../api/token";

import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import '../sass/index.scss'
import "react-toastify/dist/ReactToastify.css";
import Router from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [ realoadUser, setReloadUser ] = useState(false);

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
      Router.push("/");
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
      <Component {...pageProps}>
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
      </Component>
    </AuthContext.Provider>
  );
}

export default MyApp
