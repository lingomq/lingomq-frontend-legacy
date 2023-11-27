import RoundedButton from "../../../../ui/buttons/rounded/RoundedButton.jsx";
import styles from "./Translate.module.scss";

const Translate = ({wordModel, checkFunction}) => {

    return (
        <>
            <p>
                Переведите слово 
            </p>
            <p>{wordModel?.word}</p>
        </>
    )
}

export default Translate;