import "../sign-modal.component.scss";
import { useState } from "react";
import { signIn } from "../../../../services/api/authentication/authentication.js";
import TextField from "../../../ui/fields/text/TextField.jsx";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import { writeTokens } from "../../../../services/authentication.js";
import notificationManager, {
    getNotificationModel,
} from "../../../services/notification/notificationManager.js";

const SignInModal = ({ method }) => {
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    async function signInAsync() {
        const result = await signIn(user);

        if (result.level === "success") {
            setTimeout(() => {
                writeTokens(result.data.data);
                window.location.href = "..";
            }, 1000);
        }

        notificationManager.addNotification(getNotificationModel(result.level, result.title, result.message));
    }

    return (
        <form className="modal-sign" method="POST">
            <div className="modal-sign-header">
                <p>ВХОД</p>
            </div>
            <div className="modal-sign-inputs">
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
            <div className="modal-sign-buttons">
                <RoundedButton text="ВХОД" type="button" onClick={signInAsync}/>
                <RoundedButton
                    text="СОЗДАТЬ АККАУНТ"
                    onClick={method}
                    buttonType={buttonTypes.ALTERNATIVE}
                />
            </div>
            <div className="modal-sign-forgot-password">
                <p>ЗАБЫЛИ ПАРОЛЬ?</p>
                <a className="modal-sign-recovery-link" href="#">
                    ВОССТАНОВИТЬ
                </a>
            </div>
        </form>
    );
};

export default SignInModal;
