import styles from "./Security.module.scss";
import { useState, useEffect } from "react";
import { ChangePassword } from "../../../../elements/modals/change-password/ChangePassword.jsx";
import { NonSensitiveData } from "../../../../elements/modals/non-sensitive-data/NonSensitiveData.jsx";
import { RemoveAccount } from "../../../../elements/modals/remove-account/RemoveAccount.jsx";
import RoundedButton from "../../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../../ui/buttons/buttonTypes.js";
import ModalManager from "../../../../ui/modal/ModalManager.js";
import { modalSize } from "../../../../ui/modal/modalSize.js";
import Loading from "../../../../ui/loading/Loading.jsx";

export const Security = ({ data }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(data);
    }, []);

    function handleShowModal(view) {
        ModalManager.addModal(modalSize.AVERAGE, view);
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

        handleShowModal(view);
    }

    return (
        !data ? <Loading/> : (
            <div className={styles.securitySection}>
                <div className={styles.securitySectionContent}>
                    <div className={styles.securityChangeSection}>
                        <p className={styles.securityDataTitle}>
                            Смена почты или номера телефона
                        </p>
                        <div className={styles.nonSensitiveDataContent}>
                            <div className={styles.nonSensitiveDataCard}>
                                <p className={styles.nonSensitiveDataCardName}>
                                    Email
                                </p>
                                <p className={styles.nonSensitiveDataContent}>
                                    {user?.user?.email}
                                </p>
                            </div>
                            <div className={styles.nonSensitiveDataCard}>
                                <p className={styles.nonSensitiveDataCardName}>
                                    Номер телефона
                                </p>
                                <p className={styles.nonSensitiveDataContent}>
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
                    <div className={styles.securityChangeSection}>
                        <p className={styles.securityDataSection}>
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
