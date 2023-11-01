import "./home.component.scss";
import Images from "../../common/local-images.jsx";
import Footer from "../../structure/footers/default-footer/footer.jsx";

const Home = () => {
    return (
        <div className="content">
            <div className="content-main-section">
                <h1>УЧИ СЛОВА ВМЕСТЕ С</h1>
                <div className="logo-big-section">
                    <img src={Images.Spread} />
                    <div className="logo">
                        <p className="logo-main">Lingo</p>
                        <p className="logo-sub">mq</p>
                    </div>
                </div>
                <button className="default-button">
                    ПОДРОБНЕЕ
                </button>
            </div>
        </div>
    );
};

export default Home;
