import { getAccessToken } from "../../authentication";
import { getWithAuth, putWithToken } from "../api";

export const getUserData = async (token) => {
    return await getWithAuth("api.lingomq/identity/user/info", token);  
}

export const updateUserInfo = async (model) => {
    const token = getAccessToken();
    return await putWithToken("api.lingomq/identity/user/info", model, token);
}