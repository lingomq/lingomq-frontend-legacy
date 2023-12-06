import { getUserWordsAsync } from "../../../services/api/words/words";
import styles from "./Dictionary.module.scss";

const getWordsAsync = async (func) => {
    function handleSelectWord(item) {
        func(item);
    }

    const result = await getUserWordsAsync();
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

export default getWordsAsync;