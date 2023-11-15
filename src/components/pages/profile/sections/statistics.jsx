import { Line, Pie } from "react-chartjs-2";
import "./statistics.scss";
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
				data: [1, 2, 5, 10, 100, 1000],
				color: "#ff0000",
				borderColor: "rgb(255,99,123)",
				backgroundColor: "#ffffff",
			},
		],
	};

    const languagesData = {
        labels: [ "English", 'Japanese'],
        datasets: [
            {
                label: "Количество слов",
                data: [ 75, 25 ],
                backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)"
                ]
            }
        ]
    }

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
		<div className="statistics-section">
			<div className="statistics-line-section">
				<Line data={data} options={config("Статистика по словам")}/>
			</div>
            <div className="statistics-summary-section">
				<div className="statistics-data-card">
					<p className="statistics-data-card-name">Слов добавлено</p>
					<p className="statistics-data-card-content">228</p>
				</div>

				<div className="statistics-data-card">
					<p className="statistics-data-card-name">Повторений</p>
					<p className="statistics-data-card-content">228</p>
				</div>

				<div className="statistics-data-card">
					<p className="statistics-data-card-name">Популярное слово</p>
					<p className="statistics-data-card-content">ауе</p>
				</div>

				<div className="statistics-data-card">
					<p className="statistics-data-card-name">Часов проведено</p>
					<p className="statistics-data-card-content">228</p>
				</div>

				<div className="statistics-data-card">
					<p className="statistics-data-card-name">Дней подряд</p>
					<p className="statistics-data-card-content">228</p>
				</div>

				<div className="statistics-data-card">
					<p className="statistics-data-card-name">Слов в день</p>
					<p className="statistics-data-card-content">228</p>
				</div>
            </div>
            <div className="statistics-pie-section"> 
                <Pie data={languagesData} options={config("Статистика по языкам")}/>
            </div>
		</div>
	);
};
