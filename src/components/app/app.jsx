import React from "react";
import Router from "../routing/router.jsx";
import UnauthorizedHeader from "../structure/headers/unauthorized-header/header.jsx";

const App = () => {
    return (
        <div className="wrapper">
            <UnauthorizedHeader/>
            <Router/>
        </div>
    )
}
export default App;