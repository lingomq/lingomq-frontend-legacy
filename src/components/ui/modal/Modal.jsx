import { CloseImage } from "../../general/images.jsx";
import styles from "./Modal.module.scss";
import { modalSize } from "./modalSize";

const Modal = ({ isShow, showModalFunction, size = modalSize.AVERAGE, content = "" }) => {

    function modalHandler () {
        showModalFunction();
    }

    return (
        <div className={`${styles.modal} ${isShow ? "" : styles["closed"]}`}>
            <div className={`${styles.modalWindow} ${styles[size]} `}>
                <div className={styles.modalWindowNavigation}>
                    <img
                        src={CloseImage}
                        className={styles.modalWindowClose}
                        onClick={modalHandler}
                    />
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
