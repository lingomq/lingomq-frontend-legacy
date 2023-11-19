import "./header.component.scss";
import Images from "../../../common/local-images.jsx";
import Modal from "../../modals/modal-window.jsx";
import React, { useState } from "react";
import SignModal from "../../modals/authorization/sign-modal.jsx";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isShowModal, setIsShowModal] = useState(false);

    function showHamburger() {
        let hamburger = document.getElementsByClassName("hamburger-button")[0];
        let hamburgerMenu = document.getElementsByClassName(
            "hamburger-component"
        )[0];

        hamburger.onclick = function () {
            setIsVisible(!isVisible);
            hamburgerMenu.style.display = isVisible ? "flex" : "none";
        };
    }

    function hideHamburger() {
        let hamburgerMenu = document.getElementsByClassName(
            "hamburger-component"
        )[0];

        setIsVisible(false);
        hamburgerMenu.style.display = isVisible ? "flex" : "none";
    }

    function mobileHamburgerNavigation(addr) {
        window.location.href = addr;
        hideHamburger();
    }

    const handleShowModal = () => {
        setIsShowModal(!isShowModal);
    };

    return (
        <div className="unauthorized-header">
            <Modal
                isModalShow={isShowModal}
                handleChange={handleShowModal}
                width="average"
                content={<SignModal />}
            />
            <div className="header-component">
                <div className="logo-section">
                    <div className="logo">
                        <p className="logo-main">Lingo</p>
                        <p className="logo-sub">mq</p>
                    </div>
                </div>
                <div className="header-navigation">
                    <a href="#start" className="header-link">
                        НАЧАТЬ
                    </a>
                    <a href="#secondary-section" className="header-link">
                        О НАС
                    </a>
                </div>
                <div className="auth">
                    <button
                        className="default-button auth-btn"
                        onClick={handleShowModal}
                    >
                        ВХОД
                    </button>
                </div>
                <div
                    className="hamburger-button"
                    onClick={() => showHamburger()}
                >
                    <img src={Images.HamburgerMenuPicture} />
                </div>
            </div>
            <div className="hamburger-component">
                <div className="header-hamburger-navigation">
                    <a
                        className="header-link"
                        onClick={() => mobileHamburgerNavigation("#start")}
                    >
                        НАЧАТЬ
                    </a>
                    <a
                        className="header-link"
                        onClick={() =>
                            mobileHamburgerNavigation("#secondary-section")
                        }
                    >
                        О НАС
                    </a>
                </div>
                <div className="auth-hamburger">
                    <button
                        className="default-button auth-btn"
                        onClick={handleShowModal}
                    >
                        ВХОД
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
