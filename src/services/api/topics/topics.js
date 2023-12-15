import { requestAsync } from "../api";
import {
	getAllTopicsUrl,
	getFilteredTopicsUrl,
	getTopicByIdUrl,
	getTopicLevelsUrl,
} from "../api-urls";

export const getAllTopicsAsync = async (skip = 0, take = 10000) => {
	const result = await requestAsync(
		"get",
		getAllTopicsUrl + `skip/${skip}/take/${take}`,
		{}
	);
	return result;
};

export const getTopicByIdAsync = async (id) => {
	const result = await requestAsync("get", getTopicByIdUrl + "/" + id, {});
	return result;
};

export const getTopicByFiltersAsync = async (
	skip = 0,
	take = 100,
	languageId = null,
	levelId = null,
	endDate = undefined
) => {
	const skipUrl = `?skip=${skip}`;
	const takeUrl = `&take=${take}`;
	const languageUrl = languageId !== null ? `&languageId=${languageId}` : "";
	const levelUrl = levelId !== null ? `&levelId=${levelId}` : "";
	const endTime = endDate !== undefined ? `&endDate=${endDate}` : "";

	const url =
		getFilteredTopicsUrl +
		skipUrl +
		takeUrl +
		languageUrl +
		levelUrl +
		endTime;

	console.log(url);
	const result = await requestAsync("get", url, {});
	console.log(result);
};

export const getFilteredTopicsArrayAsync = async (skip, typeId, languageId) => {
	const result = [];
	const levelsArray = [];
	const levels = await getAllTopicsAsync();
	levels.data.data.map((item) => {
		levelsArray.push(item);
	});
	if (typeId === "none") {
		result = levelsArray;
	} else {
		const newLevels = levelsArray.filter((item) => {
			return item.topicTypeId === typeId;
		});
		newLevels.map((item) => {
			result.push(item);
		});
	}

	return result;
};

const toArray = (data, name = "name") => {
	const array = [];
	data.map((item) => {
		array.push({ name: item[name], value: item.id });
	});
	return array;
};

export const getTopicTypesArrayAsync = async (count = 10) => {
	const rawTypes = await requestAsync("get", getTopicLevelsUrl + count, {});
	return toArray(rawTypes.data.data, "levelName");
};
