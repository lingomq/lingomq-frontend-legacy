import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home.jsx";
import "./router.component.scss";
import { Wrapper } from "../pages/wrapper.jsx";
import { Cookies } from "react-cookie";

const Router = () => {
  const cookies = new Cookies();
  const at = cookies.get("access-token");
  const homeElement = at === undefined ? <Home/> : <Wrapper/>
  
  return (
    <div className={"component" + (at === undefined? "" : " auth-component")}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={homeElement} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
