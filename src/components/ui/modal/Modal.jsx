import { CloseImage } from "../../general/images.jsx";
import styles from "./Modal.module.scss";
import { modalSize } from "./modalSize";

const Modal = ({ id, closeModalFunction, size = modalSize.AVERAGE, content = ""  }) => {

    function modalHandler (e) {
        closeModalFunction(e);
    }

    return (
        <div key="1" className={`${styles.modal}`} >
            <div className={`${styles.modalWindow} ${styles[size]} `} key={id}>
                <div className={styles.modalWindowNavigation}>
                    <img
                        src={CloseImage}
                        data-key={id}
                        className={styles.modalWindowClose}
                        onClick={(e) => modalHandler(e)}
                    />
                </div>
                <div className={ styles.modalWindowContent }>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
