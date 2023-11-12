import './notification.scss';
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
        <div key={uuid()} className={'notification' + (isVisible ? ' visible' : ' hidden') + (isNone ? ' none' : '')} >
            <div className={'notification-content ' + level}>
                <p className='notification-context-title'>{title}</p>
                <p className='notification-context-description'>{message}</p>
            </div>
        </div>
    )
};

export default Notification;