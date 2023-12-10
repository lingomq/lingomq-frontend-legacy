import { getUserId } from "../../authentication";
import { requestAsync } from "../api";
import { addRepeatToWordUrl, addWordToStatisticsUrl, addWordUrl, getFamousWordUrl, getLanguagesUrl, getRecordsByRepeatsUrl, getRecordsByWordsCountUrl, getUserStatisticsUrl, getUserWordsUrl, getWordTypesUrl, getWordsCountPerDayUrl, removeUserWordUrl } from "../api-urls";

export const getLanguagesAsync = async (count) => {
    const result = await requestAsync("get", getLanguagesUrl+count, {});
    return result;
} 

export const getUserStatisticsAsync = async () => {
    const id = await getUserId()
    const result = await requestAsync("get", getUserStatisticsUrl + id, {});
    return result;
}

export const getWordsCountPerDaysAsync = async (datesArray) => {
    const id = await getUserId()
    let countArray = [];
    
    for (let i = 0; i < datesArray.length; i++)
    {
        let date = datesArray[i];
        let result = await requestAsync("get", getWordsCountPerDayUrl+`${id}/${date}`, {});
        countArray.push(result.data.data.count);
    }

    return countArray;
}

export const getFamousWordAsync = async () => {
    const result = await requestAsync("get", getFamousWordUrl, {});
    return result;
}

export const getTypesAsync = async (count) => {
    const result = await requestAsync("get", getWordTypesUrl+count, {});
    return result;
}

export const addWordAsync = async (model, isForce = false, isAutocomplete = false) => {
    const result = await requestAsync("post", addWordUrl+`${isForce}/${isAutocomplete}`, model);
    if (result.data)
        await requestAsync("put", addWordToStatisticsUrl, {});
    return result;
}

export const getUserWordsAsync = async () => {
    const result = await requestAsync("get", getUserWordsUrl, {});
    return result;
}

export const removeUserWordAsync = async (id) => { 
    const result = await requestAsync("delete", removeUserWordUrl + id, {});
    return result;
}

export const addRepeatToWordAsync = async (id) => {
    const result = await requestAsync("put", addRepeatToWordUrl+`${id}`, {});
    return result;
}

export const getRecordsByRepeatsAsync = async (count = 4) => {
    const result = await requestAsync("get", getRecordsByRepeatsUrl + count, {});
    return result;
}

export const getRecordsByWordsCountAsync = async (count = 4) => {
    const result = await requestAsync("get", getRecordsByWordsCountUrl + count, {});
    return result;
}

export const getWordsArrayAsync = async (languageId) => {
    const result = [];
    const wordsArray = [];
    const words = await getUserWordsAsync();
    words.data.data.map((item) => { wordsArray.push(item) });
    if (languageId === "none")
    {
        wordsArray.map((item) => { result.push(item); });
    }
    else {
        const newWords = wordsArray.filter((item) => {
            return item.languageId === languageId;
        });
        newWords.map((item) => { result.push(item) });
    }

    return result;
}