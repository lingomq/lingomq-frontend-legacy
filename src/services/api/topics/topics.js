import { requestAsync } from "../api"
import { getAllTopicsUrl, getTopicByIdUrl } from "../api-urls"

export const getAllTopicsAsync = async (count) => {
    const result = await requestAsync("get", getAllTopicsUrl + "/" + count, {});
    return result;
}

export const getTopicByIdAsync = async (id) => {
    const result = await requestAsync("get", getTopicByIdUrl + "/" + id, {});
    return result;
}