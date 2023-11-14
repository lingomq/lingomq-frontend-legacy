import { requestAsync } from "../api";

export const signUp = async (model) => {
    return await requestAsync("post", "api.lingomq/auth/sign-up", model);  
}

export const signIn = async (model) => {
    return await requestAsync("post", "api.lingomq/auth/sign-in", model);
}

export const confirmEmail = async (token) => {
    return await requestAsync("get", "api.lingomq/confirm/"+token);
} 