import "../profile.component.scss";

export const ProfileGeneral = ({data}) => {

  return (
    <div className="profile-general-section">
      <div className="profile-info">
        <img src="https://sun9-1.userapi.com/impg/dj3WYrOiE8J-68z3a6X4dR9n3AGqHC9rOXmxKA/9QqJCuMnCu8.jpg?size=736x784&quality=95&sign=02e0bd410785a3ff09f6fff13c389e41&type=album" />
        <p className="profile-info-name">{data.nickname}</p>
        <p className="profile-description">{data.description ?? "Без описания"}</p>
        <button className="default-button">ИЗМЕНИТЬ</button>
      </div>
      <div className="profile-data">
        <div className="profile-data-card">
          <p className="profile-data-card-name">Никнейм</p>
          <p className="profile-data-card-content">{data.nickname}</p>
        </div>
        <div className="profile-data-card">
          <p className="profile-data-card-name">Email</p>
          <p className="profile-data-card-content">{data.user.email}</p>
        </div>
        <div className="profile-data-card">
          <p className="profile-data-card-name">Телефон</p>
          <p className="profile-data-card-content">{data.user.phone === "" ? "Не указан" : data.user.phone}</p>
        </div>
        <div className="profile-data-card">
          <p className="profile-data-card-name">Описание</p>
          <p className="profile-data-card-content">
            {data.description ?? "Без описания"}
          </p>
        </div>
        <div className="profile-data-card">
          <p className="profile-data-card-name">Дата создания</p>
          <p className="profile-data-card-content">{new Date(data.creationalDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
