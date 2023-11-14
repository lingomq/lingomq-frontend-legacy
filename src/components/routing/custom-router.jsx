import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../pages/home/home.jsx";
import "./router.component.scss";
import { Wrapper } from "../pages/wrapper.jsx";
import { isAuthenticated } from "../../services/authentication.js";
import { Confirm } from "../pages/confirm/confirm.jsx";

const CustomRouter = () => {
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
      <Routes>
          <Route exact path="/" element={homeElement} />
          <Route path="confirm" element={<Confirm />} />
      </Routes>
    </div>
  );
};

export default CustomRouter;
