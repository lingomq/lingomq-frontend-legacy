import { requestAsync } from "../api";
import { getNotificationsUrl } from "../api-urls";

export const getNotificationsAsync = async () => {
    const result = await requestAsync("get", getNotificationsUrl, {});
    return result;
}