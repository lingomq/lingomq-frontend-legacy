import React from "react";
import Application from "./elements/application/Application.jsx";
import Notifications from "./services/notification/Notifications.jsx";

const App = () => {

    return (
        <>
            <Notifications/>
            <Application/>
        </>
    )
}
export default App;