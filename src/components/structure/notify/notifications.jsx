import React, { useEffect, useState } from "react";
import NotificationManager, { notificationModel } from "./notificationManager.js";
import Notification from "./notification.jsx";

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
    <button>add notify</button></div>;
};

export default Notifications;
