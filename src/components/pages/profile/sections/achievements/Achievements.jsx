import { useState } from "react";
import styles from "./Achievements.module.scss";
import { getUserAchievementsAsync } from "../../../../../services/api/achievements/achievements";
import { useEffect } from "react";
import Loading from "../../../../ui/loading/Loading.jsx";

const Achievements = () => {
    const [achievements, setAchievements] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUserAchievementsAsync();
            const array = [];
            result.data.data.map((item) => {
                array.push(
                <div className={styles.achievementsCard} key={item.achievement.id}>
                    <img
                        className={styles.achievementsCardImg}
                        src={item.achievement.imageUri}
                    />
                    <p className={styles.achievementsCardTitle}>
                        {item.achievement.name}
                    </p>
                    <p className={styles.achievementsCardContent}>
                        {item.achievement.content}
                    </p>
                </div>)
            });
            console.log(array);
            setAchievements(array);
        }
        fetchData();
    }, []);


    return !achievements ? <Loading/> : (
        <div className={styles.achievementsSection}>
            <div className={styles.userAchievements}>
                <p className={styles.userAchievementsTitle}>Мои достижения</p>
                <div className={styles.userAchievementsContent}>
                    {achievements.length === 0 ? <p className={styles.empty}>Достижений нет</p> : achievements}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
