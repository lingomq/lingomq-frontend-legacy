import { useState } from "react";
import "./main.component.scss";

export const Main = () => {
    const [isDrag, setIsDrag] = useState(false);
    const dragging = (e) => {
        if (!isDrag) return;
        const tabsBox = document.querySelector(".topics-section-content");
        tabsBox.classList.add("dragging");
        tabsBox.scrollLeft -= e.movementX;
    };

    const dragStop = () => {
        setIsDrag(false);
        const tabsBox = document.querySelector(".topics-section-content");
        tabsBox.classList.remove("dragging");
    };
    return (
        <div className="main-section">
            <div className="topics-section">
                <p className="topics-section-title">ТОПИКИ</p>
                <div
                    className="topics-section-content"
                    onMouseDown={() => setIsDrag(true)}
                    onMouseMove={dragging}
                    onMouseUp={dragStop}
                >
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика1
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика2
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика3
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика4
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика5
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика6
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика7
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика8
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика9
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика10
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика11
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                    <div className="topic-section-card">
                        <div className="topic-section-card-preview">
                            <img
                                className="topic-section-card-img"
                                src="https://sun9-58.userapi.com/impg/t6vX6g_miiytpp-0XTonlpvALpU3Lh-PJONngA/fAWlnq0Om_s.jpg?size=736x1104&quality=95&sign=ca05a61d7973cd3d7886978afa7cf613&type=album"
                            />
                        </div>

                        <div className="topic-section-card-content">
                            <p className="topic-section-card-content-title">
                                Название топика12
                            </p>

                            <p className="topic-section-card-content-date">
                                11.11.2011
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
