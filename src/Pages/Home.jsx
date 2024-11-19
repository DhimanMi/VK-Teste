import React, { Component } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Profile from '../Components/Profile';
import './CSS/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bodybox'>
                    <Navbar />
                    <Profile />
                </div>
                
            </div>
        );
    }
}

export default Home;
