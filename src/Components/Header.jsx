import React, { useState } from 'react';
import './CSS/Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='header-container'>
            <header className="header">
                <div className="header-left">
                    <div className='logo-container'>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/695px-Cyberpunk_2077_logo.svg.png"
                            alt="VK Logo"
                            className="vk_logo"
                        />
                    </div>
                    <input type="search" placeholder="Поиск" className="search" />
                    <div className='h_a_container'>
                        <a href="#" className="h_a">
                            <img
                                src="https://img.icons8.com/?size=100&id=bMHRrKfRXHrM&format=png&color=000000"
                                className="h_a_i"
                                alt="Notifications"
                            />
                        </a>
                        <a href="#" className="h_a">
                            <img
                                src="https://img.icons8.com/?size=100&id=1ADVgAhjMw6q&format=png&color=000000"
                                className="h_a_i"
                                alt="Music"
                            />
                        </a>
                    </div>
                    <div className="header-avatar">
                        <div className="dropdown">
                            <div className="avatar" onClick={toggleDropdown}>
                                <img
                                    src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg"
                                    alt="Avatar"
                                    className="avatar-img"
                                />
                                <img
                                    src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                                    className={`arrow ${isDropdownOpen ? 'open' : ''}`}
                                    alt="Expand"
                                />
                            </div>
                            {isDropdownOpen && (
                                <div id="dropdown-content" className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                    <div className='dropdown-content-container'>
                                        <div className="profile-info">
                                            <div className="profile-avatar-container">
                                                <img
                                                    src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg"
                                                    alt="Avatar"
                                                    className="profile-avatar-img"
                                                />
                                            </div>
                                            <div className="profile-details">
                                                <span className="profile-name">Дмитрий Скочко</span>
                                                <span className="profile-phone">+7 ··· ··· ·· 08</span>
                                            </div>
                                            <div className="profile-button">
                                                <button>Управление аккаунтом<img src="https://i.ibb.co/qsdJsHB/image.png" alt="VK ID" /></button>
                                            </div>
                                        </div>
                                        <a href="" className="dropdown-content-img">
                                            <img src="https://img.icons8.com/?size=100&id=Dd6LkUOUHhWn&format=png&color=000000" alt="Balance" /> Баланс голосов
                                        </a>
                                        <a href="" className="dropdown-content-img">
                                            <img src="https://img.icons8.com/?size=100&id=pRKwjn2eqvCE&format=png&color=000000" alt="QR-code" /> Вход по QR-коду
                                        </a>
                                        <a href="" className="dropdown-content-img">
                                            <img src="https://img.icons8.com/?size=100&id=Us4SSj0iIU2J&format=png&color=000000" alt="Settings" /> Настройки
                                        </a>
                                        <a href="" className="dropdown-content-img">
                                            <img src="https://img.icons8.com/?size=100&id=f700z8ublkZF&format=png&color=000000" alt="Theme" /> Тема: Системная
                                        </a>
                                        <a href="" className="dropdown-content-img">
                                            <img src="https://img.icons8.com/?size=100&id=bLTaiXRld183&format=png&color=000000" alt="Help" /> Помощь
                                        </a>
                                        <a href="" className="dropdown-content-img">
                                            <img src="https://img.icons8.com/?size=100&id=vRro1MfimBYU&format=png&color=000000" alt="Exit" /> Выйти
                                        </a>
                                        <hr className="divider-dropbox"></hr>
                                        <a href="#" className="add-account">
                                            <div className='add-account-image-container'>
                                                <img src="https://img.icons8.com/?size=100&id=95779&format=png&color=000000" alt="Add Account" />
                                            </div>
                                            Добавить аккаунт</a>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;