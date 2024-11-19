import React, { Component } from 'react';
import './CSS/Profile.css';

class Profile extends Component {
    state = {
        activeSection: 'photo',
    };

    render() {
        const { activeSection } = this.state;

        return (
            <div className='profilepage'>
                <section className="profile">
                    <div className="profilebox">
                        <div className="profileavatar">
                            <img src="https://i.pinimg.com/564x/31/5a/b0/315ab0eade0eeebd2ffceefa23c6a14b.jpg" alt="Avatar" />
                        </div>
                        <div className="userbox">
                            <div className="username">
                                <p className="username-name">
                                    Гай Фокс
                                    <img src="https://sun4-20.userapi.com/UAdSCzklvEtCCwg2bSqebS1KqCsHfQTxQzzKcg/0w-KhnQ5FQA.png" className="status" alt="Status" />
                                </p>
                                <p className="username-description">ABOUT ABOUT</p>
                                <div className="username-links">
                                    <a href="https://s5o.ru/storage/simple/cyber/edt/0a/9a/32/01/cybere4d4a52a60e.jpg" className="username-description-link">
                                        <img src="https://img.icons8.com/material-rounded/24/marker.png" alt="Location" /> Новосибирск
                                    </a>
                                    <a href="https://s5o.ru/storage/simple/cyber/edt/0a/9a/32/01/cybere4d4a52a60e.jpg" className="username-description-link">
                                        <img src="https://img.icons8.com/material-rounded/24/suitcase.png" alt="Work" /> НГУЭУ
                                    </a>
                                    <a href="https://s5o.ru/storage/simple/cyber/edt/0a/9a/32/01/cybere4d4a52a60e.jpg" className="username-description-link">
                                        <img src="https://img.icons8.com/material-rounded/24/info.png" alt="Details" /> Подробнее
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
                <div className='profileboxbox'>
                    <div className='sectionsbox'>
                        <div className="sections-menu">
                            <button
                                className={activeSection === 'music' ? 'active' : ''}
                                onClick={() => this.setState({ activeSection: 'music' })}><img src="https://img.icons8.com/material-rounded/24/music--v2.png" alt="Музыка" />
                                Музыка
                            </button>
                            <button
                                className={activeSection === 'photo' ? 'active' : ''}
                                onClick={() => this.setState({ activeSection: 'photo' })}><img src="https://img.icons8.com/material-rounded/24/image.png" alt="Фотографии" />
                                Фото
                            </button>
                            <button
                                className={activeSection === 'albums' ? 'active' : ''}
                                onClick={() => this.setState({ activeSection: 'albums' })}><img src="https://img.icons8.com/material-rounded/24/stack-of-photos.png" alt="Альбомы" />
                                Альбомы
                            </button>
                            <button
                                className={activeSection === 'nft' ? 'active' : ''}
                                onClick={() => this.setState({ activeSection: 'nft' })}><img src="https://img.icons8.com/?size=100&id=FjcvBNoB41Ur&format=png&color=000000" alt="NFT" />
                                NFT
                            </button>
                            <button
                                className={activeSection === 'clips' ? 'active' : ''}
                                onClick={() => this.setState({ activeSection: 'clips' })}><img src="https://img.icons8.com/material-rounded/24/play--v1.png" alt="Клипы" />
                                Клипы
                            </button>
                        </div>

                        <div className="sections">
                            <img src="https://www.meme-arsenal.com/memes/b60c021f71bdb0b37ed316571f6880b3.jpg" className="profile-photos" alt="profile-photos" />
                            <img src="https://www.meme-arsenal.com/memes/155a08b674c247035cf0f33d0eb6bd84.jpg" className="profile-photos" alt="profile-photos" />
                            <img src="https://i.pinimg.com/736x/3f/4f/15/3f4f150d58eb18df1dda120c28efa190.jpg" className="profile-photos" alt="profile-photos" />
                            <img src="https://i.pinimg.com/736x/10/99/24/109924bea8f8d1e1c5d6cdb9da0307d8.jpg" className="profile-photos" alt="profile-photos" />
                            <img src="https://i.pinimg.com/736x/99/13/f2/9913f20fec704c014deb2120b9c912b7.jpg" className="profile-photos" alt="profile-photos" />
                            <img src="https://i.pinimg.com/736x/a2/eb/93/a2eb930fef14640554aa6d056ed4a01d.jpg" className="profile-photos" alt="profile-photos" />
                        </div>

                        <div className="profile-buttons">
                            <button>Загрузить фото</button>
                            <button>Показать всё</button>
                        </div>
                    </div>

                    <div className='rightbar'>
                        <div className='friendsbox'>
                            <div className='friendstext'>
                                <a>Друзья онлайн</a>
                            </div>

                            <div className='friendsimg'>
                                <a><img src="https://sun4-18.userapi.com/s/v1/ig2/PDZcXnZPuhQRAlsKZt24kZIaIdnoWWwMSK4_mjOnuT2_V_-UYVLTqTUXacGrkOCZPhl_LFm2L-FB7Fdu5o2TImt4.jpg?quality=95&crop=26,143,742,742&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=lgWfWBidHHSNjcczfoVmRyI_d-EYPW03j5_8zEQsmZ8&cs=100x100" />Дмитрий</a>
                                <a><img src="https://sun4-20.userapi.com/s/v1/ig2/aGw1R1kRumzbI6aEeu6Jj0MKVmFYE7GtyU2Qmc92g0Vk2EH8mIL3LZaKecefsAxl_4wWhiIGJPbnwMoVYFsdrE-v.jpg?quality=95&crop=16,0,958,958&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=Vw44_6Fo1v4vMeAyX9YwzxH5dMBDVDzSxaoOjfemtoU&cs=100x100" />Марк</a>
                            </div>
                            <hr className="divider"></hr>
                            <div className='friendstext'>
                                <a>Друзья</a>
                            </div>

                            <div className='friendsimg'>
                                <a><img src="https://sun4-18.userapi.com/s/v1/ig2/PDZcXnZPuhQRAlsKZt24kZIaIdnoWWwMSK4_mjOnuT2_V_-UYVLTqTUXacGrkOCZPhl_LFm2L-FB7Fdu5o2TImt4.jpg?quality=95&crop=26,143,742,742&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=lgWfWBidHHSNjcczfoVmRyI_d-EYPW03j5_8zEQsmZ8&cs=100x100" />Дмитрий</a>
                                <a><img src="https://sun4-22.userapi.com/s/v1/if1/bESt1FoiKgKFLp6V_ri95nMgw1Q9SoOQh2YArRwvtEshLY5JzlpESq5nJvaUQpRkC-SezGOt.jpg?quality=96&crop=211,312,409,409&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&ava=1&u=mu5PDNZDgk5JhBEhMixhruTrwYTdSZzyih58SRlZusU&cs=100x100" />Алексей</a>
                                <a><img src="https://sun4-22.userapi.com/s/v1/ig2/CW5eB_ezzA1r6xUoK2-3IZRuTq570dZT3cIptiAfNIWrNobK3D_t-qpP21E1wpswe9yKpEcY19yRC7_lJODTjWCg.jpg?quality=95&crop=0,0,1024,1024&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=V6G8z-zbMmwigm1GfkWe9kiRdrNfwJLZ1aydRPhxRJI&cs=100x100" />Евгений</a>
                                <a><img src="https://sun4-22.userapi.com/s/v1/ig2/jxZkVFuG4OlQKMjx5nOZkuB42swKtD3uDYemp9PCdtfFBHnrGoyZHBjTRdD4admCqUq79gM3chGV-WxM1pCGrvEd.jpg?quality=95&crop=0,180,768,768&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=zfVMG7Wdu7z5nOYf2BV4LJL0B60Hg4oHs2Q4yAF26gE&cs=100x100" />Сергей</a>
                                
                            </div>
                        </div>

                        <div className='friendsbox'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;