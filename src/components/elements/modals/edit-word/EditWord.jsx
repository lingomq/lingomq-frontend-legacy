import styles from "./EditWord.module.scss";
import { removeUserWordAsync } from "../../../../services/api/words/words.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import notificationManager from "../../../ui/notification/notificationManager.js";
import { notificationContents } from "./NotificationContents.js";

const EditWord = ({ data }) => {

    const removeWordAsync = async () => {
        const result = await removeUserWordAsync(data?.id);
        console.log(result);
        const content = notificationContents[result.level][result.data.code ?? result.data.status];
        notificationManager.addNotification(content.level, content.title, content.message);
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