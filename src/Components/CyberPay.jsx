import React from "react";
import "./CSS/CyberPay.css";

const CyberPay = () => {
    return (
        <div className="cyberpay-box">
            <div className="cyberpay-container">
                <div className="cyberpay-header">
                    <span className="cyberpay-logo">Cyber pay</span>
                </div>
                <div className="cyberpay-balance">
                    <div className="balance-info">
                        <span className="balance-amount">0 ₽</span>
                        <span className="balance-text">Баланс</span>
                    </div>
                    <button className="add-button">Добавить</button>
                </div>
                <div className="cyberpay-options">
                    <div className="option">Покупка голосов</div>
                    <div className="option">Сервисы</div>
                </div>
                <div className="cyberpay-banner">
                    <span>Как пройти идентификацию Cyber Pay через Госуслуги?</span>
                </div>
            </div>
            <div className="cyberpay-ads">
                <img src="https://www.coronaafrica.com/sites/g/files/seuoyk1691/files/2024-06/MicrosoftTeams-image%20%28437%29%20%281%29.png"/>
            </div>
        </div>

    );
};

export default CyberPay;
