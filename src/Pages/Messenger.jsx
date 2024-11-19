import React, { Component } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

class Messenger extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bodybox'>
                    <Navbar />
                </div>
            </div>
        );
    }
}

export default Messenger;