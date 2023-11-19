import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../pages/home/home.jsx";
import "./router.component.scss";
import { Wrapper } from "../pages/wrapper.jsx";
import { isAuthenticated } from "../../services/authentication.js";
import { Confirm } from "../pages/confirm/confirm.jsx";
import { Profile } from '../pages/profile/profile.jsx';
import { Dictionary } from "../pages/dictionary/dictionary.jsx";
import { Main } from "../pages/main/Main.jsx";
import { Notifications } from "../pages/notifications/notifications.jsx";

const CustomRouter = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [subTitle, setSubTitle] = useState("");
    const profileElement = <Wrapper title="ПРОФИЛЬ" subTitle={subTitle}
     element={<Profile changeSubTitleMethod={changeSubTitle} />}/>;

    function changeSubTitle(title) {
        setSubTitle(title);
    }

    const homeElement = !isAuthenticate ? <Home /> : <Wrapper title="ГЛАВНАЯ" element={<Main/>}/>;

    useEffect(() => {
        async function checkAuth() {
            setIsAuthenticate(await isAuthenticated());
        }
        checkAuth();
    }, []);

    return (
        <div
            className={"component" + (!isAuthenticate ? "" : " auth-component")}
        >
            <Routes>
                <Route exact path="/" element={homeElement} />
                <Route path="confirm" element={<Confirm />} />
                <Route path="profile" element={profileElement}/>
                <Route path="dict" element={<Wrapper title="СЛОВАРЬ" element={<Dictionary/>}/>}/>
                <Route path="notifications" element={<Wrapper title="УВЕДОМЛЕНИЯ" element={<Notifications/>}/>}/>
            </Routes>
        </div>
    );
};

export default CustomRouter;
