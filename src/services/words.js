import { getLanguages, getTypes } from "./api/words/words";

const toArray = (data, name = "name") => {
    const array = [];
    data.map((item) => {
        array.push({ name: item[name], value: item.id });
    });
    return array;
};

export const getLanguagesAsync = async (count = 10) => {
    const rawLanguages = await getLanguages(count);
    return toArray(rawLanguages.data.data);
}

export const getWordTypesAsync = async (count = 10) => {
    const rawTypes = await getTypes(count);
    return toArray(rawTypes.data.data, "typeName");
}