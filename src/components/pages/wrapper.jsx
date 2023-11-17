import './wrapper.component.scss';

export const Wrapper = ({title = "LINGO.MQ", subTitle = "", element}) => {
    return(
        <div className='app-wrapper'>
            <div >
                <p className='app-wrapper-title'>{title}</p>
                <p className='app-wrapper-submenu'>{subTitle}</p>
            </div>
            {element}
        </div>
    )
}