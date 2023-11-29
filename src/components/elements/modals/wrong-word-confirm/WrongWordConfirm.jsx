import { addWord } from "../../../../services/api/words/words.js";
import notificationManager from "../../../ui/notification/notificationManager.js";
import { buttonTypes } from "../../../ui/buttons/buttonTypes";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import styles from "./WrongWordConfirm.module.scss";

const WrongWordConfirm = ({ rightWord, wordModel }) => {

    const addWordForce = async (isAutocomplete) => {
        const result = await addWord(wordModel, true, isAutocomplete);
        notificationManager.addNotification(result.level, result.title, result.message);
    } 

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <>
            <p>ВНИМАНИЕ</p>
            <p className={styles.attentionContent}>
                Внимание! Вы пытаетесь добавить слово, которого не существует.
                Ближайшее подходящее слово : <b>{rightWord}</b>. Вы хотите
                автоматически заменить ваше слово?
            </p>
            <div className={styles.buttonContent}>
                <RoundedButton text="ДА" onClick={() => addWordForce(true)}/>
                <RoundedButton text="НЕТ" buttonType={buttonTypes.WARNING}  onClick={() => addWordForce(false)}/>
                <RoundedButton text="ОТМЕНА" buttonType={buttonTypes.ERROR} onClick={reloadPage} />
            </div>
        </>
    );
};

export default WrongWordConfirm;
