import { useState, useEffect } from "react";
import styles from "./General.module.scss";
import RoundedButton from "../../../../ui/buttons/rounded/RoundedButton.jsx";
import ChangeInfo from "../../../../elements/modals/change-info/ChangeInfo.jsx";
import Modal from "../../../../ui/modal/Modal.jsx";

export const ProfileGeneral = ({data}) => {
	const [isChanging, setIsChanging] = useState(false);
	const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(data);
    }, [setUser]);

	const handleShowChangeInfoModal = () => {
		setIsChanging(!isChanging);
	};

	return (
		<div className={styles.profileGeneralSection}>
			<Modal
				isShow={isChanging}
				showModalFunction={handleShowChangeInfoModal}
				width="average"
				content={<ChangeInfo userData={user} />}
			/>
			<div className={styles.profileInfo}>
				<img className={styles.profileImage} src={user?.imageUri} />
				<p className={styles.profileInfoName}>{user?.nickname}</p>
				<p className={styles.profileDescription}>
					{user?.additional === "" ? "Без описания" : user?.additional}
				</p>
				<RoundedButton text="ИЗМЕНИТЬ" onClick={handleShowChangeInfoModal} />
			</div>
			<div className={styles.profileData}>
				<div className={styles.profileDataCard}>
					<p className={styles.profileDataCardName}>Никнейм</p>
					<p className={styles.profileDataCardContent}>{user?.nickname}</p>
				</div>
				<div className={styles.profileDataCard}>
					<p className={styles.profileDataCardName}>Email</p>
					<p className={styles.profileDataCardContent}>
						{user?.user?.email}
					</p>
				</div>
				<div className={styles.profileDataCard}>
					<p className={styles.profileDataCardName}>Телефон</p>
					<p className={styles.profileDataCardContent}>
						{user?.user?.phone === "" ? "Не указан" : user?.user?.phone}
					</p>
				</div>
				<div className={styles.profileDataCard}>
					<p className={styles.profileDataCardName}>Описание</p>
					<p className={styles.profileDataCardContent}>
						{user?.additional === ""
							? "Без описания"
							: user?.additional}
					</p>
				</div>
				<div className={styles.profileDataCard}>
					<p className={styles.profileDataCardName}>Дата создания</p>
					<p className={styles.profileDataCardContent}>
						{new Date(user?.creationalDate).toLocaleDateString()}
					</p>
				</div>
			</div>
		</div>
	);
};
