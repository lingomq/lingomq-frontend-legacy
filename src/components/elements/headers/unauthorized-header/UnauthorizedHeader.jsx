import styles from './UnauthorizedHeader.module.scss';
import React, { useState } from "react";
import { HamburgerMenuPictureImage } from '../../../general/images.jsx';
import Modal from '../../../ui/modal/Modal.jsx';
import SignModal from '../../modals/SignModal.jsx';
import RoundedButton from '../../../ui/buttons/rounded/RoundedButton.jsx';
import { modalSize } from '../../../ui/modal/modalSize.js';
import ModalManager from '../../../ui/modal/ModalManager.js';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isShowModal, setIsShowModal] = useState(false);

    function showHamburger() {
        let hamburger = document.getElementsByClassName(styles["hamburger-button"])[0];
        let hamburgerMenu = document.getElementsByClassName(
            styles["hamburger-component"]
        )[0];

        hamburger.onclick = function () {
            setIsVisible(!isVisible);
            hamburgerMenu.style.display = isVisible ? "flex" : "none";
        };
    }

    function hideHamburger() {
        let hamburgerMenu = document.getElementsByClassName(
            styles["hamburger-component"]
        )[0];

        setIsVisible(false);
        hamburgerMenu.style.display = isVisible ? "flex" : "none";
    }

    function mobileHamburgerNavigation(addr) {
        window.location.href = addr;
        hideHamburger();
    }

    const handleShowModal = () => {
        ModalManager.addModal(modalSize.AVERAGE, <SignModal/>);
    };

    return (
        <div className={styles["unauthorized-header"]}>
            <div className={styles["header-component"]}>
                <div className={styles["logo-section"]}>
                    <div className={styles["logo"]}>
                        <p className={styles["logo-main"]}>Lingo</p>
                        <p className={styles["logo-sub"]}>mq</p>
                    </div>
                </div>
                <div className={styles["header-navigation"]}>
                    <a href="#start" className={styles["header-link"]}>
                        НАЧАТЬ
                    </a>
                    <a href="#secondary-section" className={styles["header-link"]}>
                        О НАС
                    </a>
                </div>
                <div className={styles["auth"]}>
                    <RoundedButton
                        text="ВХОД"
                        onClick={handleShowModal}
                   />
                </div>
                <div
                    className={styles["hamburger-button"]}
                    onClick={() => showHamburger()}
                >
                    <img src={HamburgerMenuPictureImage} />
                </div>
            </div>
            <div className={styles["hamburger-component"]}>
                <div className={styles["header-hamburger-navigation"]}>
                    <a
                        className={styles["header-link"]}
                        onClick={() => mobileHamburgerNavigation("#start")}
                    >
                        НАЧАТЬ
                    </a>
                    <a
                        className={styles["header-link"]}
                        onClick={() =>
                            mobileHamburgerNavigation("#secondary-section")
                        }
                    >
                        О НАС
                    </a>
                </div>
                <div className={styles["auth-hamburger"]}>
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
