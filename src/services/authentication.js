import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";
import { get } from "./api/api";

const cookies = new Cookies();
export async function isAuthenticated() {
    const accessToken = cookies.get("access-token");
    const refreshToken = cookies.get("refresh-token");

    if (accessToken === undefined && refreshToken === undefined)
        return false;

    if (!validToken(refreshToken)) return false;

    if (accessToken === undefined){
        let tokens = await getNewToken(refreshToken);
        rewriteTokens(tokens);
    }

    return true;
}

async function getNewToken(refreshToken)
{
    const result = await get("api.lingomq/auth/refresh-token/" + refreshToken);
    if (result.data.code === 0)
        return result.data.data;
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
    cookies.set("access-token", tokens.accessToken, { path: "/", expires: date});
    cookies.set("refresh-token", tokens.refreshToken, { path: "/", expires: infDate});
}