import { getLanguagesAsync, getTypesAsync } from "./api/words/words";

const toArray = (data, name = "name") => {
    const array = [];
    data.map((item) => {
        array.push({ name: item[name], value: item.id });
    });
    return array;
};

export const getLanguagesArrayAsync = async (count = 10) => {
    const rawLanguages = await getLanguagesAsync(count);
    return toArray(rawLanguages.data.data);
}

export const getWordTypesArrayAsync = async (count = 10) => {
    const rawTypes = await getTypesAsync(count);
    return toArray(rawTypes.data.data, "typeName");
}