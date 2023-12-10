import { useEffect, useState } from "react";
import styles from "./Records.module.scss";
import SelectField from "../../ui/fields/select/SelectField.jsx";
import { v4 } from "uuid";

const Records = () => {
	const [filter, setFilter] = useState("wordsCount");
    const [orderBy, setOrderBy] = useState("asc");
	const [filterText, setFilterText] = useState("По словам");
	const [rawTableContent, setRawTableContent] = useState();
    const [tableContent, setTableContent] = useState();

	const changeFilter = (filterType, ordering) => {
        updateOrderBy(ordering);
		updateFilter(filterType);
		let result = applyFilters(rawTableContent, filterType);
		if (ordering === "desc") {
			result.reverse();
		}
		setTableContent(getTableContent(result, filterType));
	};

    const updateOrderBy = (ordering) => {
        setOrderBy(ordering);
    }


	const getTableContent = (raw, filterType) => {
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
						{getByParameter(item, filterType)}
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

	const applyFilters = (array, filterType) => {
        console.log(filterType);
		let result = [...array];
		if (filterType === "wordsCount") {
			result = result.sort(
				(a, b) => Number(b.wordsCount) - Number(a.wordsCount)
			);
		} else if (filterType === "repeats") {
			result = result.sort(
				(a, b) => Number(b.repeats) - Number(a.repeats)
			);
		}
        console.log(result);
		return result;
	};

	const getByParameter = (item, filterType) => {
		return item[filterType];
	};

	useEffect(() => {
		let result = [
			{
				id: v4(),
				wordsCount: 30,
				repeats: 100,
				user: {
					additional: "daemon",
					creationalDate: "2023-11-29T17:51:05",
					id: "220a1b21-2c6c-4f0c-ba0c-37ada34cc961",
					imageUri:
						"https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album",
					isRemoved: false,
					nickname: "zmqpkyf123",
					userId: "a3467652-ad3a-44b0-b7b3-9ec875f7c90a",
				},
			},
			{
				id: v4(),
				wordsCount: 20,
				repeats: 200,
				user: {
					additional: "daemon",
					creationalDate: "2023-11-29T17:51:05",
					id: "220a1b21-2c6c-4f0c-ba0c-37ada34cc961",
					imageUri:
						"https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album",
					isRemoved: false,
					nickname: "zmqpkyf12",
					userId: "a3467652-ad3a-44b0-b7b3-9ec875f7c90a",
				},
			},
			{
				id: v4(),
				wordsCount: 10,
				repeats: 300,
				user: {
					additional: "daemon",
					creationalDate: "2023-11-29T17:51:05",
					id: "220a1b21-2c6c-4f0c-ba0c-37ada34cc961",
					imageUri:
						"https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album",
					isRemoved: false,
					nickname: "zmqpkyf1",
					userId: "a3467652-ad3a-44b0-b7b3-9ec875f7c90a",
				},
			},
		];
		setRawTableContent(result);
        setTableContent(getTableContent(result, filter));
	}, []);

	return (
		rawTableContent && tableContent && (
			<div className={styles.recordsSections}>
				<div className={styles.recordsTitleSection}>
					<p className={styles.recordsTitle}>ТАБЛИЦА РЕКОРДОВ</p>
					<p className={styles.recordsSubTitle}>{filterText}</p>
					<div className={styles.filters}>
						<div className={styles.filter}>
							<p>Порядок: </p>
							<SelectField
								values={[
									{ name: "По возрастанию", value: "desc" },
									{ name: "По убыванию", value: "asc" },
								]}
								selectStateFunction={(e) => changeFilter(filter, e.target.value)}
							/>
						</div>
						<div className={styles.pickFilter}>
							<p onClick={() => changeFilter("wordsCount", orderBy)}>
								ПО СЛОВАМ
							</p>
							<p
								className={styles.pickFilterEnd}
								onClick={() => changeFilter("repeats", orderBy)}
							>
								ПО ПОВТОРЕНИЯМ
							</p>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.recordsContent}>
						{getTableContent(rawTableContent).length === 0 ? (
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
