import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import {
  getFamousWordAsync,
  getUserStatisticsAsync,
} from "../../../services/api/words/words";

export const Main = () => {
  const [famousWord, setFamousWord] = useState();
  const [userStatistics, setUserStatistics] = useState();

  useEffect(() => {
    const fetchUserStatistics = async () => {
      const result = await getUserStatisticsAsync();
      setUserStatistics(result.data.data);
    };
    const fetchFamousWord = async () => {
      const result = await getFamousWordAsync();
      setFamousWord(result.data.data.word ?? "");
    };
    fetchFamousWord();
    fetchUserStatistics();
  }, []);

  return (
    famousWord &&
    userStatistics && (
      <div className={styles.main}>
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
            <p className={styles.todayStatisticsCardTitle}>Дней подряд</p>
            <p className={styles.todayStatisticsCardContent}>
              {userStatistics.visitStreak}
            </p>
          </div>
          <div className={styles.todayStatisticsCard}>
            <p className={styles.todayStatisticsCardTitle}>Всего часов</p>
            <p className={styles.todayStatisticsCardContent}>
              {userStatistics.totalHours}
            </p>
          </div>
          <div className={styles.todayStatisticsCard}>
            <p className={styles.todayStatisticsCardTitle}>Слово дня</p>
            <p className={styles.todayStatisticsCardContent}>{famousWord}</p>
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.topicsSection}></div>
          <div className={styles.recordsSection}>
            <p className={styles.recordsTitleSection}>РЕКОРДЫ</p>
            <p className={styles.recordsSubtitleSection}>по словам</p>
            <div className={styles.recordsContent}>
              <div className={styles.recordsCard}>
                <p className={styles.recordsPlace}>1</p>
                <div className={styles.recordsProfile}>
                  <img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
                  <p>zmqpkyf</p>
                </div>
                <p className={styles.recordsWordsCount}>228</p>
              </div>
              <div className={styles.recordsCard}>
                <p className={styles.recordsPlace}>2</p>
                <div className={styles.recordsProfile}>
                  <img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
                  <p>zmqpkyf23232</p>
                </div>
                <p className={styles.recordsWordsCount}>228</p>
              </div>
              <div className={styles.recordsCard}>
                <p className={styles.recordsPlace}>3</p>
                <div className={styles.recordsProfile}>
                  <img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
                  <p>zmqpkyf12</p>
                </div>
                <p className={styles.recordsWordsCount}>228</p>
              </div>
              <div className={styles.recordsCard}>
                <p className={styles.recordsPlace}>4</p>
                <div className={styles.recordsProfile}>
                  <img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
                  <p>zmqpkyf123</p>
                </div>
                <p className={styles.recordsWordsCount}>228</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
