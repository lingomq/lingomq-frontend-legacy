import "./Security.scss";
import { useState, useEffect } from "react";
import Modal from "../../../../ui/modal/Modal.jsx";
import { ChangePassword } from "../../../../elements/modals/change-password/ChangePassword.jsx";
import { NonSensitiveData } from "../../../../elements/modals/non-sensitive-data/NonSensitiveData.jsx";
import { RemoveAccount } from "../../../../elements/modals/remove-account/RemoveAccount.jsx";
import RoundedButton from "../../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../../ui/buttons/buttonTypes.js";

export const Security = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(data);
    }, []);

    function handleShowModal() {
        setShowModal(!showModal);
    }

    function openModal(type) {
        let view = <NonSensitiveData userData={user?.user} />;
        if (type === "non-credentials")
            view = <NonSensitiveData userData={user?.user} />;
        else if (type === "change-password")
            view = (
                <ChangePassword
                    verificationText={"lingomq/" + user?.nickname}
                />
            );
        else if (type === "remove-account")
            view = (
                <RemoveAccount verificationText={"lingomq/" + user?.nickname} />
            );

        setModal(view);
        setShowModal(true);
    }

    return (
        data && (
            <div className="security-section">
                <Modal
                    isShow={showModal}
                    showModalFunction={handleShowModal}
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
                                    {user?.user?.email}
                                </p>
                            </div>
                            <div className="non-sensitive-data-card">
                                <p className="non-sensitive-data-card-name">
                                    Номер телефона
                                </p>
                                <p className="non-sensitive-data-card-content">
                                    {user?.user?.phone === ""
                                        ? "Не указан"
                                        : user?.user?.phone}
                                </p>
                            </div>
                        </div>
                        <RoundedButton
                            text="ИЗМЕНИТЬ"
                            onClick={() => openModal("non-credentials")}
                        />
                    </div>
                    <div className="security-change-section">
                        <p className="security-data-title">
                            Смена пароля и удаление аккаунта
                        </p>
                        <RoundedButton
                            text="СМЕНА ПАРОЛЯ"
                            buttonType={buttonTypes.ERROR}
                            onClick={() => openModal("change-password")}
                        />
                        <RoundedButton
                            text="УДАЛЕНИЕ АККАУНТА"
                            buttonType={buttonTypes.ERROR}
                            onClick={() => openModal("remove-account")}
                        />
                    </div>
                </div>
            </div>
        )
    );
};
