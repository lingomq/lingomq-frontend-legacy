import "./footer.component.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-navigation">
                <p className="footer-navigation-main-p">Карта сайта</p>
                <ul className="footer-navigation-ul">
                    <li className="footer-navigation-li">
                        <a className="footer-navigation-li-a" href="">
                            Главная
                        </a>
                    </li>
                    <li className="footer-navigation-li">
                        <a className="footer-navigation-li-a" href="">
                            Начать
                        </a>
                    </li>
                    <li className="footer-navigation-li">
                        <a className="footer-navigation-li-a" href="">
                            О нас
                        </a>
                    </li>
                    <li className="footer-navigation-li">
                        <a className="footer-navigation-li-a" href="">
                            Поддержка
                        </a>
                    </li>
                    <li className="footer-navigation-li">
                        <a className="footer-navigation-li-a" href="">
                            Рейтинг
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-last-section">
                <div className="footer-logo">
                    <p className="footer-logo-main">Lingo</p>
                    <p className="logo-sub">mq</p>
                </div>
                <p className="footer-copyright">© LingoMq. Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;
