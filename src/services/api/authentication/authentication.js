import { requestAsync } from "../api";
import { confirmEmailUrl, signInUrl, signUpUrl } from "../api-urls";

export const signUpAsync = async (model) => {
    return await requestAsync("post", signUpUrl, model);  
}

export const signInAsync = async (model) => {
    return await requestAsync("post", signInUrl, model);
}

export const confirmEmailAsync = async (token) => {
    return await requestAsync("get", confirmEmailUrl+token);
} 