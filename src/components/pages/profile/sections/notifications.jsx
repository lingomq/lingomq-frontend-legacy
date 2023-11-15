import "./notifications.scss";

export const Notifications = () => {
	return (
		<div className="notifications-section">
			<div className="notification-card">
				<div className="notification-card-main">
					<div className="notification-card-status">
						<div className="circle"></div>
					</div>
					<div className="notification-card-content">
						<div className="notification-card-content-title">
							<p className="notification-card-content-title-header">
								Notification name
							</p>
							<p className="notification-card-content-title-date">
								11.11.2011
							</p>
						</div>
						<p className="notification-card-content-message">
							Notification description.
							sadffffffffffffffffffffffffffffffffffffffffffffffffffffff
						</p>
					</div>
				</div>
				<div className="notification-remove-content">
					<div className="close-button">x</div>
				</div>
			</div>
			<div className="notification-card">
				<div className="notification-card-main">
					<div className="notification-card-status">
						<div className="circle notification-info"></div>
					</div>
					<div className="notification-card-content">
						<div className="notification-card-content-title">
							<p className="notification-card-content-title-header">
								Notification name
							</p>
							<p className="notification-card-content-title-date">
								11.11.2011
							</p>
						</div>
						<p className="notification-card-content-message">
							Notification description.
							sadffffffffffffffffffffffffffffffffffffffffffffffffffffff
						</p>
					</div>
				</div>
				<div className="notification-remove-content">
					<div className="close-button">x</div>
				</div>
			</div>
			<div className="notification-card">
				<div className="notification-card-main">
					<div className="notification-card-status">
						<div className="circle  notification-important"></div>
					</div>
					<div className="notification-card-content">
						<div className="notification-card-content-title">
							<p className="notification-card-content-title-header">
								Notification name
							</p>
							<p className="notification-card-content-title-date">
								11.11.2011
							</p>
						</div>
						<p className="notification-card-content-message">
							Notification description.
							sadffffffffffffffffffffffffffffffffffffffffffffffffffffff
						</p>
					</div>
				</div>
				<div className="notification-remove-content">
					<div className="close-button">x</div>
				</div>
			</div>
		</div>
	);
};
