import styles from './Profile.module.scss';
import { ProfileGeneral } from './sections/general/General.jsx';
import { useState, useEffect } from "react";
import { clearAuthCookies } from '../../../services/authentication.js';
import { Notifications } from './sections/notifications/Notifications.jsx';
import { Statistics } from './sections/statistics/Statistics.jsx';
import { Security } from './sections/security/Security.jsx';

export const Profile = ({ data, changeSubTitleMethod = undefined }) => {

    const [user, setUser] = useState(null);
    const [currentSection, setCurrentSection] = useState();

    useEffect(() => {
        setUser(data);
        setCurrentSection(<ProfileGeneral data={data}/>);
        changeSubTitleMethod("Общие");
    }, [setUser]);

    const sections = new Map();
    sections.set("Общие", <ProfileGeneral data={user}/>);
    sections.set("Уведомления", <Notifications/>);
    sections.set("Статистика", <Statistics/>)
    sections.set("Безопасность", <Security data={user}/>);

    function changeSection(sectionName) {
        setCurrentSection(sections.get(sectionName));
        changeSubTitleMethod(sectionName);
    }

    function exit() {
        clearAuthCookies();
        window.location.href = '..';
    }


    return (
        <div className={styles.profileSection}>
            <div className={styles.profileNavigation}>
                <div className={styles.profileNavigationHeader}>
                    <img className={styles.profileNavigationHeaderImage} src={user?.imageUri}/>
                    <p className={styles.profileNavigationHeaderName}>{user?.nickname}</p>
                </div>
                <div className='profile-navigation-content'>
                    <div className={styles.profileNavigationContentSubmenu} onClick={() => changeSection("Общие")}>
                        <p>Общие</p>
                    </div>

                    <div className={styles.profileNavigationContentSubmenu} onClick={() => changeSection("Уведомления")}>
                        <p>Уведомления</p>
                    </div>

                    <div className={styles.profileNavigationContentSubmenu} onClick={() => changeSection("Статистика")}>
                        <p>Статистика</p>
                    </div>

                    <div className={styles.profileNavigationContentSubmenu} onClick={() => changeSection("Безопасность")}>
                        <p>Безопасность</p>
                    </div>

                    <div className={`${styles.profileNavigationContentSubmenu} ${styles.withoutLine} ${styles.danger}`} onClick={exit}>
                        <p>Выход</p>
                    </div>

                </div>
            </div>
            {currentSection}
        </div>
    );
}