import { useState } from "react";
import styles from "../SignModal.module.scss";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import TextField from "../../../ui/fields/text/TextField.jsx";
import { signUpAsync } from "../../../../services/api/authentication/authentication.js";
import notificationManager from "../../../ui/notification/notificationManager.js";
import { notificationContents } from "./NotificationContents.js";

const SignUpModal = ({ method }) => {
    const [user, setUser] = useState({ nickname: "", email: "", password: ""});

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    } 

    async function signUp() {
        const result = await signUpAsync(user);
        const content = notificationContents[result.level][result.data.code];
        notificationManager.addNotification(content.level, content.title, content.message);
    }

    return (
        <form className={styles["modal-sign"]} method="POST">
            <div className={styles["modal-sign-header"]}>
                <p>РЕГИСТРАЦИЯ</p>
            </div>
            <div className={styles["modal-sign-inputs"]}>
                <TextField name="nickname" labelText="Никнейм" placeholder="nickname" textStateFunction={(e) => handleChange(e)}/>
                <TextField name="email" labelText="E-mail" placeholder="email" textStateFunction={(e) => handleChange(e)}/>
                <TextField name="password" labelText="Пароль" placeholder="password" textStateFunction={(e) => handleChange(e)}
                    type="password"
                    autoComplete="on"
                />
            </div>
            <div className={styles["modal-sign-buttons"]}>
                <RoundedButton text="ЗАРЕГИСТРИРОВАТЬСЯ" type="button" onClick={signUp}/>
            </div>
            <div className={styles["modal-sign-forgot-password"]}>
                <p>УЖЕ ЕСТЬ АККАУНТ?</p>
                <a className={styles["modal-sign-recovery-link"]} href="#" onClick={method}>
                    ВОЙТИ
                </a>
            </div>
        </form>
    );
};

export default SignUpModal;
