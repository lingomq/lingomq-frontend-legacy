import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import {
	getFamousWordAsync,
	getRecordsByRepeatsAsync,
	getRecordsByWordsCountAsync,
	getUserStatisticsAsync,
} from "../../../services/api/words/words";
import { Link } from "react-router-dom";
import { getUserDataByIdAsync } from "../../../services/api/identity/identity";
import { v4 } from "uuid";

export const Main = () => {
	const [famousWord, setFamousWord] = useState();
	const [isTopicShow, setIsTopicShow] = useState(true);
	const [records, setRecords] = useState();
	const [userStatistics, setUserStatistics] = useState();

	useEffect(() => {
		const fetchUserStatistics = async () => {
			const result = await getUserStatisticsAsync();
			setUserStatistics(result.data.data);
		};
		const fetchFamousWord = async () => {
			const result = await getFamousWordAsync();
			setFamousWord(result.data.data ? result.data.data.word : "нет");
		};

		const fetchRecords = async () => {
			const result = await getRecordsByWordsCount();
			result.reverse();
			const content = getTableContent(result);
			setRecords(content);
		}

		fetchRecords();
		fetchFamousWord();
		fetchUserStatistics();
	}, []);

	const changeView = () => {
		setIsTopicShow(!isTopicShow);
	};

	const getRecordsByWordsCount = async () => {
		let array = [];
		let result = await getRecordsByWordsCountAsync(4);

		for (let i = 0; i < result.data.data.length; i++) {
			let item = result.data.data[i];
			let user = await getUserDataByIdAsync(item.userId);
			array.push({
				id: v4(),
				count: item.wordsCount,
				user: user.data.data,
			});
		}
		
		return array;
	};

	const getTableContent = (raw) => {
		const elementsArray = [];
		let i = 1;
		raw.map((item) => {
			console.log(item);
			elementsArray.push(
				<div className={styles.recordsCard} key={item.id}>
					<p className={styles.recordsPlace}>{i}</p>
					<div className={styles.recordsProfile}>
						<img src={item.user.imageUri} />
						<p>{item.user.nickname}</p>
					</div>
					<p className={styles.recordsWordsCount}>
						{item.count}
					</p>
				</div>
			);
			i = i + 1;
		});
		
		return elementsArray;
	};

	return (
		famousWord &&
		userStatistics &&
		records && (
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
						<div className={styles.topicCard}>
							<img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
							<p className={styles.topicCardTitle}>
								Название топика
							</p>
							<p className={styles.topicCardContent}>
								asdkfj;lasdlfl;aksdjf;alskdjf;lasdkjf;alskdfj;asdlkfjpioewur019238jre019832j1e2039ejp9238jd98sjd019823jed091823jd213-098du20389
							</p>
						</div>
						<div className={styles.topicCard}>
							<img src="https://sun9-40.userapi.com/impg/Pp3Ubz12XN15SaQKcW4dnROFSjeI6Z7qcdcm4w/9CZI1EH4eco.jpg?size=682x314&quality=96&sign=01dead64eaf61d86eaa7912a9ab03ccd&type=album" />
							<p className={styles.topicCardTitle}>
								Название топика
							</p>
							<p className={styles.topicCardContent}>
								asdkfj;lasdlfl;aksdjf;alskdjf;lasdkjf;alskdfj;asdlkfjpioewur019238jre019832j1e2039ejp9238jd98sjd019823jed091823jd213-098du20389
							</p>
						</div>
						<div className={styles.topicCard}>
							<img src="https://sun9-78.userapi.com/impg/MjSlFFMlPm_MtU2HlnDunIasoj2JB2E1-6Q2Eg/G2v3Ym_QQEY.jpg?size=300x129&quality=96&sign=57e569e85b2eec74dbfe213635fa3007&type=album" />
							<p className={styles.topicCardTitle}>
								Название топика
							</p>
							<p className={styles.topicCardContent}>
								asdkfj;lasdlfl;aksdjf;alskdjf;lasdkjf;alskdfj;asdlkfjpioewur019238jre019832j1e2039ejp9238jd98sjd019823jed091823jd213-098du20389
							</p>
						</div>
						<div className={styles.topicCard}>
							<img src="https://sun9-27.userapi.com/impg/xvh14hEvNH4urkOPcN5sF7krhEjRN3WAMHdyvQ/1oumWcN6Kk4.jpg?size=2560x1920&quality=95&sign=963d7287ae72c9d28657671111edb30c&type=album" />
							<p className={styles.topicCardTitle}>
								Название топика
							</p>
							<p className={styles.topicCardContent}>
								asdkfj;lasdlfl;aksdjf;alskdjf;lasdkjf;alskdfj;asdlkfjpioewur019238jre019832j1e2039ejp9238jd98sjd019823jed091823jd213-098du20389
							</p>
						</div>
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
