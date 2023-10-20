import "./home.component.scss";
import Images from "../../common/local-images.jsx";

const Home = () => {
    return (
        <div className="content">
            <div className="content-main">
                <img src={Images.MainPagePicture} />
                <div className="content-main-right">
                    <h1 className="main-h2-alternative">Выучи новый язык</h1>
                    <h2 className="main-h2-cursive">своими силами</h2>
                    <p>
                        Наше приложение - интерактивный словарь слов, с
                        возможностью попрактиковаться, посмотреть статистику,
                        похвастаться результатами
                    </p>
                    <button className="default-button">Начать</button>
                </div>
            </div>
            <div className="content-short-about-us">
                <h1>Ну и что нужно делать?</h1>
                <div className="content-short-about-us-main">
                    <div className="content-short-about-us-main-left">
                        <p className="p-short-about-us-head">
                            Для начала, достаточно скачать приложение, и
                            добавить пару-тройку слов, а дальше все просто:
                        </p>
                        <ul className="ul-short-about-us">
                            <li className="li-short-about-us">
                                Каждый день добавляй новые слова
                            </li>
                            <li className="li-short-about-us">
                                Повторяй эти слова в течение дня
                            </li>
                            <li className="li-short-about-us">
                                Выработай привычку учить что-то новое и
                                продолжай развиваться
                            </li>
                        </ul>
                    </div>
                    <div className="content-short-about-us-main-right">
                        <img src={Images.DiaryBigPicture}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
