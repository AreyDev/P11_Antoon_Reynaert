import React from 'react';
import headerlogo from "../../assets/images/headerlogo.svg";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <img src={headerlogo} className="logo" alt="logo kasa" />
            </NavLink>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;