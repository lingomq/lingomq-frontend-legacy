import { useState } from "react";
import styles from "./Dictionary.module.scss";
import { useEffect } from "react";
import { getLanguagesAsync, getWordTypesAsync } from "../../../services/words.js";
import EditWord from "../../elements/modals/edit-word/EditWord.jsx";
import { modalSize } from "../../ui/modal/modalSize.js";
import SelectField from "../../ui/fields/select/SelectField.jsx";
import ModalManager from "../../ui/modal/ModalManager.js";
import getWordsAsync from "./Words.jsx";

export const Dictionary = () => {
    const [words, setWords] = useState();
    const [languages, setLanguages] = useState();
    const [wordTypes, setWordTypes] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    async function handleShowEdit(word) {
        console.log(words);
        ModalManager.addModal(modalSize.SMALL, <EditWord data={word} wordList={words}/>);
    }

    const fetchData = async () => {
        const setLanguagesAndTypes = async () => {
            const languagesArray = await getLanguagesAsync();
            const typesArray = await getWordTypesAsync();
            setLanguages(languagesArray);
            setWordTypes(typesArray);
        };

        const wordsArray = await getWordsAsync(handleShowEdit);
        setWords(wordsArray);
        setLanguagesAndTypes();
    };

    async function handleChange(e) {
        let wordsArray = await getWordsAsync(handleShowEdit);
        if (e.target.value != "none") {
            wordsArray = wordsArray.filter((item) => item.props["data-language-id"] === e.target.value);
        }

        setWords(wordsArray);
    }

    return (
        words &&
        languages &&
        wordTypes && (
            <div className={styles.dictionarySection}>
                <div className={styles.filters}>
                    <SelectField
                        labelText="Язык"
                        name="languageId"
                        values={languages}
                        selectStateFunction={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.dictionaryContentSection}>
                {words.length === 0 ? <div className={styles.emptyDict}>Вы еще не добавили слова в данный список</div> : words}
                </div>
            </div>
        )
    );
};
