import styles from "./Home.module.scss";
import React, { useState } from "react";
import { AnalyticsImageImage, ApplicationImage, CollaborationImage, SpreadImage, SuccessImage } from "../../general/images.jsx";
import InfoBlockAll from "./blocks/info-block-all/InfoBlock.jsx";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import Modal from "../../ui/modal/Modal.jsx";
import SignModal from "../../elements/modals/SignModal.jsx";
import { modalSize } from "../../ui/modal/modalSize.js";

const Home = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleShowModal = () => {
        setIsShowModal(!isShowModal);
    };
    return (
        <div className={styles.homeContent}>
            <Modal
                isShow={isShowModal}
                showModalFunction={handleShowModal}
                size={modalSize.AVERAGE}
                content={<SignModal />}
            />
            <div className={styles.contentMainSection}>
                <h1>УЧИ СЛОВА ВМЕСТЕ С</h1>
                <div className={styles.logoBigSection}>
                    <img src={SpreadImage} />
                    <div className={styles.logo}>
                        <p className={styles.logoMain}>Lingo</p>
                        <p className={styles.logoSub}>mq</p>
                    </div>
                </div>
                <RoundedButton text=" ПОДРОБНЕЕ" onClick={() => window.location.href = '#secondary-section'}/>
            </div>
            <div>
                <h1 id="secondary-section"></h1>
                <p className={styles.secondarySectionRouteP}>НАЧАЛО / О НАС</p>
                <div>
                    <InfoBlockAll
                        isLeft={true}
                        headText={"ПРИСОЕДИНЯЙСЯ К НАМ"}
                        contentText={
                            "Наше приложение позволяет отслеживать свой прогресс, попадать в топы обучающихся, а также читать тематические статьи"
                        }
                        buttons={
                            <div className="info-block-buttons">
                                <RoundedButton className="default-button" text='GOOGLE PLAY'/>
                                <RoundedButton className="default-button" text='САЙТ'/>
                            </div>
                        }
                        image={CollaborationImage}
                    />
                    <InfoBlockAll
                        isLeft={false}
                        headText={"ОТСЛЕЖИВАЙ СВОЙ ПРОГРЕСС"}
                        contentText={
                            "Добавляя каждое новое слово, повторяя добавленные слова, проводя время в приложении ты сможешь отследить свой прогресс, который будет мотивировать тебя изучать языки в удовольствие"
                        }
                        image={AnalyticsImageImage}
                    />
                    <InfoBlockAll
                        isLeft={true}
                        headText={"СОРЕВНУЙСЯ С ЛЮДЬМИ"}
                        contentText={
                            "Вы можете посмотреть успехи людей, или стать обьектом наблюдения на доске рекордсменов"
                        }
                        image={SuccessImage}
                    />
                    <InfoBlockAll
                        isLeft={false}
                        headText={"ЧИТАЙ ТЕМАТИЧЕСКИЕ СТАТЬИ"}
                        contentText={
                            "Время от времени наша команда будет выкладывать тематические статьи для разных языков, дневники разработчика или общие статьи"
                        }
                        image={ApplicationImage}
                    />
                </div>
            </div>
            <div className={styles.contentByeSection}>
                <h1 id="start">
                    НАЧИНАЙ УЧИТЬ ЯЗЫКИ <br /> ВМЕСТЕ С <b>LINGO.MQ</b>
                </h1>
                <RoundedButton text="НАЧАТЬ" onClick={handleShowModal}/>
            </div>
        </div>
    );
};

export default Home;
