import React, { useEffect, useState } from "react";
import NotificationManager from "./notificationManager.js";
import Notification from "./Notification.jsx";

const Notifications = () => {
    function onArrayChange() {
        const updateNotifications = [...NotificationManager.notificationData];
        setNotifications(updateNotifications);
    }

    function remove(e) {
        const id = e.target.getAttribute("data-key");
        NotificationManager.remove(id);
    }

    const [notifications, setNotifications] = useState(
        NotificationManager.notificationData
    );
    NotificationManager.subscribe(onArrayChange);
    useEffect(() => {
        setNotifications(NotificationManager.notificationData);
    }, []);

    return (
        <div>
            {notifications.map((item) => (
                <Notification
                    close={remove}
                    title={item.title}
                    message={item.message}
                    level={item.level ?? "info"}
                    key={item.id}
                    id={item.id}
                />
            ))}
        </div>
    );
};

export default Notifications;
