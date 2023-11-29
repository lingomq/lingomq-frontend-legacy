import { useState } from "react";
import { updatePassword } from "../../../../services/api/identity/identity";
import styles from "../Credentials.module.scss";
import notificationManager, { getNotificationModel } from "../../../ui/notification/notificationManager.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import TextField from "../../../ui/fields/text/TextField.jsx";

export const ChangePassword = ({ verificationText }) => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    async function changeUserPassword() {
        if (!(verificationText === text)) 
            notificationManager.addNotification("error","Ошибка","Вы ввели неправильное слово");
        else {
            const result = await updatePassword(password);
            notificationManager.addNotification(result.level, result.title, result.message);
        }

        setInterval(() => (window.location.href = ".."), 3000);
    }
    return (
        <>
            <p>Смена пароля</p>
            <p className={styles.attentionContent}>
                Внимание! Вы пытаетесь поменять пароль от аккаунта. Для того,
                чтобы подтвердить операцию, введите ниже :{" "}
                <b>{verificationText}</b>
            </p>
            <TextField
                name="text"
                labelText="Текст подтверждения"
                placeholder="verification text"
                textStateFunction={(e) => setText(e.target.value)}
            />
            <TextField
                name="password"
                labelText="Новый пароль:"
                placeholder="verification text"
                type="password"
                textStateFunction={(e) => setPassword(e.target.value)}
            />
            <RoundedButton
                text="ПОДТВЕРДИТЬ ИЗМЕНЕНИЕ"
                buttonType={buttonTypes.ERROR}
                onClick={changeUserPassword}
            />
        </>
    );
};
