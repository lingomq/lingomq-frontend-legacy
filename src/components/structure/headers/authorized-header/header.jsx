import "./header.component.scss";
import Images from "../../../common/local-images.jsx";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { getUserData } from "../../../../services/api/identity/identity";
import { Link } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
        const cookies = new Cookies();
        const token = cookies.get("access-token");
        const result = await getUserData(token);
        setData(result.data.data);
    }
    fetchUserData();
}, []);

  return data && (
    <div className="auth-header">
      <div className="desk-content">
        
        <div className="auth-header-content">
          <div className="action-section">
            <a className="action" href="">
              <img src={Images.Home} />
              <p>Главная</p>
            </a>

            <a className="action" href="">
              <img src={Images.Practice} />
              <p>Практика</p>
            </a>

            <div className="rounded-button">
              <button>+</button>
              <p>Добавить слово</p>
            </div>

            <a className="action only-pc" href="">
              <img src={Images.Rating} />
              <p>Рейтинг</p>
            </a>

            <a className="action" href="">
              <img src={Images.Dictionary} />
              <p>Словарь</p>
            </a>
          </div>
        </div>
        <div className="auth-profile-section">
          <Link className="profile-section" to="profile">
            <img src={data.imageUri} />
            <p className="nickname">{data.nickname}</p>
          </Link>
          <a className="notification-section">
            <img src={Images.Bell} />
            <div className="notification-counter"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
