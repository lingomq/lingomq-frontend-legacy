import { useState } from "react";
import Modal from "./Modal.jsx";
import ModalManager from "./ModalManager.js";
import { useEffect } from "react";

const ModalProvider = () => {
    const [modals, setModals] = useState(ModalManager.modalStack);

    function onArrayChange() {
        const updateNotifications = [...ModalManager.modalStack];
        setModals(updateNotifications);
    }

    function remove(e) {
        const id = e.target.getAttribute("data-key");
        ModalManager.remove(id);
    }

    ModalManager.subscribe(onArrayChange);

    useEffect(() => {
        setModals(ModalManager.modalStack);
    }, []);

    return (
        <>
            {modals.map((item) => {
                return <Modal 
                    key={item.id}
                    id={item.id}
                    closeModalFunction={remove}
                    size={item.size}
                    content={item.content}
                />
            })}
        </>
    )
};

export default ModalProvider;
