import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RoutesrApp from "./components/RoutesrApp";
import { AuthContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Fragment>

      <Navbar />
      <RoutesrApp />
      </Fragment>
    </AuthContext.Provider>
  );
};

export default App;
