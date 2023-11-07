import "./header.component.scss";
import Images from "../../../common/local-images.jsx";
import Modal from "../../modals/modal-window.jsx";
import React, { useState } from "react";

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

  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <div className="unauthorized-header">
      <Modal
        isModalShow={isShowModal}
        handleChange={handleShowModal}
        width="average"
        content={
          <form className="modal-sign-in">
            <div className="modal-sign-in-header">
              <p>ВХОД</p>
            </div>
            <div className="modal-sign-in-inputs">
              <div className="modal-sign-in-input">
                <label>E-mail</label>
                <input placeholder="example@mail.ru" />
              </div>

              <div className="modal-sign-in-input">
                <label>Password</label>
                <input type="password" placeholder="your password here" />
              </div>
            </div>
            <div className="modal-sign-in-remember-me">
              <label>
                <input type="checkbox" name="remember" />
                Запомнить меня
              </label>
            </div>
            <div className="modal-sign-in-buttons">
              <button className="default-button">ВХОД</button>
              <button className="default-button alt-btn">
                СОЗДАТЬ АККАУНТ
              </button>
            </div>
            <div className="modal-sign-in-forgot-password">
              <p>ЗАБЫЛИ ПАРОЛЬ?</p>
              <a className="modal-sign-in-recovery-link" href="#">ВОССТАНОВИТЬ</a>
            </div>
          </form>
        }
      />
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
          <button className="default-button auth-btn" onClick={handleShowModal}>
            ВХОД
          </button>
        </div>
        <div className="hamburger-button" onClick={() => showHamburger()}>
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
          <button className="default-button auth-btn" onClick={handleShowModal}>
            ВХОД
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
