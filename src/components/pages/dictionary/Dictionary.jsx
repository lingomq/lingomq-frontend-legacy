import { useState } from "react";
import styles from "./Dictionary.module.scss";
import { useEffect } from "react";
import { getUserWords } from "../../../services/api/words/words";
import Modal from "../../ui/modal/Modal.jsx";
import EditWord from "../../elements/modals/edit-word/EditWord.jsx";
import { modalSize } from "../../ui/modal/modalSize.js";

export const Dictionary = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [words, setWords] = useState();
    const [selectedWord, setSelectedWord] = useState();

    const fetchData = async () => {

        function handleSelectWord (item) {
            setSelectedWord(item);
            handleShowEdit();
        }

        const result = await getUserWords();
        const wordsArray = [];
        result.data.data.map((item) => {
            wordsArray.push(<div className={styles.wordCard} data-key={item?.id} key={item?.id} 
            onClick={() => handleSelectWord(item)}>
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

    
    function handleShowEdit() {
        setShowEdit(!showEdit);
    }

    return (
        words && (
            <div className={styles.dictionarySection}>
                <Modal 
                    isShow={showEdit}
                    showModalFunction={handleShowEdit}
                    size={modalSize.SMALL}
                    content={<EditWord data={selectedWord}/>}
                />
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
