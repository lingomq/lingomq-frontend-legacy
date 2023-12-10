import { Line } from "react-chartjs-2";
import styles from "./Statistics.module.scss";
import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";
import { getFamousWord, getFamousWordAsync, getUserStatisticsAsync, getWordsCountPerDaysAsync } from "../../../../../services/api/words/words";

export const Statistics = () => {
	const [dates, setDates] = useState([]);
	const [repeats, setRepeats] = useState([]);
    const [famousWord, setFamousWord] = useState();
    const [userStatistics, setUserStatistics] = useState();

	useEffect(() => {
		const fetchUserStatistics = async () => {
            const result = await getUserStatisticsAsync();
            setUserStatistics(result.data.data);
        }
        const fetchFamousWord = async () => {
            const result = await getFamousWordAsync();
            setFamousWord(result.data.data ? result.data.data.word : "нет");
        }

		const fetchCounts = async (dates)=> {
			const result = await getWordsCountPerDaysAsync(dates);
			setRepeats(result);
		};

		let datesArray = [];
		const date = new Date();
		const days =
			new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() / 2;
		for (let i = 0; i <= days; i++) {
			datesArray.unshift(date.toLocaleDateString('fr-CA'));
			date.setDate(date.getDate() - 1);
		}

		setDates(datesArray);
		fetchCounts(datesArray);
        fetchFamousWord();
        fetchUserStatistics();
	}, []);

	const data = {
		labels: dates,
		datasets: [
			{
				label: "Новых слов",
				data: repeats,
				color: "#ff0000",
				borderColor: "rgb(255,99,123)",
				backgroundColor: "#ffffff",
			},
		],
	};

    const config = (title) => {
        return {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: title,
                },
            },
        };
    }

	return (famousWord && userStatistics && repeats) && (
		<div className={styles.statisticsSection}>
			<div className={styles.statisticsLineSection}>
				<Line data={data} options={config("Статистика по словам")}/>
			</div>
            <div className={styles.statisticsSummarySection}>
				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Слов добавлено</p>
					<p className={styles.statisticsDataCardContent}>{userStatistics.totalWords}</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Популярное слово</p>
					<p className={styles.statisticsDataCardContent}>{famousWord}</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Часов проведено</p>
					<p className={styles.statisticsDataCardContent}>{userStatistics?.totalHours}</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Дней подряд</p>
					<p className={styles.statisticsDataCardContent}>{userStatistics?.visitStreak}</p>
				</div>
            </div>
		</div>
	);
};
