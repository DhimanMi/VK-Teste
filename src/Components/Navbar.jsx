import React, { Component } from 'react';
import './CSS/Navbar.css';

class Navbar extends Component {
    render() {
        return (
                <nav className="sidebar">
                    <ul>
                        <li><a href="/"><img src="https://img.icons8.com/?size=100&id=9Bc1FCW4xCiB&format=png&color=000000" alt="Моя страница"/> Моя страница</a></li>
                        <li><a href="/news"><img src="https://img.icons8.com/?size=100&id=xyCg6hrUXuuS&format=png&color=000000" alt="Новости"/> Новости</a></li>
                        <li><a href="/messenger"><img src="https://img.icons8.com/?size=100&id=2qOUgBaYysTt&format=png&color=000000" alt="Мессенджер"/> Мессенджер</a></li>
                        <li><a href="calls.html"><img src="https://img.icons8.com/?size=100&id=OtGcJScJadSi&format=png&color=000000" alt="Звонки"/> Звонки</a></li>
                        <li><a href="friends.html"><img src="https://img.icons8.com/?size=100&id=HFxXq0HDJEgO&format=png&color=000000" alt="Друзья"/> Друзья</a></li>
                        <li><a href="groups.html"><img src="https://img.icons8.com/?size=100&id=tfxlww0AWZMH&format=png&color=000000" alt="Сообщества"/> Сообщества</a></li>
                        <li><a href="photos.html"><img src="https://img.icons8.com/?size=100&id=unKFYSWBr4FC&format=png&color=000000" alt="Фотографии"/> Фотографии</a></li>
                        <li><a href="music.html"><img src="https://img.icons8.com/?size=100&id=1ADVgAhjMw6q&format=png&color=000000" alt="Музыка"/> Музыка</a></li>
                        <li><a href="clips.html"><img src="https://img.icons8.com/?size=100&id=ltTYQL3106DN&format=png&color=000000" alt="Клипы"/> Клипы</a></li>
                        <li><a href="game.html"><img src="https://img.icons8.com/?size=100&id=zaaW3IJ6YzfY&format=png&color=000000" alt="Игры"/> Игры</a></li>
                        <li><a href="stickers.html"><img src="https://img.icons8.com/?size=100&id=R4vL0sBb0wij&format=png&color=000000" alt="Стикеры"/> Стикеры</a></li>
                        <li><a href="market.html"><img src="https://img.icons8.com/?size=100&id=kMg4YsG03oCX&format=png&color=000000" alt="Маркет"/> Маркет</a></li>
                        <hr className="divider"></hr>
                        <li><a href="market.html"><img src="https://img.icons8.com/?size=100&id=35oo0tJZ03jT&format=png&color=000000" alt="Сервисы"/> Сервисы</a></li>
                        <li><a href="/cyberpay"><img src="https://img.icons8.com/?size=100&id=0rJP01cSje0G&format=png&color=000000" alt="VK Pay"/> Cyber Pay</a></li>
                        <hr className="divider"></hr>
                        <li><a href="market.html"><img src="https://img.icons8.com/?size=100&id=tsluIX1lG5q1&format=png&color=000000" alt="Реклама"/> Реклама</a></li>
                        <li><a href="market.html"><img src="https://img.icons8.com/?size=100&id=bLTaiXRld183&format=png&color=000000" alt="Помощь"/> Помощь</a></li>
                    </ul>
                </nav>
        );
    }
}

export default Navbar;
