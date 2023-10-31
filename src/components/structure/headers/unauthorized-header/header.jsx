import "./header.component.scss";
import Images from "../../../common/local-images.jsx";

const Header = () => {
    return (
        <div className="unauthorized-header">
            <div className="header-component">
                <div className="logo-section">
                    <div className="logo">
                        <p className="logo-main">Lingo</p>
                        <p className="logo-sub">mq</p>
                    </div>
                </div>
                <div className="header-navigation">
                    <a href="" className="header-link">
                        НАЧАТЬ
                    </a>
                    <a href="" className="header-link">
                        О НАС
                    </a>
                    <a href="" className="header-link">
                        ПОДДЕРЖКА
                    </a>
                    <a href="" className="header-link">
                        РЕЙТИНГ
                    </a>
                </div>
                <div className="auth">
                    <button className="default-button">ВХОД</button>
                </div>
                <div className="hamburger-button">
                    <img src={Images.HamburgerMenuPicture} />
                </div>
            </div>
            <div className="hamburger-component">
                <div className="header-hamburger-navigation">
                    <a href="" className="header-link">
                        НАЧАТЬ
                    </a>
                    <a href="" className="header-link">
                        О НАС
                    </a>
                    <a href="" className="header-link">
                        ПОДДЕРЖКА
                    </a>
                    <a href="" className="header-link">
                        РЕЙТИНГ
                    </a>
                </div>
                <div className="auth-hamburger">
                    <button className="default-button">ВХОД</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
