import styles from "./Notification.module.scss";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { CloseImage } from "../../general/images.jsx";

const Notification = ({ title, message, level = "", close, id }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isNone, setIsNone] = useState(false);

    const modalHandler = (e) => {
        close(e)
    }

    useEffect(() => {
        setTimeout(() => setIsVisible(false), 4000);
        setTimeout(() => setIsNone(true), 4500);
    });

    return (
        <div
            key={uuid()}
            className={`${styles.notification} ${
                isVisible ? styles.visible : styles.hidden
            } ${isNone ? styles.none : ""}`}
        >
            <div>
                <div
                    className={`${styles.notificationContent} ${styles[level]}`}
                >
                    <p className={styles.notificationContentTitle}>{title}</p>
                    <p className={styles.notificationContentDescription}>
                        {message}
                    </p>
                </div>
                <div className={styles.closeContent}>
                    <img
                        src={CloseImage}
                        data-key={id}
                        className={styles.modalWindowClose}
                        onClick={(e) => modalHandler(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Notification;
