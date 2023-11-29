import { v4 as uuid } from 'uuid';

class NotificationManager {
    constructor() {
        this.notificationData = [];
        this.subscribeMethods = [];
    }

    subscribe(method) {
        this.subscribeMethods.push(method);
    }

    addNotification(level = "error", title = "ОШИБКА", message = "НЕОБРАБОТАННАЯ ОШИБКА") {
        const model = { id: uuid(), level: level, title: title, message: message};
        const notifications = [ ... this.notificationData];
        notifications.push(model);
        this.notificationData = notifications;
        this.subscribeMethods.forEach(element => {
            element();
        });
    }

    remove(model) {
        this.notificationData.filter((n) => model.id !== n.id)
    }

}

export default new NotificationManager;