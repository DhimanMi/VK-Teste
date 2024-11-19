import React, { Component } from 'react';
import './CSS/Profile.css';

class Profile extends Component {
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
                <div className='profilecont'>
                    <section className="profile">
                        <div className="profilebox">
                            <div className="profileavatar">
                                <img src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg" alt="Avatar" />
                            </div>
                            <div className="userbox">
                                <div className="username">
                                    <p className="username-name">
                                        Дмитрий Скочко
                                        <img src="https://sun4-20.userapi.com/UAdSCzklvEtCCwg2bSqebS1KqCsHfQTxQzzKcg/0w-KhnQ5FQA.png" className="status" alt="Status" />
                                    </p>
                                    <p className="username-description">ABOUT ABOUT</p>
                                    <div className="username-links">
                                        <a href="https://s5o.ru/storage/simple/cyber/edt/0a/9a/32/01/cybere4d4a52a60e.jpg" className="username-description-link">
                                            <img src="https://img.icons8.com/?size=100&id=c5ajKLqrdH2R&format=png&color=000000" alt="Location" /> Новосибирск
                                        </a>
                                        <a href="https://s5o.ru/storage/simple/cyber/edt/0a/9a/32/01/cybere4d4a52a60e.jpg" className="username-description-link">
                                            <img src="https://img.icons8.com/?size=100&id=2QBjm2HWFLRq&format=png&color=000000" alt="Work" /> НГУЭУ
                                        </a>
                                        <a href="https://s5o.ru/storage/simple/cyber/edt/0a/9a/32/01/cybere4d4a52a60e.jpg" className="username-description-link">
                                            <img src="https://img.icons8.com/?size=100&id=4QqiUDhshQ4q&format=png&color=000000" alt="Details" /> Подробнее
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="profilebutton">
                                <button>Редактировать профиль</button>
                                <button>Ещё</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='profileboxbox'>
                    <div className='profile-lenta'>
                        <div className='sectionsbox'>
                            <div className="sections-menu">
                                <button
                                    className={activeSection === 'music' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('music')}><img src="https://img.icons8.com/?size=100&id=1ADVgAhjMw6q&format=png&color=000000" alt="Музыка" />
                                    Музыка
                                </button>
                                <button
                                    className={activeSection === 'photo' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('photo')}><img src="https://img.icons8.com/?size=100&id=unKFYSWBr4FC&format=png&color=000000" alt="Фотографии" />
                                    Фото
                                </button>
                                <button
                                    className={activeSection === 'albums' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('albums')}><img src="https://img.icons8.com/?size=100&id=ODIeplc4cfOd&format=png&color=000000" alt="Альбомы" />
                                    Альбомы
                                </button>
                                <button
                                    className={activeSection === 'nft' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('nft')}><img src="https://img.icons8.com/?size=100&id=qs973rWPpRhU&format=png&color=000000" alt="NFT" />
                                    NFT
                                </button>
                                <button
                                    className={activeSection === 'clips' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('clips')}><img src="https://img.icons8.com/?size=100&id=ltTYQL3106DN&format=png&color=000000" alt="Клипы" />
                                    Клипы
                                </button>
                            </div>

                            <div class="sections">
                                <a href="https://i.pinimg.com/236x/03/94/77/03947764a8e76fdcc7be7a6acd73f4b4.jpg">
                                    <img src="https://i.pinimg.com/236x/03/94/77/03947764a8e76fdcc7be7a6acd73f4b4.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/236x/cb/1d/4b/cb1d4bf515de65081f1c2b72ca73bc48.jpg">
                                    <img src="https://i.pinimg.com/236x/cb/1d/4b/cb1d4bf515de65081f1c2b72ca73bc48.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/236x/a6/8a/42/a68a4248effc499934bf126285a04ccd.jpg">
                                    <img src="https://i.pinimg.com/236x/a6/8a/42/a68a4248effc499934bf126285a04ccd.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/474x/e5/25/8c/e5258cc6c3f46595569026243e4e1558.jpg">
                                    <img src="https://i.pinimg.com/474x/e5/25/8c/e5258cc6c3f46595569026243e4e1558.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/736x/20/29/f3/2029f3f94070c2fdab28c4c28596a6b7.jpg">
                                    <img src="https://i.pinimg.com/736x/20/29/f3/2029f3f94070c2fdab28c4c28596a6b7.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/236x/c1/ff/e4/c1ffe43db62d78c8f4e77e522e652361.jpg">
                                    <img src="https://i.pinimg.com/236x/c1/ff/e4/c1ffe43db62d78c8f4e77e522e652361.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                            </div>


                            <div className="profile-buttons">
                                <button>Загрузить фото</button>
                                <button>Показать всё</button>
                            </div>
                        </div>

                        <div className='whatsnew'>
                            <img
                                className='whatsnew-avatar'
                                src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg"
                            />
                            <input type="text" placeholder="Что у вас нового?" />
                            <a className='whatsnew-icons'>
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
                        <div className='lenta-scroll'>
                            <div className="lenta-menu">
                                <button
                                    className={activeLentaSection === 'AllPosts' ? 'active' : ''}
                                    onClick={() => this.setActiveLentaSection('AllPosts')}>
                                    Все записи
                                </button>
                                <button
                                    className={activeLentaSection === 'MyPosts' ? 'active' : ''}
                                    onClick={() => this.setActiveLentaSection('MyPosts')}>
                                    Мои записи
                                </button>
                                <button
                                    className={activeLentaSection === 'Archive' ? 'active' : ''}
                                    onClick={() => this.setActiveLentaSection('Archive')}>
                                    Архив записей
                                </button>
                                <div className='lenta-search'>
                                    <img
                                        src="https://img.icons8.com/?size=100&id=VGarqksTjGhg&format=png&color=000000"
                                        alt='search'
                                    />
                                </div>
                            </div>
                            <hr className="lenta-divider"></hr>
                            <div className='post'>
                                <div className='post-header'>
                                    <img className='post-header-avatar' src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg" />
                                    <div className='post-header-username'>
                                        <a className='post-header-username-name'>Скочко Дмитрий</a>
                                        <a className='post-header-username-description'>29 сен 2024</a>
                                    </div>
                                    <div className='post-header-menu'>
                                        <img src='https://img.icons8.com/?size=100&id=GtWHUDIwuRAn&format=png&color=000000' />
                                    </div>
                                </div>

                                 {/* ИЗОБРАЖЕНИЕ */}
                                <div className='post-body'>
                                    <img src='https://sun9-70.userapi.com/s/v1/ig2/WtbGRSi8115QJUmQXwKrRXNRz5vpMStXTPwDEu1Fd-DJ6ifJx08Mi76p5yUFGKmduFKiLncgjNaykMtmJGNSLX8p.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&u=v_OrOad5nEZ6LnXa1-IET2iQJAHbDoVv8ZbjxPYA25M&cs=807x807' alt='post-img'></img>
                                </div>
                                
                                <div className='post-bottom'>
                                    <button><img src='https://img.icons8.com/?size=100&id=UtSyiUgEIVW7&format=png&color=000000' alt='like'/>6</button>
                                    <button><img src='https://img.icons8.com/?size=100&id=2qOUgBaYysTt&format=png&color=000000' alt='comment'/></button>
                                    <button><img src='https://img.icons8.com/?size=100&id=Ot3sHt9OVTMS&format=png&color=000000' alt='forward'/></button>
                                    <div className='post-views'>
                                        <a><img src='https://img.icons8.com/?size=100&id=60022&format=png&color=000000' />60</a>  
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ПОСТ 1 */}
                        <div className='lenta-scroll'>
                            <div className='post'>
                                <div className='post-header'>
                                    <img className='post-header-avatar' src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg" />
                                    <div className='post-header-username'>
                                        <a className='post-header-username-name'>Скочко Дмитрий</a>
                                        <a className='post-header-username-description'>29 сен 2024</a>
                                    </div>
                                    <div className='post-header-menu'>
                                        <img src='https://img.icons8.com/?size=100&id=GtWHUDIwuRAn&format=png&color=000000' />
                                    </div>
                                </div>

                                {/* ИЗОБРАЖЕНИЕ */}
                                <div className='post-body'>
                                    <img src='https://sun9-28.userapi.com/s/v1/ig2/jIz-RrisvRJZgVHGKr1nmaEvhy-tvonJSc6O4KyWnI4TuI0YwUyiFggrMJ9keCXaDMuLK9XRqIijdPSUIKYxOOiH.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=eNilOldojXua0NgPK7Ic7TsNfpt1RKBINIwf_aW0zIM&cs=807x605' alt='post-img'></img>
                                </div>

                                <div className='post-bottom'>
                                    <button><img src='https://img.icons8.com/?size=100&id=UtSyiUgEIVW7&format=png&color=000000' alt='like'/>6</button>
                                    <button><img src='https://img.icons8.com/?size=100&id=2qOUgBaYysTt&format=png&color=000000' alt='comment'/></button>
                                    <button><img src='https://img.icons8.com/?size=100&id=Ot3sHt9OVTMS&format=png&color=000000' alt='forward'/></button>
                                    <div className='post-views'>
                                        <a><img src='https://img.icons8.com/?size=100&id=60022&format=png&color=000000' />60</a>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='rightbar'>
                        <div className='friendsbox'>
                            <div className='friendstext-online'>
                                <a>Друзья онлайн</a>
                                <div className='friendsnumber'>2</div>
                            </div>

                            <div className='friendsimg-online'>
                                <a><img src="https://sun4-18.userapi.com/s/v1/ig2/PDZcXnZPuhQRAlsKZt24kZIaIdnoWWwMSK4_mjOnuT2_V_-UYVLTqTUXacGrkOCZPhl_LFm2L-FB7Fdu5o2TImt4.jpg?quality=95&crop=26,143,742,742&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=lgWfWBidHHSNjcczfoVmRyI_d-EYPW03j5_8zEQsmZ8&cs=100x100" />Дмитрий</a>
                                <a><img src="https://sun4-20.userapi.com/s/v1/ig2/aGw1R1kRumzbI6aEeu6Jj0MKVmFYE7GtyU2Qmc92g0Vk2EH8mIL3LZaKecefsAxl_4wWhiIGJPbnwMoVYFsdrE-v.jpg?quality=95&crop=16,0,958,958&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=Vw44_6Fo1v4vMeAyX9YwzxH5dMBDVDzSxaoOjfemtoU&cs=100x100" />Марк</a>
                            </div>
                            <hr className="friends-divider"></hr>
                            <div className='friendstext'>
                                <a>Друзья</a>
                                <div className='friendsnumber'>19</div>
                            </div>

                            <div className='friendsimg'>
                                <a><img src="https://sun4-18.userapi.com/s/v1/ig2/PDZcXnZPuhQRAlsKZt24kZIaIdnoWWwMSK4_mjOnuT2_V_-UYVLTqTUXacGrkOCZPhl_LFm2L-FB7Fdu5o2TImt4.jpg?quality=95&crop=26,143,742,742&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=lgWfWBidHHSNjcczfoVmRyI_d-EYPW03j5_8zEQsmZ8&cs=100x100" />Дмитрий</a>
                                <a><img src="https://sun4-22.userapi.com/s/v1/if1/bESt1FoiKgKFLp6V_ri95nMgw1Q9SoOQh2YArRwvtEshLY5JzlpESq5nJvaUQpRkC-SezGOt.jpg?quality=96&crop=211,312,409,409&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&ava=1&u=mu5PDNZDgk5JhBEhMixhruTrwYTdSZzyih58SRlZusU&cs=100x100" />Алексей</a>
                                <a><img src="https://sun4-22.userapi.com/s/v1/ig2/CW5eB_ezzA1r6xUoK2-3IZRuTq570dZT3cIptiAfNIWrNobK3D_t-qpP21E1wpswe9yKpEcY19yRC7_lJODTjWCg.jpg?quality=95&crop=0,0,1024,1024&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=V6G8z-zbMmwigm1GfkWe9kiRdrNfwJLZ1aydRPhxRJI&cs=100x100" />Евгений</a>
                                <a><img src="https://sun4-22.userapi.com/s/v1/ig2/jxZkVFuG4OlQKMjx5nOZkuB42swKtD3uDYemp9PCdtfFBHnrGoyZHBjTRdD4admCqUq79gM3chGV-WxM1pCGrvEd.jpg?quality=95&crop=0,180,768,768&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=zfVMG7Wdu7z5nOYf2BV4LJL0B60Hg4oHs2Q4yAF26gE&cs=100x100" />Сергей</a>

                            </div>
                        </div>

                        <div className='friendsbox-ads'>
                            <div className='ads'>
                                <a>БЕСПЛАТНАЯ АРКАНА DOTA 2<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAOXbJbjIX3Hfgmx23_I3HH_Azl35liMWjQ&s'/></a>
                            </div>
                        </div>
                        <div className='friendsbox-ads'>
                            <div className='ads'>
                                <a>РЕН ТВ: КТО ТАКИЕ СКУФЫ<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZci-2pbCbHUhuJlVSA4v151W6Yc3y--uLVA&s'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;