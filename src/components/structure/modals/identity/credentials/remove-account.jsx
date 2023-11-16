export const RemoveAccount = ({verificationText}) => {
    return (
        <div className="change-password-modal">
            <p>УДАЛЕНИЕ АККАУНТА</p>
            <p className="attention-content">
                Внимание! Вы пытаетесь удалить аккаунт. Для того,
                чтобы подтвердить операцию, введите ниже : <b>{verificationText}</b>
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
            </div>
            <button className="default-button danger-btn">
                ПОДТВЕРДИТЬ УДАЛЕНИЕ
            </button>
        </div>
    );
};
