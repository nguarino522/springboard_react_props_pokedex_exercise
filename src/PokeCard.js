import React from 'react';
import './PokeCard.css';

const PokeCard = ({ name, type, exp, image }) => {
    return (
        <div className="PokeCard">
            <h1 className="PokeCard-name">{name}</h1>
            <img className="PokeCard-image" src={image} alt="" />
            <p className="PokeCard-data">Type: {type}</p>
            <p className="PokeCard-data">EXP: {exp}</p>
        </div >
    )
}

export default PokeCard;