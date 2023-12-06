import styles from "../SignModal.module.scss";
import { useState } from "react";
import { signInAsync } from "../../../../services/api/authentication/authentication.js";
import TextField from "../../../ui/fields/text/TextField.jsx";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import { writeTokens } from "../../../../services/authentication.js";
import notificationManager from "../../../ui/notification/notificationManager.js";
import { notificationContents } from "./NotificationContents.js";

const SignInModal = ({ method }) => {
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    async function loginAsync() {
        const result = await signInAsync(user);
        console.log(result);
        if (result.level === 200) {
            setTimeout(() => {
                writeTokens(result.data.data);
                window.location.href = "..";
            }, 1000);
        }

        const content = notificationContents[result.level][result.data.code];
        notificationManager.addNotification(content.level, content.title, content.message);
    }

    return (
        <form className={styles["modal-sign"]} method="POST">
            <div className={styles["modal-sign-header"]}>
                <p>ВХОД</p>
            </div>
            <div className={styles["modal-sign-inputs"]}>
                <TextField
                    name="nickname"
                    labelText="Никнейм"
                    placeholder="nickname"
                    textStateFunction={(e) => handleChange(e)}
                />
                <TextField
                    name="email"
                    labelText="E-mail"
                    placeholder="email"
                    textStateFunction={(e) => handleChange(e)}
                />
                <TextField
                    name="password"
                    labelText="Пароль"
                    placeholder="password"
                    textStateFunction={(e) => handleChange(e)}
                    type="password"
                    autoComplete="on"
                />
            </div>
            <div className={styles["modal-sign-buttons"]}>
                <RoundedButton text="ВХОД" type="button" onClick={loginAsync}/>
                <RoundedButton
                    text="СОЗДАТЬ АККАУНТ"
                    onClick={method}
                    buttonType={buttonTypes.ALTERNATIVE}
                />
            </div>
            <div className={styles["modal-sign-forgot-password"]}>
                <p>ЗАБЫЛИ ПАРОЛЬ?</p>
                <a className={styles["modal-sign-recovery-link"]} href="#">
                    ВОССТАНОВИТЬ
                </a>
            </div>
        </form>
    );
};

export default SignInModal;
