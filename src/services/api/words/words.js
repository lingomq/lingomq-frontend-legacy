import { getAccessToken, getUserId } from "../../authentication";
import { requestAsync } from "../api";

export const getLanguages = async (count) => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/words/languages/all/"+count, {}, token);
    return result;
} 

export const getUserStatistics = async () => {
    const token = getAccessToken();
    const id = await getUserId()
    const result = await requestAsync("get", "api.lingomq/identity/user/statistics/id/" + id, {}, token);
    return result;
}

export const getWordsCountPerDays = async (datesArray) => {
    const token = getAccessToken();
    const id = await getUserId()
    let countArray = [];
    
    for (let i = 0; i < datesArray.length; i++)
    {
        let date = datesArray[i];
        let result = await requestAsync("get", `api.lingomq/words/user-words/word/count/${id}/${date}`, {}, token);
        countArray.push(result.data.data.count);
    }

    return countArray;
}

export const getFamousWord = async () => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/words/user-words/famous", {}, token);
    return result;
}

export const getTypes = async (count) => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/words/word-types/all/"+count, {}, token);
    return result;
}

export const addWord = async (model, isForce = false, isAutocomplete = false) => {
    const token = getAccessToken();
    const result = await requestAsync("post", `api.lingomq/words/user-words/${isForce}/${isAutocomplete}`, model, token);
    if (result.data)
        await requestAsync("put", "api.lingomq/identity/user/statistics/word/add", {}, token);
    return result;
}

export const getUserWords = async () => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/words/user-words/user", {}, token);
    return result;
}

export const removeUserWord = async (id) => { 
    const token = getAccessToken();
    const result = await requestAsync("delete", "api.lingomq/words/user-words/" + id, {}, token);
    return result;
}