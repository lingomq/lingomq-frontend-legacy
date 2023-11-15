import './wrapper.component.scss';
import { Profile } from './profile/profile.jsx';
import { useState } from 'react';

export const Wrapper = () => {
    const [subTitle, setSubTitle] = useState("");

    function changeSubTitle(title) {
        setSubTitle(title);
    }

    return(
        <div className='app-wrapper'>
            <div >
                <p className='app-wrapper-title'>НАСТРОЙКИ ПРОФИЛЯ</p>
                <p className='app-wrapper-submenu'>{subTitle}</p>
            </div>
            <Profile changeSubTitleMethod={changeSubTitle}/>
        </div>
    )
}