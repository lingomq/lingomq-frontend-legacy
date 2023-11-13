import { getWithAuth } from "../api";

export const getUserData = async (token) => {
    return await getWithAuth("api.lingomq/identity/user/info", token);  
}
