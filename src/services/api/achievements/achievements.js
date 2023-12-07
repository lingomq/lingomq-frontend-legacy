import { requestAsync } from "../api"
import { getUserAchievementsUrl } from "../api-urls"

export const getUserAchievementsAsync = async () => {
    return await requestAsync("get", getUserAchievementsUrl);
}