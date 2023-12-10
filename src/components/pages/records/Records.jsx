import { useEffect, useState } from "react";
import styles from "./Records.module.scss";
import SelectField from "../../ui/fields/select/SelectField.jsx";
import { v4 } from "uuid";
import {
	getRecordsByRepeatsAsync,
	getRecordsByWordsCountAsync,
} from "../../../services/api/words/words.js";
import {
	getUserDataAsync,
	getUserDataByIdAsync,
} from "../../../services/api/identity/identity.js";

const Records = () => {
	const [filter, setFilter] = useState("wordsCount");
	const [orderBy, setOrderBy] = useState("asc");
	const [filterText, setFilterText] = useState("По словам");
	const [tableContent, setTableContent] = useState();

	const changeFilter = async (filterType, ordering) => {
		updateOrderBy(ordering);
		updateFilter(filterType);
		let result = await applyFilters(filterType);
		if (ordering === "desc") {
			result.reverse();
		}
		console.log("chf: ")
		console.log(result);
		setTableContent(getTableContent(result));
	};

	const updateOrderBy = (ordering) => {
		setOrderBy(ordering);
	};

	const getRepeats = async () => {
		let array = [];
		let result = await getRecordsByRepeatsAsync(20);

		for (let i = 0; i < result.data.data.length; i++) {
			let item = result.data.data[i];
			let user = await getUserDataByIdAsync(item.userId);
			array.push({
				id: v4(),
				count: item.repeats,
				user: user.data.data,
			});
		}

		return array;
	};

	const getWordsCount = async () => {
		let array = [];
		let result = await getRecordsByWordsCountAsync(20);

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
		console.log(raw);
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

	const updateFilter = (filterType) => {
		if (filterType === "wordsCount") {
			setFilterText("По словам");
		} else if (filterType === "repeats") {
			setFilterText("По повторениям");
		}

		setFilter(filterType);
	};

	const applyFilters = async (filterType) => {
		let result;
		if (filterType === "wordsCount") {
			result = await getWordsCount();
		} else if (filterType === "repeats") {
			result = await getRepeats();
		}

		result = result.sort(
			(a, b) => Number(b.count) - Number(a.count)
		);

		return result;
	};

	useEffect(() => {
		const fetchData = async () => {
			let result = await getWordsCount();
			result.reverse();
			let content = getTableContent(result);
			setTableContent(content);
		};

		fetchData();
	}, []);

	return (
		tableContent && (
			<div className={styles.recordsSections}>
				<div className={styles.recordsTitleSection}>
					<p className={styles.recordsTitle}>ТАБЛИЦА РЕКОРДОВ</p>
					<p className={styles.recordsSubTitle}>
						{filterText}
					</p>
					<div className={styles.filters}>
						<div className={styles.filter}>
							<p>Порядок: </p>
							<SelectField
								values={[
									{ name: "По возрастанию", value: "desc" },
									{ name: "По убыванию", value: "asc" },
								]}
								selectStateFunction={async (e) =>
									await changeFilter(filter, e.target.value)
								}
							/>
						</div>
						<div className={styles.pickFilter}>
							<p
								onClick={async () =>
									await changeFilter("wordsCount", orderBy)
								}
							>
								ПО СЛОВАМ
							</p>
							<p
								className={styles.pickFilterEnd}
								onClick={async () => await changeFilter("repeats", orderBy)}
							>
								ПО ПОВТОРЕНИЯМ
							</p>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.recordsContent}>
						{tableContent.length === 0 ? (
							<p className={styles.empty}>Рекордсменов нет</p>
						) : (
							tableContent
						)}
					</div>
				</div>
			</div>
		)
	);
};

export default Records;
