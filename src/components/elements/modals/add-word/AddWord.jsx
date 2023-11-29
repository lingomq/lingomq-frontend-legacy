import styles from "./AddWord.module.scss";
import TextField from "../../../ui/fields/text/TextField.jsx";
import { useEffect, useState } from "react";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import SelectField from "../../../ui/fields/select/SelectField.jsx";
import { addWord, getLanguages, getTypes } from "../../../../services/api/words/words.js";
import notificationManager from "../../../ui/notification/notificationManager.js";
import WrongWordConfirm from "../wrong-word-confirm/WrongWordConfirm.jsx";
import { modalSize } from "../../../ui/modal/modalSize.js";
import ModalManager from "../../../ui/modal/ModalManager.js";

const AddWord = ({userId}) => {
    const [rightWord, setRightWord] = useState("");
    const [languages, setLanguages] = useState();
    const [wordTypes, setWordTypes] = useState();
    const [wordModel, setWordModel] = useState({
        repeats: 0,
        userId: userId,
        createdAt: new Date().toLocaleDateString()  
    });

    useEffect(() => {
        const toArray = (data, name = "name") =>{
            const array = [];
            data.map(item => {
                array.push({name: item[name], value: item.id});
            });
            return array;
        }
        const setLanguagesAndTypes = async () => 
        {
            const rawLanguages = await getLanguages(10);
            const rawTypes = await getTypes(10);
            const languagesArray = toArray(rawLanguages.data.data);
            const typesArray = toArray(rawTypes.data.data, "typeName");
            setLanguages(languagesArray);
            setWordTypes(typesArray);
        }
        setLanguagesAndTypes();
    }, [setLanguages])

    const handleChange = (e) => {
        setWordModel({
            ...wordModel,
            [e.target.name]: e.target.value
        });
    }

    const addWordAsync = async () => {
        const result = await addWord(wordModel, false, false);
        console.log(result);
        if (result.data.message === "wrong word")
        {
            setRightWord(result.data.errors.rightWord);
            handleWrongWordChanged(result.data.errors.rightWord);
        }
        else {
            setInterval(() => window.location.href = "dict", 2000);
        }
        notificationManager.addNotification(result.level, result.title, result.message);
    }

    const handleWrongWordChanged = (rightWord) => {
        ModalManager.addModal(modalSize.AVERAGE, <WrongWordConfirm rightWord={rightWord} wordModel={wordModel}/>);
    }

    return languages && wordTypes && (
        <>
            <p>ДОБАВИТЬ СЛОВО</p>
                <TextField labelText="Слово" name="word" placeholder="word" textStateFunction={(e) => handleChange(e)}/>
            <div className={styles.setWordSection}>
                <SelectField labelText="Язык" name="languageId" values={languages} selectStateFunction={(e) => handleChange(e)}/>
                {/* <SelectField labelText="Тип" name="userWordTypeId" values={wordTypes} selectStateFunction={(e) => handleChange(e)}/> */}
            </div>
            <TextField labelText="Перевод" name="translated" placeholder="translated" textStateFunction={(e) => handleChange(e)}/>
            <RoundedButton text="ДОБАВИТЬ" onClick={addWordAsync}/>
        </>
    )
}

export default AddWord;