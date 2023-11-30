import styles from "./NotificationContext.module.scss";

const NotificationContent = ({data}) => {
    return (
        <>
            <p>УВЕДОМЛЕНИЕ</p>
            <p className={styles.title}>{data.title}</p>
            <div className={styles.content}>
                <p className={styles.contentText}>{data.content}</p>
            </div>
        </>
    )
}

export default NotificationContent;