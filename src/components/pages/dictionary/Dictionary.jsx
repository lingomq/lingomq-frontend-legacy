import { useState } from "react";
import styles from "./Dictionary.module.scss";
import { useEffect } from "react";
import { getUserWords } from "../../../services/api/words/words";

export const Dictionary = () => {
    const [words, setWords] = useState();

    const fetchData = async () => {
        const result = await getUserWords();
        const wordsArray = [];
        result.data.data.map((item) => {
            wordsArray.push(<div className={styles.wordCard} key={item?.id}>
                <p className={styles.wordCardNative}>{item?.word}</p>
                <p className={styles.wordCardTranslated}>
                    {item?.translated}
                </p>
            </div>);
        });
        setWords(wordsArray);
    };

    useEffect(() => {
        fetchData();
    }, [setWords]);

    return (
        words && (
            <div className={styles.dictionarySection}>
                {/* <div className={styles.dictionaryContentSection}>
                    <div className={styles.dictionaryFilter}>
                        <p>Тип:</p>
                        <select defaultValue="Все">
                            <option value="Все">Все</option>
                            <option value="Важные">Важные</option>
                            <option value="Неважные">Неважные</option>
                            <option value="Иди нахуй">Иди нахуй</option>
                        </select>
                    </div>
                    <div className={styles.dictionaryFilter}>
                        <p>Язык:</p>
                        <select defaultValue="Все">
                            <option value="Все">Все</option>
                            <option value="Важные">Русский</option>
                            <option value="Неважные">Английский</option>
                            <option value="Иди нахуй">Иди нахуй</option>
                        </select>
                    </div>
                </div> */}
                <div className={styles.dictionaryContentSection}>
                    {words}
                </div>
            </div>
        )
    );
};
