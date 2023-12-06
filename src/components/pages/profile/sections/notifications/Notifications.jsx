import { useState } from "react";
import styles from "./Notifications.module.scss";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";
import { getNotifications, getNotificationsAsync } from "../../../../../services/api/notifications/notifications";
import ModalManager from "../../../../ui/modal/ModalManager";
import { modalSize } from "../../../../ui/modal/modalSize";
import NotificationContent from "../../../../elements/modals/notification-content/NotificationContent.jsx";

export const Notifications = () => {
	const [notifications, setNotifications] = useState();

	useEffect(() => {
		const fetchData = async () => {

			const handleShowNotification = (item) => {
				ModalManager.addModal(modalSize.SMALL, <NotificationContent data={item.notification}/>)
			}

			const result = await getNotificationsAsync();
			const array = result.data.data;
			const notificationArray = [];
			array.map((item) => notificationArray.push(
				<div className={styles.notificationCard} key={uuid()} onClick={() => handleShowNotification(item)}>
				<div className={styles.notificationCardMain}>
					<div className={styles.notificationCardStatus}>
						<div className={`${styles.circle} ${item.notification.notificationType.name ? 
						styles[item.notification.notificationType.name] : ""}`}></div>
					</div>
					<div className={styles.notificationCardContent}>
						<div className={styles.notificationCardContentTitle}>
							<p className={styles.notificationCardContentTitleHeader}>
								{item.notification.title}
							</p>
							<p className={styles.notificationCardContentTitleDate}>
								{item.dateOfReceipt}
							</p>
						</div>
						<p className={styles.notificationCardContentMessage}>
							{item.notification.content}
						</p>
					</div>
				</div>
				<div>
				</div>
			</div>
			))
			setNotifications(notificationArray);
		}

		fetchData();
	}, []);

	return notifications && (
		<div className={styles.notificationsSection}>
		{
			notifications.length === 0 ? <p className={styles.emptyNotificationsText}>Уведомлений нет</p> : notifications
		}
			
		</div>
	);
};
