import axios from "axios";

const resultMap = new Map();
resultMap.set(200, "Успешно");
resultMap.set(400, "Ошибка");
resultMap.set(500, "Ошибка сервера");

const resultTitleMap = new Map();
resultTitleMap.set(200, "success");
resultTitleMap.set(400, "warning");
resultTitleMap.set(500, "error");

const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "https://192.168.0.101:9000",
    "Access-Control-Allow-Credentials": true,
};

const authHeaders = (token) => {
    return {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "https://192.168.0.101:9000",
        "Access-Control-Allow-Credentials": true,
        "Authorization": "Bearer " + token
    };
}

export const apiUrl = "https://192.168.0.105:9999/";

export const requestAsync = async(type, uri, model = {}, token = undefined) => {
    let result;

    try {
        const response = await axios({
            method: type, 
            url: apiUrl + uri,
            headers: token === undefined ? headers : authHeaders(token),
            data: model
        });

        result = handleRequest(response);
    } catch (err) {
        result = handleRequest(err);
    }

    return result;
}

export function handleRequest(model) {
    if (model.code === "ERR_NETWORK_ERROR")
        return { level: resultTitleMap.get(500), title: "Проблемы с интернетом", message: "Проверьте интернет соединение" };
    else if (model.response === undefined)
        return {
            level: resultTitleMap.get(model.status), title: resultMap.get(model.status),
            message: model.data.message, data: model.data
        };
    else
        return {
            level: resultTitleMap.get(model.response.status), title: resultMap.get(model.response.status),
            message: model.response.data.message, data: model.response.data
        };
}