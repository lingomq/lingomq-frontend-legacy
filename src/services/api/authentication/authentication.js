import { apiUrl, handleRequest } from "../api";
import axios from 'axios';

export const signUp = async (model) => {
    try {
        const res = await axios.post(apiUrl + "api.lingomq/auth/sign-up",
            {
                nickname: model.nickname,
                email: model.email,
                phone: "",
                password: model.password,
            },
            {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "https://192.168.0.101:9000",
                    "Access-Control-Allow-Credentials": true,
                },
            });
        return handleRequest(res);
    }
    catch (err) {
        return handleRequest(err);
    }
}