import React, { useEffect, useState } from "react";
import CustomRouter from "../routing/custom-router.jsx";
import UnauthorizedHeader from "../structure/headers/unauthorized-header/header.jsx";
import AuthorizedHeader from "../structure/headers/authorized-header/header.jsx";
import Footer from "../structure/footers/default-footer/footer.jsx";
import Notifications from "../structure/notify/notifications.jsx";
import { isAuthenticated } from "../../services/authentication.js";

const App = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            setIsAuthenticate(await isAuthenticated());
        }
        checkAuth();
    }, []);

    return (
        <div className="wrapper">
            {  isAuthenticate ? <AuthorizedHeader/> : <UnauthorizedHeader/>}
            <Notifications/>
            <CustomRouter/>
            <Footer isShow={!isAuthenticate}/>
        </div>
    )
}
export default App;