import { getAccessToken } from "../../authentication";
import { requestAsync } from "../api";

export const getLanguages = async (count) => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/words/languages/all/"+count, {}, token);
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
    return result;
}

export const getUserWords = async () => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/words/user-words/user", {}, token);
    return result;
}