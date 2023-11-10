import "./header.component.scss";
import Images from "../../../common/local-images.jsx";

const Header = () => {
  return (
    <div className="auth-header">
      <div className="desk-content">
        <div className="auth-profile-section">
          <a className="profile-section" href="">
            <img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
            <p className="nickname">zmqpkyf</p>
          </a>
          <a className="notification-section">
            <img src={Images.Bell} />
            <div className="notification-counter"></div>
          </a>
        </div>
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

            <a className="action" href="">
              <img src={Images.Rating} />
              <p>Рейтинг</p>
            </a>
            <div className="rounded-button">
              <button>+</button>
              <p>Добавить слово</p>
            </div>

            <a className="action" href="">
              <img src={Images.Dictionary} />
              <p>Словарь</p>
            </a>
            <a className="action" href="">
              <img src={Images.Statistics} />
              <p>Статистика</p>
            </a>
            <a className="action" href="">
              <img src={Images.Settings} />
              <p>Настройка</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-content">
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

            <a className="action" href="">
              <img src={Images.Dictionary} />
              <p>Сервисы</p>
            </a>
            <a className="profile-section" href="">
              <img src="https://sun9-30.userapi.com/impg/_U9i-fvgkQBGgL3W0AU9Cw4JmXz2mS3SPepkSg/L0sbl1Uc0pc.jpg?size=720x720&quality=95&sign=8b9bc5f2f83977c44275f1797ea4540a&type=album" />
              <p>Профиль</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
