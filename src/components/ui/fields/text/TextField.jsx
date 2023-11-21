import styles from "./TextField.module.scss";

const TextField = ({
    labelText = "",
    type = "text",
    placeholder = "",
    textStateFunction = undefined,
    name = null,
    autoComplete = null
    }) => {
    function onChange(e) {
        if (textStateFunction === undefined) {
            console.warn("You forgot to declare a textState method");
        } else {
            textStateFunction(e);
        }
    }

    return (
        <div className={styles.textFieldComponent}>
            <label>{labelText}</label>
            <input
                className={styles.textField}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                autoComplete={autoComplete}
            />
        </div>
    );
};

export default TextField;
