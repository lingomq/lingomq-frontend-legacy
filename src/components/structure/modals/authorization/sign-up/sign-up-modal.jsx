import { useState } from "react";
import "../sign-modal.component.scss";
import { signUp } from "../../../../../services/api/authentication/authentication.js";
import notificationManager, {notificationModel} from "../../../notify/notificationManager.js";

const SignUpModal = ({ method }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function sign() {
    const result = await signUp({ 
      nickname: nickname,
      email: email,
      password: password 
    });

    notificationManager.addNotification(notificationModel({level: result.level, title: result.title, message: result.message }));
  }

  return (
    <form className="modal-sign">
      <div className="modal-sign-header">
        <p>РЕГИСТРАЦИЯ</p>
      </div>
      <div className="modal-sign-inputs">
        <div className="modal-sign-input">
          <label>Никнейм</label>
          <input
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className="modal-sign-input">
          <label>E-mail</label>
          <input
            placeholder="example@mail.ru"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="modal-sign-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
        </div>
      </div>
      <div className="modal-sign-buttons">
        <button className="default-button" type="button" onClick={sign}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
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
