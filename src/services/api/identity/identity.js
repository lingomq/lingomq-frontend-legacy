import { getAccessToken } from "../../authentication";
import { requestAsync } from "../api";

export const getUserData = async (token) => {
    return await requestAsync("get", "api.lingomq/identity/user/info", {}, token);  
}

export const updateUserInfo = async (model) => {
    const token = getAccessToken();
    return await requestAsync("put", "api.lingomq/identity/user/info", model, token);
}