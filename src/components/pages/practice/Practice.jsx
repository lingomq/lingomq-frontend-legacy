import { useParams } from "react-router";
import styles from "./Practice.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Translate from "./sections/translate/Translate.jsx";
import { getUserWords, getWordsArray } from "../../../services/api/words/words";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import { getRandomNumbers } from "../../../services/random.js";

const Practice = () => {
    let { l, c } = useParams();

    const [count, setCount] = useState(0);
    const [subCount, setSubCount] = useState(0);
    const [exercises, setExercises] = useState();

    const fillExercises = async () => {
        const words = await getWordsArray(l);
        if (c > words.length) c = words.length;
        let exercisesMap = new Map();
        let randomArray = getRandomNumbers(words.length);

        for (let i = 0; i < c; i++)
        {
            let randomInt = randomArray[i];
            let word = words[randomInt];

            exercisesMap.set(i, [
                <Translate wordModel={word} next={next}/>
            ]);
        }
        setExercises(exercisesMap);
    }

    const handleUpdateSubCounter = () => {
        setSubCount(count + 1);
    }

    const handleUpdateCounter = () => {
        setCount(count + 1);
        setSubCount(0);
    }

    const next = () => {
        if (exercises.get(count + 1) === undefined) return;
        if (exercises.get(count)[subCount + 1] === undefined) handleUpdateCounter();
        else handleUpdateSubCounter();
    }

    useEffect(() => {
        fillExercises();
    }, []);

    return exercises && (
        <>
            <div className={styles.practiceSection}>
                {exercises.get(count)[subCount]}
            </div>
            <RoundedButton text="Продолжить" onClick={next}/>
        </>
    )
}

export default Practice;