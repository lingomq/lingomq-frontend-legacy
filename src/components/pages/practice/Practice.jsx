import { useParams } from "react-router";
import styles from "./Practice.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Translate from "./sections/translate/Translate.jsx";
import { addRepeatToWord, getWordsArray } from "../../../services/api/words/words";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import { getRandomNumbers } from "../../../services/random.js";
import notificationManager, { getNotificationModel } from "../../ui/notification/notificationManager.js";
import { modalSize } from "../../ui/modal/modalSize.js";
import PracticeResults from "../../elements/modals/practice-results/PracticeResults.jsx";
import ModalManager from "../../ui/modal/ModalManager.js";

const Practice = () => {
    let { l, c } = useParams();

    const [summary, setSummary] = useState(c);
    const [count, setCount] = useState(0);
    const [subCount, setSubCount] = useState(0);
    const [exercises, setExercises] = useState();
    const [mistakesCount, setMistakesCount] = useState(0);
    const [rightAnswer, setRightAnswer] = useState(false);
    const [wordList, setWordsList] = useState();

    const fillExercises = async () => {
        const checkAnswer = (isValid = false) => {
            setRightAnswer(isValid);
        };

        const words = await getWordsArray(l);
        if (c > words.length) {
            c = words.length;
            setSummary(words.length);
            notificationManager.addNotification("warning", "ВНИМАНИЕ", "Количество слов было уменьшено");
        }
        let exercisesMap = new Map();
        let randomArray = getRandomNumbers(words.length);
        let i = 0;
        let tempList = [];
        for (i = 0; i < c; i++) {
            let randomInt = randomArray[i];
            let word = words[randomInt];
            tempList = [...tempList, word];
            setWordsList(tempList);

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
        if (exercises.get(count + 1) === undefined) {
            changeProgressBar();
            handleShowResults();
            updateWordModel(count);
            return;
        }

        updateWordModel(count);
        if (rightAnswer === false) {
            notificationManager.addNotification("warning","ОШИБКА","Неверный ответ");
            setMistakesCount(mistakesCount + 1);
        }
        else notificationManager.addNotification("success","ПРАВИЛЬНО","Ответ правильный");

        if (exercises.get(count)[subCount + 1] === undefined) handleUpdateCounter();
        else handleUpdateSubCounter();

        changeProgressBar();
        setRightAnswer(false);
    };

    const handleShowResults = () => ModalManager.addModal(modalSize.AVERAGE, <PracticeResults count={count} mistakes={mistakesCount}/>);

    const updateWordModel = async (index) => {
        const word = wordList[index];
        word.repeats = word.repeats + 1;
        await addRepeatToWord(word.id);
    }

    useEffect(() => {
        fillExercises();
    }, []);

    return (
        (exercises && wordList) && (
            <>
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
