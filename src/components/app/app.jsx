import React from "react";
import Router from "../routing/router.jsx";
import UnauthorizedHeader from "../structure/headers/unauthorized-header/header.jsx";
import Footer from "../structure/footers/default-footer/footer.jsx";

const App = () => {
    return (
        <div className="wrapper">
            <UnauthorizedHeader/>
            <Router/>
            <Footer isShow={true}/>
        </div>
    )
}
export default App;