import "./Footer.scss";

const Footer = (props) => {
    if (props.isShow)
    {
        return (
            <div className="footer">
                <div className="footer-navigation">
                    <p className="footer-navigation-main-p">КАРТА САЙТА</p>
                    <ul className="footer-navigation-ul">
                        <li className="footer-navigation-li">
                            <a className="footer-navigation-li-a" href="#start">
                                НАЧАТЬ
                            </a>
                        </li>
                        <li className="footer-navigation-li">
                            <a className="footer-navigation-li-a" href="#secondary-section">
                                О НАС
                            </a>
                        </li>         
                        <li className="footer-navigation-li">
                            <a className="footer-navigation-li-a" href="">
                                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                            </a>
                        </li>
                        <li className="footer-navigation-li">
                            <a className="footer-navigation-li-a" href="">
                                ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-last-section">
                    <div className="footer-logo-section">
                        <div className="footer-logo">
                            <p className="footer-logo-main">lingo</p>
                            <p className="footer-logo-sub">mq</p>
                        </div>
                        <p className="footer-copyright">
                            © LingoMq. Все права защищены
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Footer;
