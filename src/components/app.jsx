import React from "react";
import Application from "./elements/application/Application.jsx";
import Notifications from "./ui/notification/Notifications.jsx";
import ModalProvider from "./ui/modal/ModalProvider.jsx";

const App = () => {

    return (
        <>
            <Notifications/>
            <ModalProvider/>
            <Application/>
        </>
    )
}
export default App;