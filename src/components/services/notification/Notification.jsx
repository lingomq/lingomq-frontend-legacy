import styles from './Notification.module.scss';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const Notification = ({ title, message, level = ""}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isNone, setIsNone] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(false), 4000);
        setTimeout(() => setIsNone(true), 4500);
    });

    return(
        <div key={uuid()} className={`${styles.notification} ${(isVisible ? styles.visible : styles.hidden)} ${(isNone ? styles.none : '')}`} >
            <div className={`${styles.notificationContent} ${styles[level]}`}>
                <p className={styles.notificationContentTitle}>{title}</p>
                <p className={styles.notificationContentDescription}>{message}</p>
            </div>
        </div>
    )
};

export default Notification;