const GATEWAY_DOMAIN = "http://192.168.0.101:9998/" // "https://192.168.0.105:9999/"
const GATEWAY_PATH = "api.lingomq/";
const GATEWAY_URL = GATEWAY_DOMAIN + GATEWAY_PATH;

// Authentication Service Urls
export const signInUrl = GATEWAY_URL + "auth/sign-in";
export const signUpUrl = GATEWAY_URL + "auth/sign-up";
export const refreshTokenUrl = GATEWAY_URL + "auth/refresh-token/";
export const confirmEmailUrl = GATEWAY_URL + "confirm/";

// Identity Service Urls
export const getUserDataUrl = GATEWAY_URL + "identity/user/info";
export const getUserDataByIdUrl = GATEWAY_URL + "identity/user/info/user-id";
export const updateUserInfoUrl = GATEWAY_URL + "identity/user/info";
export const updateUserDataUrl = GATEWAY_URL + "identity/user";
export const addHourUrl = GATEWAY_URL + "identity/user/statistics/hour/add";
export const addVisitUrl = GATEWAY_URL + "identity/user/statistics/visit";
export const updatePasswordUrl = GATEWAY_URL + "identity/user/credentials";
export const removeAccountUrl = GATEWAY_URL + "identity/user";

// Notification Service Urls
export const getNotificationsUrl = GATEWAY_URL + "notifications/user";

// Word Service Urls 
export const getLanguagesUrl = GATEWAY_URL + "words/languages/all/";
export const getUserStatisticsUrl = GATEWAY_URL + "identity/user/statistics/id/";
export const getWordsCountPerDayUrl = GATEWAY_URL + "words/user-words/word/count/";
export const getFamousWordUrl = GATEWAY_URL + "words/user-words/famous";
export const getWordTypesUrl = GATEWAY_URL + "words/word-types/all/";
export const addWordUrl = GATEWAY_URL + "words/user-words/";
export const getUserWordsUrl = GATEWAY_URL + "words/user-words/user";
export const removeUserWordUrl = GATEWAY_URL + "words/user-words/";
export const addRepeatToWordUrl = GATEWAY_URL + "words/user-words/add/repeats/";
export const addWordToStatisticsUrl = GATEWAY_URL + "identity/user/statistics/word/add";
export const getRecordsByRepeatsUrl = GATEWAY_URL + "words/user-words/records/repeats/";
export const getRecordsByWordsCountUrl = GATEWAY_URL + "words/user-words/records/word-count/";

// Achievements Service Urls
export const getUserAchievementsUrl = GATEWAY_URL + "achievements/user";

// Topics Service Urls
export const getAllTopicsUrl = GATEWAY_URL + "topics/all";
export const getTopicByIdUrl = GATEWAY_URL + "topics/topic-id"
