import styles from "./Confirm.module.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmEmailAsync } from "../../../services/api/authentication/authentication";
import notificationManager from "../../ui/notification/notificationManager.js";
import { writeTokens } from "../../../services/authentication";
import { notificationContents } from "./NotificationContents.js";
import Loading from "../../ui/loading/Loading.jsx";

export const Confirm = () => {
	const search = useLocation().search;
	const token = new URLSearchParams(search).get("token");

	const [isValid, setIsValid] = useState(null);

	useEffect(() => {
		const confirmAccount = async () => {
			const result = await confirmEmailAsync(token);
			if (!(result.data.code === 3)) 
            {
                setIsValid(result.data.data);
				writeTokens(result.data.data);
                setInterval(() => window.location.href = '..', 4000);
            }
			
			const content = notificationContents[result.level][result.data.code];
			notificationManager.addNotification(content.level, content.title, content.message);
		};
		confirmAccount();
	}, []);

	return !(isValid) ? <Loading/> : (
		<div className={styles.confirm}>
			<p>
				{isValid
					? "Ваш аккаунт подтвержден. Вы можете закрыть эту страницу и войти в свой аккаунт"
					: "Неверный токен"}
			</p>
		</div>
	);
};
