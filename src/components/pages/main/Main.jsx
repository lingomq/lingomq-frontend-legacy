import { useState } from "react";
import "./main.component.scss";

export const Main = () => {
    return (
        <div className="main-section">
           <div className="today-statistics-section">
                <div className="today-statistics-card">
                    <p className="today-statistics-card-title">
                        Добавленных слов за сегодня
                    </p>
                    <p className="today-statistics-card-content">
                        20
                    </p>
                </div>
                <div className="today-statistics-card">
                    <p className="today-statistics-card-title">
                        Дней подряд
                    </p>
                    <p className="today-statistics-card-content">
                        20
                    </p>
                </div>
                <div className="today-statistics-card">
                    <p className="today-statistics-card-title">
                        Повторений за сегодня
                    </p>
                    <p className="today-statistics-card-content">
                        20
                    </p>
                </div>
                <div className="today-statistics-card">
                    <p className="today-statistics-card-title">
                        Слово дня
                    </p>
                    <p className="today-statistics-card-content">
                        ауе
                    </p>
                </div>
           </div>
        </div>
    );
};
