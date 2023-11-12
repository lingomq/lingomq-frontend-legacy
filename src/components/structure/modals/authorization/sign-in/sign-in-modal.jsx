import "../sign-modal.component.scss";
import { useState } from "react";
import { signIn } from "../../../../../services/api/authentication/authentication.js";
import notificationManager, {
  notificationModel,
} from "../../../notify/notificationManager.js";
import { Cookies } from "react-cookie";

const SignInModal = ({ method }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  async function sign() {
    const result = await signIn({
      nickname: nickname,
      email: email,
      password: password,
    });

    if (result.level === "success") {
      setTimeout(() => {
        let date = new Date(result.data.data.accessExpiredAt);
        let infDate = new Date(2024, 0, 1);
        console.log(infDate);
        cookies.set("access-token", result.data.data.accessToken, { path: "/", expires: date});
        cookies.set("refresh-token", result.data.data.refreshToken, { path: "/", expires: infDate});
      }, 5000);
    }

    notificationManager.addNotification(
      notificationModel({
        level: result.level,
        title: result.title,
        message: result.message,
      })
    );
  }

  return (
    <form className="modal-sign">
      <div className="modal-sign-header">
        <p>ВХОД</p>
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
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="modal-sign-remember-me">
        <label>
          <input type="checkbox" name="remember" />
          Запомнить меня
        </label>
      </div>
      <div className="modal-sign-buttons">
        <button className="default-button" onClick={sign}>
          ВХОД
        </button>
        <button className="default-button alt-btn" onClick={method}>
          СОЗДАТЬ АККАУНТ
        </button>
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
