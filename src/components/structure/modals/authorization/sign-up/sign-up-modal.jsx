import '../sign-modal.component.scss';

const SignUpModal = ({ method }) => {
    return (
        <form className="modal-sign">
            <div className="modal-sign-header">
              <p>РЕГИСТРАЦИЯ</p>
            </div>
            <div className="modal-sign-inputs">
              <div className="modal-sign-input">
                <label>Никнейм</label>
                <input placeholder="example@mail.ru" />
              </div>

              <div className="modal-sign-input">
                <label>E-mail</label>
                <input placeholder="example@mail.ru" type="email" />
              </div>

              <div className="modal-sign-input">
                <label>Password</label>
                <input type="password" placeholder="your password here" />
              </div>
            </div>
            <div className="modal-sign-buttons">
              <button className="default-button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
            <div className="modal-sign-forgot-password">
              <p>УЖЕ ЕСТЬ АККАУНТ?</p>
              <a className="modal-sign-recovery-link" href="#" onClick={method}>ВОЙТИ</a>
            </div>
          </form>
    )
}

export default SignUpModal;