import styles from "./AuthorizedHeader.module.scss";
import { Link } from "react-router-dom";
import { DictionaryImage, HomeImage, PracticeImage, } from "../../../general/images.jsx";
import AddWord from "../../modals/add-word/AddWord.jsx";
import { modalSize } from '../../../ui/modal/modalSize.js';
import Practice from "../../modals/practice/Practice.jsx";
import ModalManager from "../../../ui/modal/ModalManager.js";

const AuthorizedHeader = ({ data }) => {
    function handleAddWordChanged() {
        ModalManager.addModal(modalSize.AVERAGE, <AddWord userId={data?.userId} useAutoContent={true}/>);
    }

    function handleStartPractice() {
        ModalManager.addModal(modalSize.SMALL, <Practice/>);
    }

    return data && (
        <div className={styles["auth-header"]}>
            <div className={styles["desk-content"]}>
                <div className={styles["auth-header-content"]}>
                    <div className={styles["action-section"]}>
                        <Link className={styles["action"]} to="/">
                            <img src={HomeImage} />
                            <p>Главная</p>
                        </Link>

                        <div className={styles["action"]} onClick={handleStartPractice}>
                            <img src={PracticeImage} />
                            <p>Практика</p>
                        </div>

                        <div className={styles["rounded-button"]}>
                            <button onClick={handleAddWordChanged}>+</button>
                            <p>Добавить слово</p>
                        </div>

                        <Link className={styles["action"]} to="dict">
                            <img src={DictionaryImage} />
                            <p>Словарь</p>
                        </Link>
                    </div>
                </div>
                <div className={styles["auth-profile-section"]}>
                    <Link className={styles["profile-section"]} to="profile">
                        <img src={data?.imageUri} />
                        <p className={styles["nickname"]}>{data?.nickname}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuthorizedHeader;
