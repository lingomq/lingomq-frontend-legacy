const resultMap = new Map();
resultMap.set(200, "Успешно");
resultMap.set(400, "Ошибка");
resultMap.set(500, "Ошибка сервера");

const resultTitleMap = new Map();
resultTitleMap.set(200, "success");
resultTitleMap.set(400, "warning");
resultTitleMap.set(500, "error");

export const apiUrl = "https://192.168.0.105/";

export function handleRequest(model) {
    if (model.response === undefined)  
        return { level: resultTitleMap.get(500), title: "Проблемы с интернетом", message: "Проверьте интернет соединение" };
    else 
        return { level: resultTitleMap.get(model.response.status), title: resultMap.get(model.response.status),
            message: model.response.data.message };
}