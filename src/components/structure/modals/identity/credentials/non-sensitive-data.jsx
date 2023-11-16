export const NonSensitiveData = () => {
    return (
        <div className="security-change-non-sensitive-modal">
            <p>Смена почты или телефона</p>
            <div className="modal-sign-inputs">
                <div className="modal-sign-input">
                    <label>E-mail</label>
                    <input
                        placeholder="nickname"
                        type="email"
                        // value={nickname}
                        // onChange={(e) =>
                        //     setNickname(e.target.value)
                        // }
                    />
                </div>
                <div className="modal-sign-input">
                    <label>Телефон</label>
                    <input
                        placeholder="8 (987) 654 32 10"
                        type="phone"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="default-button"
            >
                ИЗМЕНИТЬ
            </button>
        </div>
    );
};
