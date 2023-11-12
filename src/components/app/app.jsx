import React from "react";
import Router from "../routing/router.jsx";
import UnauthorizedHeader from "../structure/headers/unauthorized-header/header.jsx";
import AuthorizedHeader from "../structure/headers/authorized-header/header.jsx";
import Footer from "../structure/footers/default-footer/footer.jsx";
import Notifications from "../structure/notify/notifications.jsx";

const App = () => {
    return (
        <div className="wrapper">
            <UnauthorizedHeader/>
            <Notifications/>
            <Router/>
            <Footer isShow={true}/>
        </div>
    )
}
export default App;