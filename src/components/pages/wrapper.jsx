import './wrapper.component.scss';
import { Profile } from './profile/profile.jsx';

export const Wrapper = () => {
    return(
        <div className='app-wrapper'>
            <div >
                <p className='app-wrapper-title'>НАСТРОЙКИ ПРОФИЛЯ</p>
                <p className='app-wrapper-submenu'>Общие</p>
            </div>
            <Profile/>
        </div>
    )
}