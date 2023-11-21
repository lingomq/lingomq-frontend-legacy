import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";
import { requestAsync } from "./api/api";

const cookies = new Cookies();
export async function isAuthenticated() {
    const accessToken = cookies.get("access-token");
    const refreshToken = cookies.get("refresh-token");

    if (accessToken === undefined && refreshToken === undefined)
        return false;

    if (!validToken(refreshToken)) return false;

    if (accessToken === undefined) {
        let tokens = await getNewToken(refreshToken);
        rewriteTokens(tokens);
    }

    return true;
}

export async function refreshTokens(refreshToken) {
    const newTokens = await getNewToken(refreshToken);
    rewriteTokens(newTokens);
}

async function getNewToken(refreshToken) {
    const result = await requestAsync("get", "api.lingomq/auth/refresh-token/" + refreshToken);
    if (result.data.code === 0)
        return result.data.data;
}

export const writeTokens = (tokens) => {
    let date = new Date(tokens.accessExpiredAt);
    let infDate = new Date(2024, 0, 1);
    cookies.set("access-token", tokens.accessToken, { path: "/", expires: date });
    cookies.set("refresh-token", tokens.refreshToken, { path: "/", expires: infDate });
}

function validToken(token) {
    const decodedToken = jwtDecode(token);
    const date = new Date();
    if (decodedToken.exp * 1000 < date.getTime())
        return false;

    return true;
}

function rewriteTokens(tokens) {
    let date = new Date(tokens.accessExpiredAt);
    let infDate = new Date(2024, 0, 1);
    cookies.set("access-token", tokens.accessToken, { path: "/", expires: date });
    cookies.set("refresh-token", tokens.refreshToken, { path: "/", expires: infDate });
}

export function clearAuthCookies() {
    cookies.remove("access-token");
    cookies.remove("refresh-token");
}

export function getUserId() {
    const accessToken = cookies.get("access-token");
    const decodedToken = jwtDecode(accessToken);
    return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
}

export function getAccessToken() {
    return cookies.get("access-token");
}

export function getRefreshToken() {
    return cookies.get("refresh-token");
}