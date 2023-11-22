import styles from "./AddWord.module.scss";
import TextField from "../../../ui/fields/text/TextField.jsx";
import { useEffect, useState } from "react";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import SelectField from "../../../ui/fields/select/SelectField.jsx";

const AddWord = ({userId}) => {
    const [wordModel, setWordModel] = useState({
        repeats: 0,
        userId: userId,
        createdAt: new Date().toLocaleDateString()  
    });

    const handleChange = (e) => {
        setWordModel({
            ...wordModel,
            [e.target.name]: e.target.value
        });
        console.log(wordModel);
    }

    const languages = [{name: "EN", value: "guid-en"}, {name: "RU", value: "guid-ru"}];
    const wordTypes = [{name: "important", value: "guid-imp"}, {name: "usual", value: "guid-usual"}];

    return (
        <>
            <p>ДОБАВИТЬ СЛОВО</p>
                <TextField labelText="Слово" name="word" placeholder="word" textStateFunction={(e) => handleChange(e)}/>
            <div className={styles.setWordSection}>
                <SelectField labelText="Язык" name="languageId" values={languages} selectStateFunction={(e) => handleChange(e)}/>
                <SelectField labelText="Тип" name="userWordTypeId" values={wordTypes} selectStateFunction={(e) => handleChange(e)}/>
            </div>
            <TextField labelText="Перевод" name="translated" placeholder="translated" textStateFunction={(e) => handleChange(e)}/>
            <RoundedButton text="ДОБАВИТЬ"/>
        </>
    )
}

export default AddWord;