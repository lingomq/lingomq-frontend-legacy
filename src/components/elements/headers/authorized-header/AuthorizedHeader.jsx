import "./AuthorizedHeader.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BellImage, DictionaryImage, HomeImage, PracticeImage } from "../../../general/Images.jsx";

const AuthorizedHeader = ({data}) => {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(data), [user]);

  return (
    <div className="auth-header">
      <div className="desk-content">
        
        <div className="auth-header-content">
          <div className="action-section">
            <Link className="action" to="/">
              <img src={HomeImage} />
              <p>Главная</p>
            </Link>

            <a className="action" href="">
              <img src={PracticeImage} />
              <p>Практика</p>
            </a>

            <div className="rounded-button">
              <button>+</button>
              <p>Добавить слово</p>
            </div>

            <Link className="action only-pc" to="notifications">
              <img src={BellImage} />
              <p>Уведомления</p>
            </Link>

            <Link className="action" to="dict">
              <img src={DictionaryImage} />
              <p>Словарь</p>
            </Link>
          </div>
        </div>
        <div className="auth-profile-section">
          <Link className="profile-section" to="profile">
            <img src={data?.imageUri} />
            <p className="nickname">{data?.nickname}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedHeader;
