import { useState } from "react";
import styles from "./SelectField.module.scss";
import { v4 as uuid } from "uuid";

const SelectField = ({
    labelText = "",
    selectStateFunction = undefined,
    name = null,
    autoComplete = null,
    values = [],
}) => {

    const [selectValue, setSelectValue] = useState("none");
    function onChange(e) {
        if (selectStateFunction === undefined) {
            console.warn("You forgot to declare a textState method");
        } else {
            selectStateFunction(e);
            setSelectValue(e.target.value);
        }
    }

    const listLanguages = [<option key="0" value="none">Выберите</option>];
    listLanguages.push(values.map((item) => (
        <option key={uuid()} value={item.value}>
            {item.name}
        </option>
    )));
    
    return (
        <div className={styles.selectFieldComponent}>
            <label>{labelText}</label>
            <select
                name={name}
                className={styles.selectField}
                value={selectValue}
                onChange={(e) => onChange(e)}
            >
                {listLanguages}
            </select>
        </div>
    );
};

export default SelectField;
