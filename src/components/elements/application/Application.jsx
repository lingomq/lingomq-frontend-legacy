import { Route, Routes } from "react-router";
import Home from "../../pages/home/Home.jsx";
import styles from "./Application.module.scss";
import UnauthorizedHeader from "../headers/unauthorized-header/UnauthorizedHeader.jsx";
import AuthorizedHeader from "../headers/authorized-header/AuthorizedHeader.jsx";
import { Suspense, useEffect, useState } from "react";
import { getNewTokens, getRefreshToken, isAuthenticated } from "../../../services/authentication.js";
import { getUserData, getUserDataAsync } from "../../../services/api/identity/identity.js";
import Footer from "../footers/Footer.jsx";
import Wrapper from "../wrapper/Wrapper.jsx";
import { Main } from "../../pages/main/Main.jsx";
import { Dictionary } from "../../pages/dictionary/Dictionary.jsx";
import { Confirm } from "../../pages/confirm/Confirm.jsx";
import { Profile } from "../../pages/profile/profile.jsx";
import { Notifications } from "../../pages/profile/sections/notifications/Notifications.jsx";
import Practice from "../../pages/practice/Practice.jsx";

const Application = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [user, setUser] = useState(null);
    const [subTitle, setSubTitle] = useState("");

    function changeSubTitle(title) {
        setSubTitle(title);
    }

    useEffect(() => {
        const checkAuth = async() => {
            const isAuth = isAuthenticated();
            setIsAuthenticate(isAuth);
            if (isAuth) {
                const takenUser = await getUserDataAsync();
                setUser(takenUser.data.data);
            }
        }
        checkAuth();
    }, []);

    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <div className={`${styles.wrapper} ${isAuthenticate ? styles.authWrapper : ""}`}>
                {isAuthenticate ? <AuthorizedHeader data={user}/> : <UnauthorizedHeader />}
                <Routes>
                    <Route exact path="/" element={!isAuthenticate ? <Home /> : <Wrapper title="ГЛАВНАЯ" element={<Main/>}/>} />
                    <Route path="confirm" element={<Wrapper title="ПОДТВЕРЖДЕНИЕ ПОЧТЫ" element={<Confirm/>}/>}/>
                    <Route path="dict" element={user && <Wrapper title="СЛОВАРЬ" element={<Dictionary/>}/>}/>
                    <Route path="profile" element={user && <Wrapper title="ПРОФИЛЬ" subTitle={subTitle} element={<Profile data={user} changeSubTitleMethod={changeSubTitle} /> }/>}/>
                    <Route path="notifications" element={user && <Wrapper title="УВЕДОМЛЕНИЯ" element={<Notifications /> }/>}/>
                    <Route path="practice/:c/:l" element={user && <Wrapper title="ПРАКТИКА" element={<Practice/> }/>}/>
                    <Route path = "*" element={<div>Not found page will be here</div>}/>
                </Routes>
            </div>
            <Footer isShow={!isAuthenticate} />
        </Suspense>
    );
};

export default Application;
