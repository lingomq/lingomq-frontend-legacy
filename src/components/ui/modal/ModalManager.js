import { v4 as uuid } from 'uuid';
import { modalSize } from './modalSize';

class ModalManager {
    constructor() {
        this.modalStack = [];
        this.subscriberList = [];
    }

    subscribe(subscriber) { this.subscriberList.push(subscriber); }

    addModal(size = modalSize.AVERAGE, content) { 
        const model = {
            id: uuid(),
            size: size,
            content: content
        };
        const modals = [ ... this.modalStack];
        modals.push(model);
        this.modalStack = modals;
        this.subscriberList.forEach(element => {
            element();
        });
    }

    remove(id) { 
        this.modalStack = this.modalStack.filter((n) => id != n.id);
        this.subscriberList.forEach(element => {
            element();
        });
    }
}

export default new ModalManager;