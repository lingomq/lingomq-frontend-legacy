import { useState } from "react";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import styles from "./Practice.module.scss";
import { useEffect } from "react";
import { getLanguages } from "../../../../services/api/words/words.js";
import SelectField from "../../../ui/fields/select/SelectField.jsx";

const Practice = () => {
    const [languages, setLanguages] = useState();
    const [language, setLanguage] = useState("none");
    const [repeatCount, setRepeatCount] = useState(0);

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

    const start = () => {
        window.location.href = `/practice/${repeatCount}/${language}`;
    }

    useEffect(() => {
        fetchData();
    }, [setLanguages]);

    return languages && (
        <>
            <p>Практика</p>
            <div className={styles.repeatCount}>
                <p>Количество слов</p>
                <input type="number" name="repeat-count" value={repeatCount} onChange={(e) => setRepeatCount(e.target.value)}/>
            </div>
            <SelectField labelText="Язык" name="languageId" values={languages} selectStateFunction={(e) => handleSelectLanguageChange(e)}/>
            <RoundedButton text="НАЧАТЬ" onClick={start}/>
        </>
    )
}

export default Practice;