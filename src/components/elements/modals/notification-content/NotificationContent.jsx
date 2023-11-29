import styles from "./NotificationContext.module.scss";

const NotificationContent = ({data}) => {
    return (
        <>
            <p>УВЕДОМЛЕНИЕ</p>
            <p className={styles.content}>Название:</p>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.content}>Контент:</p>
            <p className={styles.content}>{data.content}</p>
        </>
    )
}

export default NotificationContent;