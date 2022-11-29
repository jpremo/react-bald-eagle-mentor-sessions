import React from 'react';
import './garden-card.css';

const GardenCard = (props) => {
    return (
        <div className="garden-card">
            <h1>{props.name}</h1>
            <img src={props.src}/>
            <div><strong>Garden Bed Number: </strong>{props.gardenBed}</div>
            <div><strong>Number Planted: </strong>{props.numberPlanted}</div>
        </div>
    );
};

GardenCard.propTypes = {

};

export default GardenCard;