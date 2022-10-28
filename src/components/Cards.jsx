import React from 'react';

const Cards = ({ cover, title}) => {
    return (
        <div className='cards'>
            <img src={cover} alt="lodging" />
            <h2>{title}</h2>
        </div>
    );
};

export default Cards;