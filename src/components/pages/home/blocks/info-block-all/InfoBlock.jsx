import styles from "./InfoBlock.module.scss";

const InfoBlockAll = (props) => {
    return (
        <div className={styles["info-block-section"]}>
            {!props.isLeft? <div className={styles["plug"]}></div>: "" }
            <div
                className={
                    props.isLeft
                        ? styles["info-block-left-section"]
                        : styles["info-block-right-section"]
                }
            >
                <div className={styles["info-block-first-section"]}>
                    <div className={styles["info-block-first-section-head"]}>
                        <p>{props.headText}</p>
                    </div>
                    <p className={styles["info-block-first-section-content"]}>
                        {props.contentText}
                    </p>
                    <div className={styles["info-block-button-section"]}>
                        {props.buttons}
                    </div>
                </div>
                <div className={styles["info-block-second-section"]}>
                    <img src={props.image} />
                </div>
            </div>
            {props.isLeft? <div className={styles["plug"]}></div>: "" }
        </div>
    );
};

export default InfoBlockAll;
