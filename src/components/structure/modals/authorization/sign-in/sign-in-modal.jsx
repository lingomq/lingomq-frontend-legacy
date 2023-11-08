import '../sign-modal.component.scss';

const SignInModal = ({method}) => {
    return (
        <form className="modal-sign">
            <div className="modal-sign-header">
              <p>ВХОД</p>
            </div>
            <div className="modal-sign-inputs">
              <div className="modal-sign-input">
                <label>E-mail</label>
                <input placeholder="example@mail.ru" type="email"/>
              </div>

              <div className="modal-sign-input">
                <label>Password</label>
                <input type="password" placeholder="your password here" />
              </div>
            </div>
            <div className="modal-sign-remember-me">
              <label>
                <input type="checkbox" name="remember" />
                Запомнить меня
              </label>
            </div>
            <div className="modal-sign-buttons">
              <button className="default-button">ВХОД</button>
              <button className="default-button alt-btn" onClick={method}>
                СОЗДАТЬ АККАУНТ
              </button>
            </div>
            <div className="modal-sign-forgot-password">
              <p>ЗАБЫЛИ ПАРОЛЬ?</p>
              <a className="modal-sign-recovery-link" href="#">ВОССТАНОВИТЬ</a>
            </div>
          </form>
    )
}

export default SignInModal;