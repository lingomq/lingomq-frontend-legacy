import "./confirm.component.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmEmail } from "../../../services/api/authentication/authentication";
import notificationManager, { getNotificationModel } from "../../services/notification/notificationManager";
import { writeTokens } from "../../../services/authentication";

export const Confirm = () => {
	const search = useLocation().search;
	const token = new URLSearchParams(search).get("token");

	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		const confirmAccount = async () => {
			const result = await confirmEmail(token);
			if (!(result.data.code === 3)) 
            {
                setIsValid(result.data.data);
				writeTokens(result.data.data);
                setInterval(() => window.location.href = '..', 4000);
            }
			notificationManager.addNotification(getNotificationModel(result.level, result.title, result.message));
		};
		confirmAccount();
	}, []);

	return (
		<div className="confirm">
			<p>
				{isValid
					? "Ваш аккаунт подтвержден. Вы можете закрыть эту страницу и войти в свой аккаунт"
					: "Неверный токен"}
			</p>
		</div>
	);
};
