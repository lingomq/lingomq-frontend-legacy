import { v4 as uuid } from 'uuid';

class NotificationManager {
    constructor() {
        this.notificationData = [];
        this.subscribeMethods = [];
    }

    subscribe(method) {
        this.subscribeMethods.push(method);
    }

    addNotification(model) {
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

export function notificationModel(model) {
    return { id: uuid(), level: model.level, title: model.title, message: model.message}
}

export default new NotificationManager;