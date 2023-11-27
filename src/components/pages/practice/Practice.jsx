import { useParams } from "react-router";
import styles from "./Practice.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Translate from "./sections/translate/Translate.jsx";
import { getUserWords } from "../../../services/api/words/words";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";

const Practice = () => {
    let { l, c } = useParams();

    const [count, setCount] = useState(0);
    const [subCount, setSubCount] = useState(0);
    const [exercises, setExercises] = useState();

    const getWords = async () => {
        const result = [];
        const wordsArray = [];
        const words = await getUserWords();
        words.data.data.map((item) => { wordsArray.push(item) });
        if (l === "none")
        {
            wordsArray.map((item) => { result.push(item); console.log(item); });
        }
        else {
            const newWords = wordsArray.filter((item) => {
                return item.languageId === l;
            });
            newWords.map((item) => { result.push(item) });
        }

        return result;
    }

    const fillExercises = async () => {
        const words = await getWords();
        if (c > words.length) c = words.length;
        let exercisesMap = new Map();
        let wordIdsExisted = Array.from({length: words.length}, () => Math.floor(Math.random() * words.length));
        let wordIdsSet = new Set(wordIdsExisted);

        for (let i = 0; i < c; i++)
        {
            let randomInt = [...wordIdsSet.values()][i];
            let word = words[randomInt];

            exercisesMap.set(i, [
                <Translate wordModel={word} />
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
        if (exercises.get(count + 1) === undefined)
            return;

        if (exercises.get(count)[subCount + 1] === undefined)
        {
            handleUpdateCounter();
        }
        else 
        {
            handleUpdateSubCounter();
        }
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