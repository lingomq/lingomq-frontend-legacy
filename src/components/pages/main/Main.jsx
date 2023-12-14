import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import {
	getFamousWordAsync,
	getRecordsByWordsCountAsync,
	getUserStatisticsAsync,
} from "../../../services/api/words/words";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import { Link } from "react-router-dom";
import {
	getAllTopicsAsync,
	getTopicByFiltersAsync,
	getTopicTypesArrayAsync,
} from "../../../services/api/topics/topics";
import TextField from "../../ui/fields/text/TextField.jsx";
import SelectField from "../../ui/fields/select/SelectField.jsx";
import { getLanguagesArrayAsync } from "../../../services/words.js";

export const Main = () => {
	const [famousWord, setFamousWord] = useState();
	const [showFilter, setShowFilter] = useState(false);
	const [isTopicShow, setIsTopicShow] = useState(true);
	const [filterModel, setFilterModel] = useState({
		language: null,
		type: null,
		date: undefined,
		skip: 0,
		take: 20,
		search: "",
	});
	const [records, setRecords] = useState();
	const [topics, setTopics] = useState();
	const [topicsTypes, setTopicsTypes] = useState(null);
	const [languages, setLanguages] = useState();
	const [userStatistics, setUserStatistics] = useState();

	useEffect(() => {
		const fetchLanguages = async () => {
			const languagesArray = await getLanguagesArrayAsync();
			setLanguages(languagesArray);
		};

		const fetchTopicTypes = async () => {
			const topicTypes = await getTopicTypesArrayAsync();
			setTopicsTypes(topicTypes);
		};

		const fetchTopics = async () => {
			const result = await getAllTopicsAsync();
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
		fetchLanguages();
		fetchRecords();
		fetchTopicTypes();
		fetchFamousWord();
		fetchUserStatistics();
	}, []);

	const changeView = () => setIsTopicShow(!isTopicShow);

	const selectTopicLanguage = (id) =>
		setFilterModel({ ...filterModel, language: id });

	const selectTopicType = async (id) =>
		setFilterModel({ ...filterModel, type: id });

	const selectDate = (e) =>
		setFilterModel({ ...filterModel, date: e.target.value });

	const setSearch = (e) =>
		setFilterModel({ ...filterModel, search: e.target.value });

	const turnFilter = () => setShowFilter(!showFilter);

	const applyFilters = async () => {
		const result = await getTopicByFiltersAsync(
			filterModel.skip,
			filterModel.take,
			filterModel.language,
			filterModel.type,
			filterModel.date,
			filterModel.search
		);
		const content = getTopicsContent(result.data.data);
		setTopics(content);
	};

	const getTopicsContent = (raw) => {
		const resultArray = [];
		raw.map((item) => {
			resultArray.push(
				<Link
					className={styles.topicCard}
					key={item.id}
					to={"topic/" + item.id}
				>
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
		topics &&
		languages &&
		topicsTypes && (
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
						<RoundedButton text="ФИЛЬТРЫ" onClick={turnFilter} />
						<div
							className={`${
								showFilter === false
									? styles.none
									: styles.topicsFilter
							}`}
						>
							<TextField
								labelText="ДАТА"
								type="date"
								textStateFunction={(e) => selectDate(e)}
							/>
							<SelectField
								labelText="ЯЗЫК"
								selectedValue={filterModel.language}
								values={languages}
								selectStateFunction={(e) =>
									selectTopicLanguage(e.target.value)
								}
							/>
							<SelectField
								labelText="ТИП"
								selectedValue={filterModel.type}
								values={topicsTypes}
								selectStateFunction={(e) =>
									selectTopicType(e.target.value)
								}
							/>
							<TextField
								labelText="ПОИСК"
								placeholder="search"
								textStateFunction={(e) => setSearch(e)}
							/>
							<RoundedButton
								text="ИСКАТЬ"
								onClick={applyFilters}
							/>
						</div>
						{topics.length === 0 ? (
							<p className={styles.empty}>Топиков нет</p>
						) : (
							topics
						)}
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
