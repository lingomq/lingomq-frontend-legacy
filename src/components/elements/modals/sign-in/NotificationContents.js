export const notificationContents = {
    200: {
        0: { level: "success", title: "Вход в аккаунт", message: "Вы успешно авторизованы!" }
    },
    400: {
        0: { level: "warning", title: "Вход в аккаунт", message: "Отправлены недопустимые данные"},
        4: { level: "error", title: "Вход в аккаунт", message: "Неверные данные"}
    },
    500: {
        0: { level: "error", title: "Проблемы с сервером", message: "Ошибки на стороне сервера. Возможно, производятся технические работы" }
    }
}