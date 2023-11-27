import { useParams } from "react-router";
import styles from "./Practice.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Translate from "./sections/translate/Translate.jsx";
import { getWordsArray } from "../../../services/api/words/words";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import { getRandomNumbers } from "../../../services/random.js";
import notificationManager, {
    getNotificationModel,
} from "../../services/notification/notificationManager.js";
import Modal from "../../ui/modal/Modal.jsx";
import { modalSize } from "../../ui/modal/modalSize.js";
import PracticeResults from "../../elements/modals/practice-results/PracticeResults.jsx";

const Practice = () => {
    let { l, c } = useParams();

    const [summary, setSummary] = useState(c);
    const [count, setCount] = useState(0);
    const [subCount, setSubCount] = useState(0);
    const [exercises, setExercises] = useState();
    const [mistakesCount, setMistakesCount] = useState(0);
    const [rightAnswer, setRightAnswer] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const fillExercises = async () => {
        const checkAnswer = (isValid = false) => {
            setRightAnswer(isValid);
        };

        const words = await getWordsArray(l);
        if (c > words.length) {
            c = words.length;
            setSummary(words.length);
            notificationManager.addNotification(getNotificationModel("warning", "ВНИМАНИЕ", "Количество слов было уменьшено"));
        }
        let exercisesMap = new Map();
        let randomArray = getRandomNumbers(words.length);
        let i = 0;
        for (i = 0; i < c; i++) {
            let randomInt = randomArray[i];
            let word = words[randomInt];

            exercisesMap.set(i, [
                <Translate
                    wordModel={word}
                    next={next}
                    checkFunction={checkAnswer}
                />,
            ]);
        }

        exercisesMap.set(i + 1, [<Translate />]);
        setExercises(exercisesMap);
    };

    const handleUpdateSubCounter = () => {
        setSubCount(count + 1);
    };

    const handleUpdateCounter = () => {
        setCount(count + 1);
        setSubCount(0);
    };

    const changeProgressBar = () => {
        let progress = document.getElementsByClassName(styles.progress)[0];
        progress.style.width = `${((count + 1) * 100) / summary}%`;
    };

    const next = () => {
        let notificationModel = getNotificationModel(
            "success",
            "ПРАВИЛЬНО",
            "Ответ правильный"
        );
        if (rightAnswer === false) {
            notificationModel = getNotificationModel(
                "warning",
                "ОШИБКА",
                "Неверный ответ"
            );
            setMistakesCount(mistakesCount + 1);
        }
        if (exercises.get(count + 1) === undefined) {
            changeProgressBar();
            setShowResults(true);
            return;
        }
        if (exercises.get(count)[subCount + 1] === undefined)
            handleUpdateCounter();
        else handleUpdateSubCounter();

        changeProgressBar();
        notificationManager.addNotification(notificationModel);
        setRightAnswer(false);
    };

    const handleShowResults = () => {
        setShowResults(!showResults);
    }

    useEffect(() => {
        fillExercises();
    }, []);

    return (
        exercises && (
            <>
                <Modal 
                    isShow={showResults}
                    showModalFunction={handleShowResults}
                    size={modalSize.AVERAGE}
                    content={<PracticeResults count={count} mistakes={mistakesCount}/>}
                />
                <div className={styles.practice}>
                    <div className={styles.progressBar}>
                        <div className={styles.progress}></div>
                    </div>
                    <div className={styles.practiceSection}>
                        {exercises.get(count)[subCount]}
                        <RoundedButton text="Продолжить" onClick={next} />
                    </div>
                </div>
            </>
        )
    );
};

export default Practice;
