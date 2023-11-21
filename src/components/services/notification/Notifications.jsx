import React, { useEffect, useState } from "react";
import NotificationManager from "./notificationManager.js";
import Notification from "./Notification.jsx";

const Notifications = () => {
  function onArrayChange() {
    const updateNotifications = [ ...NotificationManager.notificationData];
    setNotifications(updateNotifications);

  }

  const [notifications, setNotifications] = useState(NotificationManager.notificationData);
  NotificationManager.subscribe(onArrayChange);
  useEffect(() => {
    setNotifications(NotificationManager.notificationData);
  }, []);

  return <div>{
    notifications.map((item) =>
      <Notification title={item.title} message={item.message} level={item.level ?? "info"} key={item.id} />
    )}
    </div>;
};

export default Notifications;
