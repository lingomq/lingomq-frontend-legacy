import styles from "./Notifications.module.scss";

export const Notifications = () => {
	return (
		<div className={styles.notificationsSection}>
			<div className={styles.notificationCard}>
				<div className={styles.notificationCardMain}>
					<div className={styles.notificationCardStatus}>
						<div className={styles.circle}></div>
					</div>
					<div className={styles.notificationCardContent}>
						<div className={styles.notificationCardContentTitle}>
							<p className={styles.notificationCardContentTitleHeader}>
								Notification name
							</p>
							<p className={styles.notificationCardContentTitleDate}>
								11.11.2011
							</p>
						</div>
						<p className={styles.notificationCardContentMessage}>
							Notification description.
							sadffffffffffffffffffffffffffffffffffffffffffffffffffffff
						</p>
					</div>
				</div>
				<div>
					<div className={styles.closeButton}>x</div>
				</div>
			</div>
		</div>
	);
};
