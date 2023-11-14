import { get, post } from "../api";

export const signUp = async (model) => {
    return await post("api.lingomq/auth/sign-up", model);  
}

export const signIn = async (model) => {
    return await post("api.lingomq/auth/sign-in", model);
}

export const confirmEmail = async (token) => {
    return await get("api.lingomq/confirm/"+token);
} 