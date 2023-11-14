import "./confirm.component.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmEmail } from "../../../services/api/authentication/authentication";
import notificationManager, {
	notificationModel,
} from "../../structure/notify/notificationManager.js";

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
                setInterval(() => window.location.href = '..', 4000);
            }
			notificationManager.addNotification(
				notificationModel({
					level: result.level,
					title: result.title,
					message: result.message,
				})
			);
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
