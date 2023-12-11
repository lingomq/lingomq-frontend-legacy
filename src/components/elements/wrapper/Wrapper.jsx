import styles from './Wrapper.module.scss';

const Wrapper = ({title = "", subTitle = "", isLoading = true, element}) => {
    return(
        <>
            <>
                <p className={styles.appWrapperTitle}>{title}</p>
                <p className={styles.appWrapperSubmenu}>{subTitle}</p>
            </>
            {isLoading ? element : <div>Loading...</div>}
        </>
    )
}

export default Wrapper;