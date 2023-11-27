import { useState } from "react";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import styles from "./Practice.module.scss";
import { useEffect } from "react";
import { getLanguages, getUserWords } from "../../../../services/api/words/words.js";
import SelectField from "../../../ui/fields/select/SelectField.jsx";
import notificationManager, { getNotificationModel } from "../../../services/notification/notificationManager.js";

const Practice = () => {
    const [languages, setLanguages] = useState();
    const [language, setLanguage] = useState("none");
    const [repeatCount, setRepeatCount] = useState(1);

    const fetchData = async () => {
        const toArray = (data, name = "name") =>{
            const array = [];
            data.map(item => {
                array.push({name: item[name], value: item.id});
            });
            return array;
        }
        const rawLanguages = await getLanguages(10);
        const languagesArray = toArray(rawLanguages.data.data);
        setLanguages(languagesArray);
    }

    const handleSelectLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    const start = async () => {
        let wordsArray = [];
        const words = await getUserWords();
        words.data.data.map((item) => { wordsArray.push(item) });
        wordsArray = wordsArray.filter((item) => {
            return item.languageId === language;
        });
        console.log(wordsArray);
        if (wordsArray.length === 0) {
            notificationManager.addNotification(getNotificationModel("warning", "ПРЕДУПРЕЖДЕНИЕ", "Слов нет в данной коллекции"));
        }
        else {
            window.location.href = `/practice/${repeatCount}/${language}`;
        }
    }

    useEffect(() => {
        fetchData();
    }, [setLanguages]);

    return languages && (
        <>
            <p>Практика</p>
            <div className={styles.repeatCount}>
                <p>Количество слов</p>
                <input type="number" name="repeat-count" min="1" value={repeatCount} onChange={(e) => setRepeatCount(e.target.value)}/>
            </div>
            <SelectField labelText="Язык" name="languageId" values={languages} selectStateFunction={(e) => handleSelectLanguageChange(e)}/>
            <RoundedButton text="НАЧАТЬ" onClick={start}/>
        </>
    )
}

export default Practice;