import axios from "axios";
import { getAccessToken, isAuthenticated, isTokenExpired, updateTokensAsync } from "../authentication";

const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Credentials": true,
};

const authHeaders = (token) => {
    return {
        ...headers,
        "Authorization": "Bearer " + token
    };
}

export const requestAsync = async(type, uri, model = {}, token = undefined) => {
    try {
        let accessToken = getAccessToken();
        if (isTokenExpired()) {
            if (isAuthenticated()) {
                await updateTokensAsync(headers);
                accessToken = getAccessToken();
            }
        }

        const response = await axios({
            method: type, 
            url: uri,
            headers: accessToken === undefined ? headers : authHeaders(accessToken),
            data: model
        });

        return responseProcessing(response);
    } catch (err) {
        return errorResponseProcessing(err);
    }
}

export const responseProcessing = (axiosResult) => {
    let level = axiosResult.status;
    let data = axiosResult.data;

    return { level: level, data: data }
}

export const errorResponseProcessing = (axiosResult) => {
    if (axiosResult.code === "ERR_NETWORK")
        return { level: 500, data: { message: "network error"}};
    return { level: axiosResult.response.status, data: axiosResult.response.data }
}
