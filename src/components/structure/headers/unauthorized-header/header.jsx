import "./header.component.scss";

const Header = () => {
  return (
    <div className="unauthorized-header">
      <div className="header-component">
        <div className="logo">
          <p className="logo-main">Lingo</p>
          <p className="logo-sub">mq</p>
        </div>
        <div className="header-navigation">
          <a href="" className="header-link">
            Начать
          </a>
          <a href="" className="header-link">
            О нас
          </a>
          <a href="" className="header-link">
            Поддержка
          </a>
          <a href="" className="header-link">
            Рейтинг
          </a>
        </div>
        <div className="auth">
            <a href="" className="auth-link">Вход</a>
            <p>/</p>
            <a href="" className="auth-link">Регистрация</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
