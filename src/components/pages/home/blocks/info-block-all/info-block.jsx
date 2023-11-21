import "./info-block.component.scss";

const InfoBlockAll = (props) => {
    return (
        <div className="info-block-section">
            {!props.isLeft? <div className="plug"></div>: "" }
            <div
                className={
                    props.isLeft
                        ? "info-block-left-section"
                        : "info-block-right-section"
                }
            >
                <div className="info-block-first-section">
                    <div className="info-block-first-section-head">
                        <p>{props.headText}</p>
                    </div>
                    <p className="info-block-first-section-content">
                        {props.contentText}
                    </p>
                    <div className="info-block-button-section">
                        {props.buttons}
                    </div>
                </div>
                <div className="info-block-second-section">
                    <img src={props.image} />
                </div>
            </div>
            {props.isLeft? <div className="plug"></div>: "" }
        </div>
    );
};

export default InfoBlockAll;
