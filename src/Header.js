import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img alt="header-logo" src="https://bt.accountsfiling.com/wp-content/uploads/2020/06/Accounts-Filing-Log_Mobile-Size.png" />
            </div>
            <nav className="header-navbar">
                <h3 className="cursor-pointer">Home</h3>
                <h3 className="cursor-pointer">About Us</h3>
                <h3 className="cursor-pointer">Services</h3>
                <h3 className="cursor-pointer">Contact Us</h3>
                <img className="cursor-pointer cart-logo" alt="cart-logo" src="https://image.flaticon.com/icons/svg/1011/1011494.svg" />
            </nav>

        </div>
    );
};

export default Header;