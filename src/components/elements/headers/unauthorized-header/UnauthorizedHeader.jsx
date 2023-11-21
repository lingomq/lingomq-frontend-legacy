import './UnauthorizedHeader.scss';
import React, { useState } from "react";
import { HamburgerMenuPictureImage } from '../../../general/Images.jsx';
import Modal from '../../../ui/modal/Modal.jsx';
import SignModal from '../../modals/SignModal.jsx';
import RoundedButton from '../../../ui/buttons/rounded/RoundedButton.jsx';
import { modalSize } from '../../../ui/modal/modalSize.js';

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
                isShow={isShowModal}
                showModalFunction={handleShowModal}
                size={modalSize.AVERAGE}
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
                    <RoundedButton
                        text="ВХОД"
                        onClick={handleShowModal}
                   />
                </div>
                <div
                    className="hamburger-button"
                    onClick={() => showHamburger()}
                >
                    <img src={HamburgerMenuPictureImage} />
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
                    <RoundedButton
                        text="ВХОД"
                        onClick={handleShowModal}
                   />
                </div>
            </div>
        </div>
    );
};

export default Header;
