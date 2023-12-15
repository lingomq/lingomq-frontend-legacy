import { useEffect, useState } from "react";
import styles from "./Records.module.scss";
import SelectField from "../../ui/fields/select/SelectField.jsx";
import {
	getRecordsByRepeatsAsync,
	getRecordsByWordsCountAsync,
} from "../../../services/api/words/words.js";
import Loading from "../../ui/loading/Loading.jsx";

const Records = () => {
	const [filter, setFilter] = useState("wordsCount");
	const [orderBy, setOrderBy] = useState("desc");
	const [filterText, setFilterText] = useState("По словам");
	const [tableContent, setTableContent] = useState();

	const updateOrderBy = async (ordering) => {
		setOrderBy(ordering);
		if (filter === "wordsCount") {
			await getRecordsByRepeats(ordering);
		} else if (filter === "repeats") {
			await getRecordsByWordsCount(ordering);
		}
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
					<p className={styles.recordsWordsCount}>
						{item.count}
					</p>
				</div>
			);
			i = i + 1;
		});
		
		return elementsArray;
	};

	const getRecordsByRepeats = async (ordering) => {
		setTableContent(<Loading/>);
		let result = await getRecordsByRepeatsAsync(20, ordering);
		setFilterText("По повторениям");
		setFilter("repeats");
		setTableContent(getTableContent(result));
	}

	const getRecordsByWordsCount = async (ordering) => {
		setTableContent(<Loading/>);
		let result = await getRecordsByWordsCountAsync(20, ordering);
		setFilterText("По словам");
		setFilter("wordsCount");
		setTableContent(getTableContent(result));
	}

	useEffect(() => {
		getRecordsByWordsCount("desc");
	}, []);

	return (
		!tableContent ? <Loading/> : (
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
									{ name: "По возрастанию", value: "asc" },
									{ name: "По убыванию", value: "desc" },
								]}
								selectStateFunction={async (e) =>
									await updateOrderBy(e.target.value)
								}
							/>
						</div>
						<div className={styles.pickFilter}>
							<p
								onClick={async () =>
									await getRecordsByWordsCount(orderBy)
								}
							>
								ПО СЛОВАМ
							</p>
							<p
								className={styles.pickFilterEnd}
								onClick={async () => await getRecordsByRepeats(orderBy)}
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
