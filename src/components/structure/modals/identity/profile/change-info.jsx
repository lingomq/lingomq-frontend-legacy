import "./change-info.component.scss";
import "../../authorization/sign-modal.component.scss";
import { useState } from "react";
import { updateUserInfo } from "../../../../../services/api/identity/identity";
import notificationManager, { notificationModel, } from "../../../notify/notificationManager";

const ChangeInfo = ({ userData }) => {
	const [image, setImage] = useState("");
	const [nickname, setNickname] = useState(userData.nickname);
	const [description, setDescription] = useState(userData.additional);

	async function changeProfileInfo() {
		console.log(image);
		const user = {
			id: userData.id,
			nickname: nickname,
			additional: description,
			imageUri: image === "" ? userData.imageUri : image,
			roleId: userData.roleId,
			userId: userData.userId,
			creationalDate: userData.creationalDate,
			isRemoved: userData.isRemoved,
		};

		const result = await updateUserInfo(user);

		if (result.level === "success") {
			setInterval(() => (window.location.href = ".."), 3000);
		}

		notificationManager.addNotification(
			notificationModel({
				level: result.level,
				title: result.title,
				message: result.message,
			})
		);
	}

	function uploadImage() {
		const file = document.querySelector('input[type=file]')['files'][0];
	
		const reader = new FileReader();
	
		reader.onload = function() {
			setImage(reader.result);
		}
	
		reader.readAsDataURL(file);
	  }

	return (
		<div className="change-info-modal">
			<p className="change-info-modal-header">ИЗМЕНЕНИЕ ПРОФИЛЯ</p>

			<input
					type="file"
					id="profile-photo"
					name="image"
					accept="image/jpeg,image/png"
					onChange={uploadImage}
				/>
				<label htmlFor="profile-photo" className="input-file-button">
					<img
						id="profile-photo-preview"
						src={image === "" ? userData.imageUri: image}
					/>
				</label>
			<div className="modal-sign-inputs">
				<div className="modal-sign-input">
					<label>Никнейм</label>
					<input
						placeholder="nickname"
						value={nickname}
						onChange={(e) => setNickname(e.target.value)}
					/>
				</div>
			</div>

			<div className="modal-sign-inputs">
				<div className="modal-sign-input">
					<label>Описание</label>
					<input
						placeholder="Ваше описание здесь"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className="modal-sign-buttons">
				<button
					className="default-button"
					type="button"
					onClick={changeProfileInfo}
				>
					ИЗМЕНИТЬ
				</button>
			</div>
		</div>
	);
};

export default ChangeInfo;
