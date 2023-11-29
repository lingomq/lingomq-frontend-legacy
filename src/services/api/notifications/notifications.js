import { getAccessToken } from "../../authentication";
import { requestAsync } from "../api";

export const getNotifications = async () => {
    const token = getAccessToken();
    const result = await requestAsync("get", "api.lingomq/notifications/user", {}, token);
    return result;
}