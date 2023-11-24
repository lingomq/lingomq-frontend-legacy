import { useState } from "react";
import styles from "./Dictionary.module.scss";
import { useEffect } from "react";
import {
    getLanguages,
    getTypes,
    getUserWords,
} from "../../../services/api/words/words";
import Modal from "../../ui/modal/Modal.jsx";
import EditWord from "../../elements/modals/edit-word/EditWord.jsx";
import { modalSize } from "../../ui/modal/modalSize.js";
import SelectField from "../../ui/fields/select/SelectField.jsx";

export const Dictionary = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [words, setWords] = useState();
    const [selectedWord, setSelectedWord] = useState();
    const [languages, setLanguages] = useState();
    const [wordTypes, setWordTypes] = useState();

    const getWordsAsync = async () => {
        
        function handleSelectWord(item) {
            setSelectedWord(item);
            handleShowEdit();
        }

        const result = await getUserWords();
        const wordsArray = [];
        result.data.data.map((item) => {
            wordsArray.push(
                <div
                    className={styles.wordCard}
                    data-key={item?.id}
                    data-language-id={item?.languageId}
                    key={item?.id}
                    onClick={() => handleSelectWord(item)}
                >
                    <p className={styles.wordCardNative}>{item?.word}</p>
                    <p className={styles.wordCardTranslated}>
                        {item?.translated}
                    </p>
                </div>
            );
        });

        return wordsArray;
    }

    const fetchData = async () => {
        function handleSelectWord(item) {
            setSelectedWord(item);
            handleShowEdit();
        }

        const toArray = (data, name = "name") => {
            const array = [];
            data.map((item) => {
                array.push({ name: item[name], value: item.id });
            });
            return array;
        };
        const setLanguagesAndTypes = async () => {
            const rawLanguages = await getLanguages(10);
            const rawTypes = await getTypes(10);
            const languagesArray = toArray(rawLanguages.data.data);
            const typesArray = toArray(rawTypes.data.data, "typeName");
            setLanguages(languagesArray);
            setWordTypes(typesArray);
        };

        const wordsArray = await getWordsAsync();
        setWords(wordsArray);
        setLanguagesAndTypes();
    };
    useEffect(() => {
        fetchData();
    }, []);

    function handleShowEdit() {
        setShowEdit(!showEdit);
    }

    async function handleChange(e) {
        const wordsArray = await getWordsAsync();
        if (e.target.value === "none")
        {
            setWords(wordsArray);
        }
        else {
            const newWords = wordsArray.filter((item) => {
                return item.props["data-language-id"] === e.target.value;
            });
            setWords(newWords);
        }
        
    }

    return (
        words &&
        languages &&
        wordTypes && (
            <div className={styles.dictionarySection}>
                <Modal
                    isShow={showEdit}
                    showModalFunction={handleShowEdit}
                    size={modalSize.SMALL}
                    content={<EditWord data={selectedWord} />}
                />
                <div className={styles.filters}>
                    <SelectField
                        labelText="Язык"
                        name="languageId"
                        values={languages}
                        selectStateFunction={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.dictionaryContentSection}>{words}</div>
            </div>
        )
    );
};
