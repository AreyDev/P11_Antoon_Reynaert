import React from 'react';

import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='Error404'>
            <div className='error404section'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/">
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Error404;