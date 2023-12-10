import { addLastHour, getUserId, hasLastHour } from "../../authentication";
import { requestAsync } from "../api";
import { addHourUrl, addVisitUrl, getUserDataByIdUrl, getUserDataUrl, removeAccountUrl, updatePasswordUrl, updateUserDataUrl, updateUserInfoUrl } from "../api-urls";

export const getUserDataAsync = async () => {
    const result = await requestAsync("get", getUserDataUrl, {});
    await addHourAsync();
    await addVisitAsync();
    return result; 
}

export const getUserDataByIdAsync = async (id) => {
    const result = await requestAsync("get", getUserDataByIdUrl + "/"+id, {});
    await addHourAsync();
    await addVisitAsync();
    return result; 
}

export const addHourAsync = async () => {
    const doUpdate = hasLastHour();
    if (doUpdate === true)
    {
        addLastHour();
        await requestAsync("put", addHourUrl, {});
    }

}

export const addVisitAsync = async () => {
    const result = await requestAsync("put", addVisitUrl, {});
    return result;
}

export const updateUserInfoAsync = async (model) => {
    const result = await requestAsync("put", updateUserInfoUrl, model);
    return result;
}

export const updateUserDataAsync = async (email, phone) => {
    const userId = await getUserId();
    const requestModel = {
        id: userId,
        email: email,   
        phone: phone
    };
    const result = await requestAsync("put", updateUserDataUrl, requestModel);
    return result;
}

export const updatePasswordAsync = async (password) => {
    const requestModel = {
        password: password
    };
    const result = await requestAsync("put", updatePasswordUrl, requestModel);
    return result;
}

export const removeAccountAsync = async () => {
    const result = await requestAsync("delete", removeAccountUrl, {});
    return result;
}