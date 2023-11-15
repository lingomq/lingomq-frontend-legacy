import { getAccessToken, getRefreshToken, isAuthenticated, refreshTokens } from "../../authentication";
import { requestAsync } from "../api";

export const getUserData = async () => {
    await isAuthenticated();
    const token = getAccessToken();
    return await requestAsync("get", "api.lingomq/identity/user/info", {}, token);  
}

export const updateUserInfo = async (model) => {
    const token = getAccessToken();
    const refreshToken = getRefreshToken();
    const result = await requestAsync("put", "api.lingomq/identity/user/info", model, token)
    await refreshTokens(refreshToken);
    return result;
}