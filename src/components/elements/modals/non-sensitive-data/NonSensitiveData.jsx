import { useState } from "react";
import { updateUserData } from "../../../../services/api/identity/identity";
import notificationManager from "../../../ui/notification/notificationManager.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import TextField from "../../../ui/fields/text/TextField.jsx";

export const NonSensitiveData = ({ userData }) => {
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);

    async function changeUserData() {
        const result = await updateUserData(email, phone);

        setInterval(() => (window.location.href = ".."), 3000);

        notificationManager.addNotification(result.level, result.title, result.message);
    }

    return (
        <>
            <p>Смена почты или телефона</p>
            <TextField
                name="email"
                labelText="E-mail"
                type="email"
                placeholder="example@gmail.com"
                textStateFunction={(e) => setEmail(e.target.value)}
            />
            <TextField
                name="phone"
                labelText="Телефон"
                type="tel"
                placeholder="8 (987) 654 32 10"
                textStateFunction={(e) => setPhone(e.target.value)}
            />
            <RoundedButton text="ИЗМЕНИТЬ" onClick={changeUserData}/>
        </>
    );
};
