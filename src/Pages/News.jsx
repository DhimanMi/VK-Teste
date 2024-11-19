import React, { Component } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Lenta from '../Components/lenta';
import './CSS/News.css';

class News extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bodybox-news'>
                    <Navbar />
                    <Lenta />
                </div>
            </div>
        );
    }
}

export default News;