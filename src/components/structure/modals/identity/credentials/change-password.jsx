import { useState } from "react";
import { updatePassword } from "../../../../../services/api/identity/identity";
import notificationManager, { notificationModel } from "../../../notify/notificationManager";
import "./credentials.scss";

export const ChangePassword = ({ verificationText }) => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    async function changeUserPassword() {
        let notifyModel;

        if (!(verificationText === text)) {
            notifyModel = notificationModel({
                level: "error",
                title: "Ошибка",
                message: "Вы ввели неправильное слово",
            });
        } else {
            const result = await updatePassword(password);
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
        <div>
            <p>Смена пароля</p>
            <p className="attention-content">
                Внимание! Вы пытаетесь поменять пароль от аккаунта. Для того,
                чтобы подтвердить операцию, введите ниже :{" "}
                <b>{verificationText}</b>
            </p>
            <div className="modal-sign-inputs">
                <div className="modal-sign-input">
                    <label>Текст подтверждения</label>
                    <input
                        placeholder="verification text"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="modal-sign-input">
                    <label>Новый пароль: </label>
                    <input
                        placeholder="your password here"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="default-button danger-btn"
                onClick={changeUserPassword}
            >
                ПОДТВЕРДИТЬ ИЗМЕНЕНИЕ
            </button>
        </div>
    );
};
