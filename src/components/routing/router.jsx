import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../pages/home/home.jsx";
import "./router.component.scss";
import { Wrapper } from "../pages/wrapper.jsx";
import { isAuthenticated } from "../../services/authentication.js";

const Router = () => {

  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const homeElement = !isAuthenticate ? <Home /> : <Wrapper />;

  useEffect(() => {
    async function checkAuth() {
      setIsAuthenticate(await isAuthenticated());
    }
    checkAuth();
  }, []);

  return (
    <div className={"component" + (!isAuthenticate ? "" : " auth-component")}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={homeElement} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
