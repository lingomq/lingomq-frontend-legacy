import "./home.component.scss";
import Images from "../../common/local-images.jsx";
import InfoBlockAll from "../../structure/blocks/info-block-all/info-block.jsx";
import Notification from "../../structure/notify/notification.jsx";

const Home = () => {
    return (
        <div className="content">
            <Notification/>
            <div className="content-main-section">
                <h1>УЧИ СЛОВА ВМЕСТЕ С</h1>
                <div className="logo-big-section">
                    <img src={Images.Spread} />
                    <div className="logo">
                        <p className="logo-main">Lingo</p>
                        <p className="logo-sub">mq</p>
                    </div>
                </div>
                <a className="default-button" href="#secondary-section">ПОДРОБНЕЕ</a>
            </div>
            <div className="content-secondary-section">
                <h1 id="secondary-section"></h1>
                <p className="secondary-section-route-p">НАЧАЛО / О НАС</p>
                <div className="secondary-section">
                    <InfoBlockAll
                        isLeft={true}
                        headText={"ПРИСОЕДИНЯЙСЯ К НАМ"}
                        contentText={
                            "Наше приложение позволяет отслеживать свой прогресс, попадать в топы обучающихся, а также читать тематические статьи"
                        }
                        buttons={
                            <div className="info-block-buttons">
                                <button className="default-button">
                                    GOOGLE PLAY
                                </button>
                                <button className="default-button">САЙТ</button>
                            </div>
                        }
                        image={Images.Collaboration}
                    />
                    <InfoBlockAll
                        isLeft={false}
                        headText={"ОТСЛЕЖИВАЙ СВОЙ ПРОГРЕСС"}
                        contentText={
                            "Добавляя каждое новое слово, повторяя добавленные слова, проводя время в приложении ты сможешь отследить свой прогресс, который будет мотивировать тебя изучать языки в удовольствие"
                        }
                        image={Images.Analytics}
                    />
                    <InfoBlockAll
                        isLeft={true}
                        headText={"СОРЕВНУЙСЯ С ЛЮДЬМИ"}
                        contentText={
                            "Вы можете посмотреть успехи людей, или стать обьектом наблюдения на доске рекордсменов"
                        }
                        image={Images.Success}
                    />
                    <InfoBlockAll 
                        isLeft={false}
                        headText={"ЧИТАЙ ТЕМАТИЧЕСКИЕ СТАТЬИ"}
                        contentText={
                            "Время от времени наша команда будет выкладывать тематические статьи для разных языков, дневники разработчика или общие статьи"
                        }
                        image={Images.Application}
                    />
                </div>
            </div>
            <div className="content-bye-section">
                <h1 id="start">НАЧИНАЙ УЧИТЬ ЯЗЫКИ <br/> ВМЕСТЕ С <b>LINGO.MQ</b></h1>
                <button className="default-button">
                    НАЧАТЬ
                </button>
            </div>
        </div>
    );
};

export default Home;
