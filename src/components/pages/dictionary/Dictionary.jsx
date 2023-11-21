import styles from './Dictionary.module.scss';

export const Dictionary = () => {
    return (
        <div className={styles.dictionarySection}>
            <div className={styles.dictionaryContentSection}>
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
            </div>
            <div className={styles.dictionaryContentSection}>
                <div className={styles.wordCard}>
                    <p className={styles.wordCardNative}>House</p>
                    <p className={styles.wordCardTranslated}>Дом</p>
                    <p className={styles.wordCardLanguage}>en</p>
                </div>
            </div>
        </div>
    )
}
