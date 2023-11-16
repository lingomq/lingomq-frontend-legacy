import './credentials.scss';

export const ChangePassword = ({verificationText}) => {
    return (
        <div>
            <p>Смена пароля</p>
            <p className="attention-content">
                Внимание! Вы пытаетесь поменять пароль от аккаунта.
                Для того, чтобы подтвердить операцию, введите ниже : <b>{verificationText}</b>
            </p>
            <div className="modal-sign-inputs">
                <div className="modal-sign-input">
                    <label>Текст подтверждения</label>
                    <input
                        placeholder="verification text"
                        type="text"
                        // value={nickname}
                        // onChange={(e) =>
                        //     setNickname(e.target.value)
                        // }
                    />
                </div>
                <div className="modal-sign-input">
                    <label>Старый пароль: </label>
                    <input
                        placeholder="your password here"
                        type="password"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="modal-sign-input">
                    <label>Новый пароль: </label>
                    <input
                        placeholder="your password here"
                        type="password"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <button className="default-button danger-btn">ПОДТВЕРДИТЬ ИЗМЕНЕНИЕ</button>
        </div>
    );
};
