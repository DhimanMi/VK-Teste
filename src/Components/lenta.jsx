import React, { Component } from 'react';
import './CSS/lenta.css';

class lenta extends Component {
    state = {
        activeSection: 'photo',
        activeLentaSection: 'AllPosts',
    };

    setActiveSection = (section) => {
        this.setState({ activeSection: section });
    };

    setActiveLentaSection = (section) => {
        this.setState({ activeLentaSection: section });
    };

    render() {
        const { activeSection, activeLentaSection } = this.state;

        return (
            <div className='profilepage'>
                <div className='profileboxbox'>
                    <div className='profile-lenta'>

                        <div className='whatsnew-news'>
                            <img
                                className='whatsnew-avatar-news'
                                src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg"
                            />
                            <input type="text" placeholder="Что у вас нового?" />
                            <a className='whatsnew-icons-news'>
                                <img
                                    src="https://img.icons8.com/?size=100&id=EEfdAojwaUaS&format=png&color=000000"
                                    alt='camera'
                                />
                                <img
                                    src="https://img.icons8.com/?size=100&id=ZyQrxfjj0v2a&format=png&color=000000"
                                    alt='video'
                                />
                                <img
                                    src="https://img.icons8.com/?size=100&id=1ADVgAhjMw6q&format=png&color=000000"
                                    alt='music'
                                />
                                <img
                                    src="https://img.icons8.com/?size=100&id=rFXyENY2gWYs&format=png&color=000000"
                                    alt='article'
                                />
                                <img
                                    src="https://img.icons8.com/?size=100&id=ltTYQL3106DN&format=png&color=000000"
                                    alt='clips'
                                />
                            </a>
                        </div>

                        {/* ПОСТЫ */}
                        
                        {/* ПОСТ С МЕНЮ */}
                        <div className='lenta-scroll-news'>
                            <div className='post-news'>
                                <div className='post-header-news'>
                                    <img className='post-header-avatar-news' src="https://icdn.lenta.ru/images/2023/05/01/15/20230501150535418/square_1280_e21c04210340f2eab28f64ad2818965f.jpg" />
                                    <div className='post-header-username-news'>
                                        <a className='post-header-username-name-news'>Павел Дуров</a>
                                        <a className='post-header-username-description-news'>30 ноя 2024</a>
                                    </div>
                                    <div className='post-header-menu-news'>
                                        <img src='https://img.icons8.com/?size=100&id=GtWHUDIwuRAn&format=png&color=000000' />
                                    </div>
                                </div>

                                 {/* ИЗОБРАЖЕНИЕ */}
                                <div className='post-body-news'>
                                    <img src='https://www.siapress.ru/images/news/main/131210-obzor-memov-i-shutok-o-zaderganii-pavla-durova-vo-frantsii.jpg' alt='post-img'></img>
                                </div>
                                
                                <div className='post-bottom'>
                                    <button><img src='https://img.icons8.com/?size=100&id=UtSyiUgEIVW7&format=png&color=000000' alt='like'/>14К</button>
                                    <button><img src='https://img.icons8.com/?size=100&id=2qOUgBaYysTt&format=png&color=000000' alt='comment'/></button>
                                    <button><img src='https://img.icons8.com/?size=100&id=Ot3sHt9OVTMS&format=png&color=000000' alt='forward'/></button>
                                    <div className='post-views-news'>
                                        <a><img src='https://img.icons8.com/?size=100&id=60022&format=png&color=000000' />19К</a>  
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ПОСТ 1 */}
                        <div className='lenta-scroll-news'>
                            <div className='post-news'>
                                <div className='post-header-news'>
                                    <img className='post-header-avatar-news' src="https://sun9-34.userapi.com/impg/4QV-mJ8SkiKr-5AVxH4TPMhKs6GMVIRMlGTirw/eJOLRAgYy40.jpg?size=595x595&quality=95&sign=bdcd8690e213b77ce90b2a08ca4151e3&type=album" />
                                    <div className='post-header-username-news'>
                                        <a className='post-header-username-name-news'>Резников Арсений</a>
                                        <a className='post-header-username-description-news'>14 ноя 2024</a>
                                    </div>
                                    <div className='post-header-menu-news'>
                                        <img src='https://img.icons8.com/?size=100&id=GtWHUDIwuRAn&format=png&color=000000' />
                                    </div>
                                </div>

                                {/* ИЗОБРАЖЕНИЕ */}
                                <div className='post-body-news'>
                                    <img src='https://sun9-3.userapi.com/impg/KDTnCwgNPt59NHM9SknvDrMnZFS1MjATvmPBtw/qTyRXFFw1UE.jpg?size=736x722&quality=95&sign=4d416cc00aeae31e8c999d9e4a02bd64&type=album' alt='post-img'></img>
                                </div>

                                <div className='post-bottom-news'>
                                    <button><img src='https://img.icons8.com/?size=100&id=UtSyiUgEIVW7&format=png&color=000000' alt='like'/>6М</button>
                                    <button><img src='https://img.icons8.com/?size=100&id=2qOUgBaYysTt&format=png&color=000000' alt='comment'/></button>
                                    <button><img src='https://img.icons8.com/?size=100&id=Ot3sHt9OVTMS&format=png&color=000000' alt='forward'/></button>
                                    <div className='post-views-news'>
                                        <a><img src='https://img.icons8.com/?size=100&id=60022&format=png&color=000000' />6М</a>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='rightbar-news'>

                        <div className='friendsbox-ads-news'>
                            <div className='ads-news'>
                                <a>БЕСПЛАТНАЯ АРКАНА DOTA 2<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAOXbJbjIX3Hfgmx23_I3HH_Azl35liMWjQ&s'/></a>
                            </div>
                        </div>
                        <div className='friendsbox-ads-news'>
                            <div className='ads-news'>
                                <a>РЕН ТВ: КТО ТАКИЕ СКУФЫ<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZci-2pbCbHUhuJlVSA4v151W6Yc3y--uLVA&s'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default lenta;