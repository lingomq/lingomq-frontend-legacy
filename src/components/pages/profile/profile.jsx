import './profile.component.scss';

export const Profile = () => {

    return(
        <div className='wrapper-profile-section'>
            <div className='profile-navigation'>
                <div className='profile-navigation-header'>
                    <img src="https://sun9-1.userapi.com/impg/dj3WYrOiE8J-68z3a6X4dR9n3AGqHC9rOXmxKA/9QqJCuMnCu8.jpg?size=736x784&quality=95&sign=02e0bd410785a3ff09f6fff13c389e41&type=album"/>
                    <p>zmqpkyf</p>
                </div>
                <div className='profile-navigation-content'>
                    <div className='profile-navigation-content-submenu'>
                        <p>Общие</p>
                    </div>

                    <div className='profile-navigation-content-submenu'>
                        <p>Уведомления</p>
                    </div>

                    <div className='profile-navigation-content-submenu'>
                        <p>Статистика</p>
                    </div>

                    <div className='profile-navigation-content-submenu'>
                        <p>Безопасность</p>
                    </div>

                    <div className='profile-navigation-content-submenu without-line'>
                        <p className='danger-p'>Выход</p>
                    </div>

                </div>
            </div>
            <div className='profile-general-section'>
                <div className='profile-info'>
                    <img src='https://sun9-1.userapi.com/impg/dj3WYrOiE8J-68z3a6X4dR9n3AGqHC9rOXmxKA/9QqJCuMnCu8.jpg?size=736x784&quality=95&sign=02e0bd410785a3ff09f6fff13c389e41&type=album'/>
                    <p className='profile-info-name'>zmqpkyf</p>
                    <p className='profile-description'>Описание аофывждалофывждалфы</p>
                    <button className='default-button'>ИЗМЕНИТЬ</button>
                </div>
                <div className='profile-data'>
                    <div className='profile-data-card'>
                        <p className='profile-data-card-name'>Никнейм</p>
                        <p className='profile-data-card-content'>zmqpkyf</p>
                    </div>
                    <div className='profile-data-card'>
                        <p className='profile-data-card-name'>Email</p>
                        <p className='profile-data-card-content'>zmqpkyf@yandex.ru</p>
                    </div>
                    <div className='profile-data-card'>
                        <p className='profile-data-card-name'>Телефон</p>
                        <p className='profile-data-card-content'>не указан</p>
                    </div>
                    <div className='profile-data-card'>
                        <p className='profile-data-card-name'>Описание</p>
                        <p className='profile-data-card-content'>Описание аофывждалофывждалфы</p>
                    </div>
                    <div className='profile-data-card'>
                        <p className='profile-data-card-name'>Дата создания</p>
                        <p className='profile-data-card-content'>11:11:11</p>
                    </div>
                </div>
            </div>
        </div>
    );
}