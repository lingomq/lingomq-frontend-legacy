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
	endDate = undefined,
	search = ""
) => {
	const skipUrl = `?skip=${skip}`;
	const takeUrl = `&take=${take}`;
	const languageUrl = languageId !== null && new String(languageId).valueOf() !== new String("none").valueOf() ? `&languageId=${languageId}` : "";
	const levelUrl = levelId !== null && new String(levelId).valueOf() !== new String("none").valueOf() ? `&levelId=${levelId}` : "";
	const endTimeUrl = endDate !== undefined ? `&endDate=${endDate}` : "";
	const searchUrl = `&search=${search}`;

	const url =
		getFilteredTopicsUrl +
		skipUrl +
		takeUrl +
		languageUrl +
		levelUrl +
		endTimeUrl +
		searchUrl;

	const result = await requestAsync("get", url, {});
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
