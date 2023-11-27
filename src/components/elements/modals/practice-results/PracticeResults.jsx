import RoundedButton from "../../../ui/buttons/rounded/RoundedButton.jsx";
import styles from "./PracticeResults.module.scss";

const PracticeResults = ({count, mistakes}) => {
    return (
        <>
            <p>РЕЗУЛЬТАТЫ</p>
            <p className={styles.practiceResultsText}>КОЛИЧЕСТВО ОШИБОК: <b>{count - (count - mistakes)}</b></p>
            <p className={styles.practiceResultsText}>ПРАВИЛЬНЫХ ОТВЕТОВ: <b>{1 + count - mistakes}</b></p>
            <RoundedButton text="НА ГЛАВНУЮ" onClick={() => window.location.href = "/"}/>
        </>
    )
}

export default PracticeResults;