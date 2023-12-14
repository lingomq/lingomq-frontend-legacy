import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import {
	getFamousWordAsync,
	getRecordsByWordsCountAsync,
	getUserStatisticsAsync,
} from "../../../services/api/words/words";
import { Link } from "react-router-dom";
import { getAllTopicsAsync } from "../../../services/api/topics/topics";

export const Main = () => {
	const [famousWord, setFamousWord] = useState();
	const [isTopicShow, setIsTopicShow] = useState(true);
	const [records, setRecords] = useState();
	const [topics, setTopics] = useState();
	const [userStatistics, setUserStatistics] = useState();

	useEffect(() => {
		const fetchTopics = async () => {
			const result = await getAllTopicsAsync(15);
			const content = getTopicsContent(result.data.data);
			setTopics(content);
		};
		const fetchUserStatistics = async () => {
			const result = await getUserStatisticsAsync();
			setUserStatistics(result.data.data);
		};
		const fetchFamousWord = async () => {
			const result = await getFamousWordAsync();
			setFamousWord(result.data.data ? result.data.data.word : "нет");
		};

		const fetchRecords = async () => {
			let result = await getRecordsByWordsCountAsync(20, "desc");
			setRecords(getTableContent(result));
		};

		fetchTopics();
		fetchRecords();
		fetchFamousWord();
		fetchUserStatistics();
	}, []);

	const changeView = () => {
		setIsTopicShow(!isTopicShow);
	};

	const getTopicsContent = (raw) => {
		const resultArray = [];
		raw.map((item) => {
			resultArray.push(
				<Link className={styles.topicCard} key={item.id} to={"topic/"+item.id}>
					<img src={item.icon} />
					<p className={styles.topicCardTitle}>{item.title}</p>
				</Link>
			);
		});

		return resultArray;
	};

	const getTableContent = (raw) => {
		const elementsArray = [];
		let i = 1;
		raw.map((item) => {
			elementsArray.push(
				<div className={styles.recordsCard} key={item.id}>
					<p className={styles.recordsPlace}>{i}</p>
					<div className={styles.recordsProfile}>
						<img src={item.user.imageUri} />
						<p>{item.user.nickname}</p>
					</div>
					<p className={styles.recordsWordsCount}>{item.count}</p>
				</div>
			);
			i = i + 1;
		});

		return elementsArray;
	};

	return (
		famousWord &&
		userStatistics &&
		records && 
		topics && (
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
							{famousWord}
						</p>
					</div>
				</div>
				<div className={styles.mainSelector}>
					<div className={styles.mainSelectorContent}>
						<p
							onClick={changeView}
							className={`${isTopicShow ? styles.selected : ""}`}
						>
							ТОПИКИ
						</p>
						<p
							onClick={changeView}
							className={`${!isTopicShow ? styles.selected : ""}`}
						>
							РЕКОРДЫ
						</p>
					</div>
				</div>
				<div className={styles.mainSection}>
					<div
						className={`${styles.topicsSection} ${
							isTopicShow ? "" : styles.disabled
						}`}
					>
						<p className={styles.topicsSectionTitle}>ТОПИКИ</p>
						{topics}
					</div>
					<div
						className={`${styles.recordsSection} ${
							!isTopicShow || window.innerWidth >= 1050
								? ""
								: styles.disabled
						}`}
					>
						<p className={styles.recordsTitleSection}>РЕКОРДЫ</p>
						<p className={styles.recordsSubtitleSection}>
							по словам
						</p>
						<div className={styles.recordsContent}>
							{records}
							<Link
								className={styles.showAllRecords}
								to="records"
							>
								Просмотреть все
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	);
};
