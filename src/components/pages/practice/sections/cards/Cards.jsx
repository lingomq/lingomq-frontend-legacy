import { useEffect } from "react";
import styles from "./Cards.module.scss";
import { useState } from "react";

const Cards = ({words, rightWord, checkFunction}) => {
    const [wordVariants, setWordVariants] = useState();

    useEffect(() => {

        const clear = () => {
            const cards = document.getElementsByClassName(styles.card);
            for (let i = 0; i < cards.length; i++)
                cards[i].style.background = "#FFFFFF";
        }

        const handleClick = (e) => {
            clear();
            e.target.style.background = "#dddddd";
            if (e.target.getAttribute("data-key") === rightWord.id)
                checkFunction(true);
        }

        words.push(rightWord);
        words = words.sort(() => Math.random() - 0.5);
        const array = words.map((item) => {
            return (<div className={styles.card} onClick={(e) => handleClick(e)} key={item.id} data-key={item.id}>
                {item.word}
            </div>)
        });
        setWordVariants(array);
    }, []);
    
    return wordVariants && (
        <>
            <p>Выберите правильное слово: </p>
            <p className={styles.translated}>{rightWord?.translated}</p>
            <div className={styles.cards}>
                {wordVariants}
            </div>
        </>
    )
}

export default Cards;