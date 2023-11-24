import { useState } from "react";
import SelectField from "../../../ui/fields/select/SelectField.jsx";
import styles from "./EditWord.module.scss";
import { useEffect } from "react";
import { getTypes } from "../../../../services/api/words/words.js";
import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import { buttonTypes } from "../../../ui/buttons/buttonTypes.js";

const EditWord = ({ data }) => {
    const [wordTypes, setWordTypes] = useState();
    useEffect(() => {
        const toArray = (data, name = "name") =>{
            const array = [];
            data.map(item => {
                array.push({name: item[name], value: item.id});
            });
            return array;
        }
        const setTypes = async () => 
        {
            const rawTypes = await getTypes(10);
            const typesArray = toArray(rawTypes.data.data, "typeName");
            setWordTypes(typesArray);
        }
        setTypes();
    }, [setWordTypes]);

    const handleChange = (e) => {
        
    }

    return wordTypes && (
        <>
            <p className={styles.nativeWord}>{data?.word}</p>
            <p className={styles.translatedWord}>{data?.translated}</p>
            <p className={styles.language}>{data?.language?.name}</p>
            <p className={styles.repeats}>Повторений: <b>{data?.repeats}</b></p>
            <SelectField labelText="Тип" name="userWordTypeId" values={wordTypes} selectStateFunction={(e) => handleChange(e)}/>           
            <RoundedButton text="ИЗМЕНИТЬ" />
            <RoundedButton text="УДАЛИТЬ" buttonType={buttonTypes.ERROR} />
        </>
    )
};

export default EditWord;