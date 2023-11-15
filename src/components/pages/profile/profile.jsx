import './profile.component.scss';
import { ProfileGeneral } from './sections/general.jsx';
import { useState, useEffect } from "react";
import { clearAuthCookies } from '../../../services/authentication.js';
import { getUserData } from "../../../services/api/identity/identity";
import { Notifications } from './sections/notifications.jsx';
import { Statistics } from './sections/statistics.jsx';

export const Profile = ({ changeSubTitleMethod = undefined }) => {
    const sections = new Map();
    sections.set("Общие", <ProfileGeneral />);
    sections.set("Уведомления", <Notifications/>);
    sections.set("Статистика", <Statistics/>)

    const [data, setData] = useState();
    const [currentSection, setCurrentSection] = useState();

    useEffect(() => {
        const fetchUserData = async () => {
            const result = await getUserData();
            setData(result.data.data);
        }
        fetchUserData();
        setCurrentSection(sections.get("Общие"));
        changeSubTitleMethod("Общие");
    }, []);

    function changeSection(sectionName) {
        setCurrentSection(sections.get(sectionName));
        changeSubTitleMethod(sectionName);
    }

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
                    <div className='profile-navigation-content-submenu' onClick={() => changeSection("Общие")}>
                        <p>Общие</p>
                    </div>

                    <div className='profile-navigation-content-submenu' onClick={() => changeSection("Уведомления")}>
                        <p>Уведомления</p>
                    </div>

                    <div className='profile-navigation-content-submenu' onClick={() => changeSection("Статистика")}>
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
            {currentSection}
        </div>
    );
}