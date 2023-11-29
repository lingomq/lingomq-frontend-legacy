import { useState, useEffect } from "react";
import styles from "./General.module.scss";
import RoundedButton from "../../../../ui/buttons/rounded/RoundedButton.jsx";
import ChangeInfo from "../../../../elements/modals/change-info/ChangeInfo.jsx";
import ModalManager from "../../../../ui/modal/ModalManager.js";
import { modalSize } from "../../../../ui/modal/modalSize.js";

export const ProfileGeneral = ({data}) => {
	const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(data);
    }, [setUser]);

	const handleShowChangeInfoModal = () => {
		ModalManager.addModal(modalSize.AVERAGE, <ChangeInfo userData={user}/>);
	};

	return (
		<div className={styles.profileGeneralSection}>
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
