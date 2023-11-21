import { useState } from "react";
import "../sign-modal.component.scss";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import TextField from "../../../ui/fields/text/TextField.jsx";
import { signUp } from "../../../../services/api/authentication/authentication.js";
import notificationManager, {
    getNotificationModel,
} from "../../../services/notification/notificationManager.js";

const SignUpModal = ({ method }) => {
    const [user, setUser] = useState({ nickname: "", email: "", password: ""});

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    } 

    async function signUpAsync() {
        const result = await signUp(user);

        let notifyModel;
        if (result.level === "success")
            notifyModel = getNotificationModel("success", "Успешно", "Подвердите аккаунт через почту");
        else
            notifyModel = getNotificationModel(result.level, result.title, result.message);

        notificationManager.addNotification(notifyModel);
    }

    return (
        <form className="modal-sign" method="POST">
            <div className="modal-sign-header">
                <p>РЕГИСТРАЦИЯ</p>
            </div>
            <div className="modal-sign-inputs">
                <TextField name="nickname" labelText="Никнейм" placeholder="nickname" textStateFunction={(e) => handleChange(e)}/>
                <TextField name="email" labelText="E-mail" placeholder="email" textStateFunction={(e) => handleChange(e)}/>
                <TextField name="password" labelText="Пароль" placeholder="password" textStateFunction={(e) => handleChange(e)}
                    type="password"
                    autoComplete="on"
                />
            </div>
            <div className="modal-sign-buttons">
                <RoundedButton text="ЗАРЕГИСТРИРОВАТЬСЯ" type="button" onClick={signUpAsync}/>
            </div>
            <div className="modal-sign-forgot-password">
                <p>УЖЕ ЕСТЬ АККАУНТ?</p>
                <a className="modal-sign-recovery-link" href="#" onClick={method}>
                    ВОЙТИ
                </a>
            </div>
        </form>
    );
};

export default SignUpModal;
