import styles from "./AuthorizedHeader.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BellImage, DictionaryImage, HomeImage, PracticeImage } from "../../../general/images.jsx";

const AuthorizedHeader = ({data}) => {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(data), [user]);

  return (
    <div className={styles["auth-header"]}>
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
              <button>+</button>
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
