import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { getFamousWord, getUserStatistics } from "../../../services/api/words/words";

export const Main = () => {
    const [famousWord, setFamousWord] = useState();
    const [userStatistics, setUserStatistics] = useState();

    useEffect(() => {
        const fetchUserStatistics = async () => {
            const result = await getUserStatistics();
            setUserStatistics(result.data.data);
        }
        const fetchFamousWord = async () => {
            const result = await getFamousWord();
            setFamousWord(result.data.data);
        }
        fetchFamousWord();
        fetchUserStatistics();
    }, []);

    return (famousWord && userStatistics) && (
        <>
           <div className={styles.todayStatisticsSection}>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Добавленных слов за все время
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        {userStatistics.totalWords}
                    </p>
                </div>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Дней подряд
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        {userStatistics.visitStreak}
                    </p>
                </div>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Всего часов
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        {userStatistics.totalHours}
                    </p>
                </div>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Слово дня
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        {famousWord?.word}
                    </p>
                </div>
           </div>
        </>
    );
};
