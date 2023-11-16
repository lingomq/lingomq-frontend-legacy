import "./security.scss";
import Modal from "../../../structure/modals/modal-window.jsx";
import { useState } from "react";
import { NonSensitiveData } from "../../../structure/modals/identity/credentials/non-sensitive-data.jsx";
import { ChangePassword } from "../../../structure/modals/identity/credentials/change-password.jsx";
import { RemoveAccount } from "../../../structure/modals/identity/credentials/remove-account.jsx";

export const Security = () => {
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState(<NonSensitiveData />);

    function handleShowModal() {
        setShowModal(!showModal);
    }

    function openModal(type) {
        let view = <NonSensitiveData />;
        if (type === "non-credentials") view = <NonSensitiveData />;
        else if (type === "change-password")
            view = <ChangePassword verificationText={"lingomq/zmqpkyf"} />;
        else if (type === "remove-account") view = <RemoveAccount verificationText={"lingommq/zmqpkyf"}/>;

        setModal(view);
        setShowModal(true);
    }

    return (
        <div className="security-section">
            <Modal
                isModalShow={showModal}
                handleChange={handleShowModal}
                content={modal}
            />
            <div className="security-section-content">
                <div className="security-change-section">
                    <p className="security-data-title">
                        Смена почты или номера телефона
                    </p>
                    <div className="non-sensitive-data-content">
                        <div className="non-sensitive-data-card">
                            <p className="non-sensitive-data-card-name">
                                Email
                            </p>
                            <p className="non-sensitive-data-card-content">
                                zmqpkyf@yandex.ru
                            </p>
                        </div>
                        <div className="non-sensitive-data-card">
                            <p className="non-sensitive-data-card-name">
                                Номер телефона
                            </p>
                            <p className="non-sensitive-data-card-content">
                                Не указан
                            </p>
                        </div>
                    </div>
                    <button
                        className="default-button"
                        onClick={() => openModal("non-credentials")}
                    >
                        ИЗМЕНИТЬ
                    </button>
                </div>
                <div className="security-change-section">
                    <p className="security-data-title">
                        Смена пароля и удаление аккаунта
                    </p>
                    <button
                        className="default-button danger-btn"
                        onClick={() => openModal("change-password")}
                    >
                        СМЕНА ПАРОЛЯ
                    </button>
                    <button
                        className="default-button danger-btn"
                        onClick={() => openModal("remove-account")} >
                        УДАЛЕНИЕ АККАУНТА
                    </button>
                </div>
            </div>
        </div>
    );
};
