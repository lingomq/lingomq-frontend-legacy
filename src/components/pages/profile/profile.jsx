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
                    <img src={data.imageUri}/>
                    <p>{data.nickname}</p>
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