import styles from "./AuthorizedHeader.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DictionaryImage, HomeImage, PracticeImage, } from "../../../general/images.jsx";
import Modal from "../../../ui/modal/Modal.jsx";
import AddWord from "../../modals/add-word/AddWord.jsx";
import { modalSize } from '../../../ui/modal/modalSize.js';

const AuthorizedHeader = ({ data }) => {
    const [user, setUser] = useState(null);
    const [addWord, setAddWord] = useState(false);

    function handleAddWordChanged() {
        setAddWord(!addWord);
    }

    useEffect(() => setUser(data), [setUser]);
    return data && (
        <div className={styles["auth-header"]}>
            <Modal
                isShow={addWord}
                showModalFunction={handleAddWordChanged}
                size={modalSize.AVERAGE}
                content={<AddWord userId={data?.userId}
                useAutoContent={true}/>}
            />
            <div className={styles["desk-content"]}>
                <div className={styles["auth-header-content"]}>
                    <div className={styles["action-section"]}>
                        <Link className={styles["action"]} to="/">
                            <img src={HomeImage} />
                            <p>Главная</p>
                        </Link>

                        <a className={styles["action"]} href="">
                            <img src={PracticeImage} />
                            <p>Практика</p>
                        </a>

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
