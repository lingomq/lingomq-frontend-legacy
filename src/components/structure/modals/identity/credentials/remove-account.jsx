import { useState } from "react";
import { removeAccount } from "../../../../../services/api/identity/identity";
import { clearAuthCookies } from "../../../../../services/authentication";
import notificationManager, { notificationModel } from "../../../notify/notificationManager";

export const RemoveAccount = ({verificationText}) => {
    const [text, setText] = useState("");

    async function removeProfile() {
        let notifyModel;

        if (!(verificationText === text)) {
            notifyModel = notificationModel({
                level: "error",
                title: "Ошибка",
                message: "Вы ввели неправильное слово",
            });
        } else {
            const result = await removeAccount();
            clearAuthCookies();
            notifyModel = notificationModel({
                level: result.level,
                title: result.title,
                message: result.message,
            });
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
            <button className="default-button danger-btn" onClick={removeProfile}>
                ПОДТВЕРДИТЬ УДАЛЕНИЕ
            </button>
        </div>
    );
};
