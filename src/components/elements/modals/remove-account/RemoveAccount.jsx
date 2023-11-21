import { useState } from "react";
import { removeAccount } from "../../../../services/api/identity/identity.js";
import { clearAuthCookies } from "../../../../services/authentication.js";
import notificationManager, { getNotificationModel } from "../../../services/notification/notificationManager";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";

export const RemoveAccount = ({verificationText}) => {
    const [text, setText] = useState("");

    async function removeProfile() {
        let notifyModel;

        if (!(verificationText === text)) {
            notifyModel = getNotificationModel("error", "Ошибка", "Вы ввели неправильное слово");
        } else {
            const result = await removeAccount();
            clearAuthCookies();
            notifyModel = getNotificationModel(result.level, result.title, result.message);
        }

        setInterval(() => (window.location.href = ".."), 3000);

        notificationManager.addNotification(notifyModel);

    }

    return (
        <div className="change-password-modal">
            <p>УДАЛЕНИЕ АККАУНТА</p>
            <p className="attention-content">
                Внимание! Вы пытаетесь удалить аккаунт. Для того,
                чтобы подтвердить операцию, введите ниже : <b>{verificationText}</b>
            </p>
            <div className="modal-sign-inputs">
                <div className="modal-sign-input">
                    <label>Текст подтверждения</label>
                    <input
                        placeholder="verification text"
                        type="text"
                        value={text}
                        onChange={(e) =>
                            setText(e.target.value)
                        }
                    />
                </div>
            </div>
            <RoundedButton text="ПОДТВЕРДИТЬ УДАЛЕНИЕ" buttonType={buttonTypes.ERROR} onClick={removeProfile}/>
        </div>
    );
};
