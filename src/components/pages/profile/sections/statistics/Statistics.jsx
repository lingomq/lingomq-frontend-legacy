import { Line } from "react-chartjs-2";
import styles from "./Statistics.module.scss";
import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";

export const Statistics = () => {
	const [dates, setDates] = useState([]);

	useEffect(() => {
		let datesArray = [];
		const date = new Date();
		const days =
			new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() / 2;
		for (let i = 0; i <= days; i++) {
			datesArray.unshift(date.toLocaleDateString());
			date.setDate(date.getDate() - 1);
		}
		setDates(datesArray);
	}, []);

	const data = {
		labels: dates,
		datasets: [
			{
				label: "Новых слов",
				data: [1, 2, 5, 10, 100, 10],
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

	return (
		<div className={styles.statisticsSection}>
			<div className={styles.statisticsLineSection}>
				<Line data={data} options={config("Статистика по словам")}/>
			</div>
            <div className={styles.statisticsSummarySection}>
				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Слов добавлено</p>
					<p className={styles.statisticsDataCardContent}>228</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Повторений</p>
					<p className={styles.statisticsDataCardContent}>228</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Популярное слово</p>
					<p className={styles.statisticsDataCardContent}>ауе</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Часов проведено</p>
					<p className={styles.statisticsDataCardContent}>228</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Дней подряд</p>
					<p className={styles.statisticsDataCardContent}>228</p>
				</div>

				<div className={styles.statisticsDataCard}>
					<p className={styles.statisticsDataCardName}>Слов в день</p>
					<p className={styles.statisticsDataCardContent}>228</p>
				</div>
            </div>
		</div>
	);
};
