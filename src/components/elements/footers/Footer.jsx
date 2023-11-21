import styles from "./Footer.module.scss";

const Footer = (props) => {
    if (props.isShow)
    {
        return (
            <div className={styles["footer"]}>
                <div className={styles["footer-navigation"]}>
                    <p className={styles["footer-navigation-main-p"]}>КАРТА САЙТА</p>
                    <ul className={styles["footer-navigation-ul"]}>
                        <li className={styles["footer-navigation-li"]}>
                            <a className={styles["footer-navigation-li-a"]} href="#start">
                                НАЧАТЬ
                            </a>
                        </li>
                        <li className={styles["footer-navigation-li"]}>
                            <a className={styles["footer-navigation-li-a"]} href="#secondary-section">
                                О НАС
                            </a>
                        </li>         
                        <li className={styles["footer-navigation-li"]}>
                            <a className={styles["footer-navigation-li-a"]} href="">
                                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                            </a>
                        </li>
                        <li className={styles["footer-navigation-li"]}>
                            <a className={styles["footer-navigation-li-a"]} href="">
                                ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles["footer-last-section"]}>
                    <div className={styles["footer-logo-section"]}>
                        <div className={styles["footer-logo"]}>
                            <p className={styles["footer-logo-main"]}>lingo</p>
                            <p className={styles["footer-logo-sub"]}>mq</p>
                        </div>
                        <p className={styles["footer-copyright"]}>
                            © LingoMq. Все права защищены
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Footer;
