import React from "react";
import Router from "../routing/router.jsx";
import UnauthorizedHeader from "../structure/headers/unauthorized-header/header.jsx";
import AuthorizedHeader from "../structure/headers/authorized-header/header.jsx";
import Footer from "../structure/footers/default-footer/footer.jsx";
import Notifications from "../structure/notify/notifications.jsx";
import { Cookies } from "react-cookie";

const App = () => {
    const cookies = new Cookies();
    const at = cookies.get("access-token");

    return (
        <div className="wrapper">
            { at === undefined? <UnauthorizedHeader/> : <AuthorizedHeader/>}
            <Notifications/>
            <Router/>
            <Footer isShow={true}/>
        </div>
    )
}
export default App;