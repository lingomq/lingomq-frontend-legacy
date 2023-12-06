import { useState } from "react";
import { clearAuthCookies } from "../../../../services/authentication.js";
import notificationManager, { getNotificationModel } from "../../../ui/notification/notificationManager.js";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import styles from "../Credentials.module.scss";
import TextField from "../../../ui/fields/text/TextField.jsx";

export const RemoveAccount = ({verificationText}) => {
    const [text, setText] = useState("");

    async function removeProfile() {
        if (!(verificationText === text)) {
            notificationManager.addNotification("error", "Ошибка", "Вы ввели неправильное слово");
        } else {
            const result = await removeAccountAsync();
            clearAuthCookies();
            notificationManager.addNotification("success", "Удаление аккаунта", "Аккаунт успешно удален");
        }

        setInterval(() => (window.location.href = ".."), 3000);

    }

    return (
        <>
            <p>УДАЛЕНИЕ АККАУНТА</p>
            <p className={styles.attentionContent}>
                Внимание! Вы пытаетесь удалить аккаунт. Для того,
                чтобы подтвердить операцию, введите ниже : <b>{verificationText}</b>
            </p>
            <TextField
                name="text"
                labelText="Текст подтверждения"
                placeholder="verification text"
                textStateFunction={(e) => setText(e.target.value)}
            />
            <RoundedButton text="ПОДТВЕРДИТЬ УДАЛЕНИЕ" buttonType={buttonTypes.ERROR} onClick={removeProfile}/>
        </>
    );
};
