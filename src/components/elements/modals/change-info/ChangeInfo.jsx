import stylesInfo from "./ChangeInfo.module.scss";
import { useState } from "react";
import { updateUserInfo } from "../../../../services/api/identity/identity.js";
import TextField from "../../../ui/fields/text/TextField.jsx";
import notificationManager, { getNotificationModel } from "../../../services/notification/notificationManager";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";

const ChangeInfo = ({ userData }) => {
    const [image, setImage] = useState("");
    const [nickname, setNickname] = useState(userData?.nickname);
    const [description, setDescription] = useState(userData?.additional);

    async function changeProfileInfo() {
        const user = {
            id: userData?.id,
            nickname: nickname,
            additional: description,
            imageUri: image === "" ? userData?.imageUri : image,
            roleId: userData?.roleId,
            userId: userData?.userId,
            creationalDate: userData?.creationalDate,
            isRemoved: userData?.isRemoved,
        };

        const result = await updateUserInfo(user);

        if (result.level === "success") {
            setInterval(() => (window.location.href = ".."), 3000);
        }

        notificationManager.addNotification(getNotificationModel(result.level, result.title, result.message));
    }

    function uploadImage() {
        const file = document.querySelector("input[type=file]")["files"][0];

        const reader = new FileReader();

        reader.onload = function () {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    }

    return (
        <div className={stylesInfo.changeInfoModal}>
            <p className={stylesInfo.changeInfoModalHeader}>ИЗМЕНЕНИЕ ПРОФИЛЯ</p>

            <input
                id="profile-photo"
                type="file"
                className={stylesInfo.profilePhoto}
                name="image"
                accept="image/jpeg,image/png"
                onChange={uploadImage}
            />
            <label htmlFor="profile-photo" className="input-file-button">
                <img 
                    src={image === "" ? userData?.imageUri : image}
                />
            </label>
            <TextField
                name="nickname"
                labelText="Никнейм"
                placeholder="nickname"
                textStateFunction={(e) => setNickname(e.target.value)}
            />
            <TextField
                name="additional"
                labelText="Описаните"
                placeholder="Ваше описание здесь"
                textStateFunction={(e) => setDescription(e.target.value)}
            />
            <div className="modal-sign-buttons">
                <RoundedButton text="ИЗМЕНИТЬ" onClick={changeProfileInfo}/>
            </div>
        </div>
    );
};

export default ChangeInfo;
