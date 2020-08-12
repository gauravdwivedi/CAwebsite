import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className="topheader">
            <div className="topheader-content">
                <span>Call Us Today! 7600360118 | info@accountsfiling.com</span>
            </div>
            <div className="topheader-social-media">
                <img alt="facebook" src="https://image.flaticon.com/icons/svg/733/733547.svg"></img>
                <img alt="twitter" src="https://image.flaticon.com/icons/svg/889/889147.svg" />
                <img alt="email" src="https://image.flaticon.com/icons/svg/552/552486.svg" />

            </div>
        </div>
    );
};

export default TopHeader;