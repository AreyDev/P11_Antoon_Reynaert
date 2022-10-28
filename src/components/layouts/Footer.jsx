import React from 'react';
import footerlogo from "../../assets/images/footerlogo.svg";

const Footer = () => {
    return (
        <div>
            <div className='footer'>
            <img src={footerlogo} alt="footer logo" />
            <h2>© 2020 Kasa. All rights reserved</h2>
            </div>
        </div>
    );
};

export default Footer;