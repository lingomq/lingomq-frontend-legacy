import TextField from "../../../../ui/fields/text/TextField.jsx";
import styles from "./Translate.module.scss";

const Translate = ({wordModel, checkFunction}) => {

    const handleChange = (e) => {
        let userWord = e.target.value.toLowerCase();
        let correctWord = wordModel.translated.toLowerCase();
        if (new String(userWord).valueOf() === new String(correctWord).valueOf()){
            checkFunction(true);
        }
    }

    return (
        <>
            <p className={styles.translateSection}>
                Переведите слово 
            </p>
            <p className={styles.translated}>{wordModel?.word}</p>
            <TextField labelText="Перевод" type="text" placeholder="Перевод" textStateFunction={handleChange}/>
        </>
    )
}

export default Translate;