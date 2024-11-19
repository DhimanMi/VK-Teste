import React, { Component } from 'react';
import Header from '../Components/Header';
import CyberPay from '../Components/CyberPay'
import Navbar from '../Components/Navbar';
import './CSS/CyberPayPage.css'

class CyberPayPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bodybox-pay'>
                    <Navbar />
                    <CyberPay />
                </div>
            </div>
        );
    }
}

export default CyberPayPage;