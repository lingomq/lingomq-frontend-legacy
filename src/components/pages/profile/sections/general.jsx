import { useState } from "react";
import "../profile.component.scss";
import Modal from "../../../structure/modals/modal-window.jsx";
import ChangeInfo from "../../../structure/modals/identity/profile/change-info.jsx";

export const ProfileGeneral = ({ data }) => {
	const [isChanging, setIsChanging] = useState(false);

	const handleShowChangeInfoModal = () => {
		setIsChanging(!isChanging);
	};

	return (
		<div className="profile-general-section">
			<Modal
				isModalShow={isChanging}
				handleChange={handleShowChangeInfoModal}
				width="average"
				content={<ChangeInfo userData={data} />}
			/>
			<div className="profile-info">
				<img
					id="profile-photo-preview"
					src={data.imageUri}
				/>
				<p className="profile-info-name">{data.nickname}</p>
				<p className="profile-description">
					{data.additional === "" ? "Без описания" : data.additional}
				</p>
				<button
					className="default-button"
					onClick={handleShowChangeInfoModal}
				>
					ИЗМЕНИТЬ
				</button>
			</div>
			<div className="profile-data">
				<div className="profile-data-card">
					<p className="profile-data-card-name">Никнейм</p>
					<p className="profile-data-card-content">{data.nickname}</p>
				</div>
				<div className="profile-data-card">
					<p className="profile-data-card-name">Email</p>
					<p className="profile-data-card-content">
						{data.user.email}
					</p>
				</div>
				<div className="profile-data-card">
					<p className="profile-data-card-name">Телефон</p>
					<p className="profile-data-card-content">
						{data.user.phone === "" ? "Не указан" : data.user.phone}
					</p>
				</div>
				<div className="profile-data-card">
					<p className="profile-data-card-name">Описание</p>
					<p className="profile-data-card-content">
						{data.additional === ""
							? "Без описания"
							: data.additional}
					</p>
				</div>
				<div className="profile-data-card">
					<p className="profile-data-card-name">Дата создания</p>
					<p className="profile-data-card-content">
						{new Date(data.creationalDate).toLocaleDateString()}
					</p>
				</div>
			</div>
		</div>
	);
};
