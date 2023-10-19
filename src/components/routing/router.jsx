import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home.jsx";
import "./router.component.scss";

const Router = () => {
  return (
    <div className="component">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
