import React from 'react';
import banner from '../../images/Photo/banner.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <img src={banner} alt=""/>
            <div className="title">
            <h1>Sports World</h1>
            </div>
        </div>
    );
};

export default Header;