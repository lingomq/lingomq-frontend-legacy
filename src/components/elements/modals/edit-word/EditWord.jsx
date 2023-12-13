import styles from "./EditWord.module.scss";
import { removeUserWordAsync } from "../../../../services/api/words/words.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";
import notificationManager from "../../../ui/notification/notificationManager.js";
import { notificationContents } from "./NotificationContents.js";

const EditWord = ({ data }) => {

    const voicesMap = new Map();
    voicesMap.set("english", [ "en-US", "en_US" ] );
    voicesMap.set("russian", [ "ru-RU", "ru_RU" ]);
    voicesMap.set("deutsch", [ "de-DE", "de_DE" ]);
    voicesMap.set("french", [ "fr-FR", "fr_FR" ]);
    voicesMap.set("japanese", [ "ja-JP", "ja_JP" ]);

    let voices = speechSynthesis.getVoices();

    speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
    }

    const removeWordAsync = async () => {
        const result = await removeUserWordAsync(data?.id);
        console.log(result);
        const content = notificationContents[result.level][result.data.code ?? result.data.status];
        notificationManager.addNotification(content.level, content.title, content.message);
        setTimeout(() => window.location.reload(), 700);
    }

    const speechWord = () => {
        let voiceLang = voicesMap.get(data?.language.name);
        let voice = voices.filter(item => { return voiceLang.includes(item.lang)});
        const speech = new SpeechSynthesisUtterance();
        speech.text = data?.word;
        speech.voice = voice[0];
        speech.lang = voice[0].lang;
        speech.volume = 1;
        speech.rate = 1;
        speechSynthesis.speak(speech);
    }
    

    return  (
        <>
            <p className={styles.nativeWord}>{data?.word}</p>
            <p className={styles.translatedWord}>{data?.translated}</p>
            <p className={styles.language}>{data?.language?.name}</p>
            <p className={styles.repeats}>Повторений: <b>{data?.repeats}</b></p>
            <RoundedButton text="ЗВУК" buttonType={buttonTypes.PRIMARY} onClick={speechWord}/>
            <RoundedButton text="УДАЛИТЬ" buttonType={buttonTypes.ERROR} onClick={removeWordAsync}/>
        </>
    )
};

export default EditWord;