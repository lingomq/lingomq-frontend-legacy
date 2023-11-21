import { useState } from "react";
import styles from "./Main.module.scss";

export const Main = () => {
    return (
        <>
           <div className={styles.todayStatisticsSection}>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Добавленных слов за сегодня
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        20
                    </p>
                </div>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Дней подряд
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        20
                    </p>
                </div>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Повторений за сегодня
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        20
                    </p>
                </div>
                <div className={styles.todayStatisticsCard}>
                    <p className={styles.todayStatisticsCardTitle}>
                        Слово дня
                    </p>
                    <p className={styles.todayStatisticsCardContent}>
                        ауе
                    </p>
                </div>
           </div>
        </>
    );
};
