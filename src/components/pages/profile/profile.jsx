import './profile.component.scss';
import { ProfileGeneral } from './sections/general.jsx';
import { useEffect, useState } from "react";
import { getUserData } from "../../../services/api/identity/identity";
import { Cookies } from "react-cookie";
import { clearAuthCookies } from '../../../services/authentication.js';

export const Profile = () => {
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

    function exit() {
        clearAuthCookies();
        window.location.reload();
    }

    return data && (
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

                    <div className='profile-navigation-content-submenu without-line' onClick={exit}>
                        <p className='danger-p'>Выход</p>
                    </div>

                </div>
            </div>
            <ProfileGeneral data={data}/>
        </div>
    );
}