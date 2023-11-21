import { buttonTypes } from '../buttonTypes';
import styles from './RoundedButton.module.scss';

const RoundedButton = ({text = "NONE", buttonType = buttonTypes.PRIMARY, onClick = undefined, type = "button"}) => {

    return (
        <button className={`${styles.roundedButton} ${styles[buttonType]}`} onClick={onClick} type={type}>
            {text}
        </button>
    )
};

export default RoundedButton;