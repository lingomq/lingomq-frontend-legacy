import { useState } from "react";
import { updateUserData } from "../../../../../services/api/identity/identity";
import notificationManager, { notificationModel, } from "../../../notify/notificationManager";

export const NonSensitiveData = ({ userData }) => {
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);

    async function changeUserData() {
        const result = await updateUserData(email, phone);

        setInterval(() => (window.location.href = ".."), 3000);

        notificationManager.addNotification(
            notificationModel({
                level: result.level,
                title: result.title,
                message: result.message,
            })
        );
    }

    return userData && (
        <div className="security-change-non-sensitive-modal">
            <p>Смена почты или телефона</p>
            <div className="modal-sign-inputs">
                <div className="modal-sign-input">
                    <label>E-mail</label>
                    <input
                        placeholder="example@gmail.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="modal-sign-input">
                    <label>Телефон</label>
                    <input
                        placeholder="8 (987) 654 32 10"
                        type="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
            </div>
            <button className="default-button" onClick={changeUserData}>
                ИЗМЕНИТЬ
            </button>
        </div>
    );
};
