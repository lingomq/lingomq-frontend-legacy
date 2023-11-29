import styles from "./EditWord.module.scss";
import {  removeUserWord } from "../../../../services/api/words/words.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import notificationManager, { getNotificationModel } from "../../../ui/notification/notificationManager.js";

const EditWord = ({ data }) => {

    const removeWordAsync = async () => {
        const result = await removeUserWord(data?.id);
        console.log(data);
        notificationManager.addNotification(result.level, result.title, result.message);
        setTimeout(() => window.location.reload(), 700);
    }

    return  (
        <>
            <p className={styles.nativeWord}>{data?.word}</p>
            <p className={styles.translatedWord}>{data?.translated}</p>
            <p className={styles.language}>{data?.language?.name}</p>
            <p className={styles.repeats}>Повторений: <b>{data?.repeats}</b></p>
            <RoundedButton text="УДАЛИТЬ" buttonType={buttonTypes.ERROR} onClick={removeWordAsync}/>
        </>
    )
};

export default EditWord;