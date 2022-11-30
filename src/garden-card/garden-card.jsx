import React from 'react';
import './garden-card.css';

const GardenCard = ({ gardenPlantList, plantIndex, setGardenPlantList, name, src, gardenBed, numberPlanted }) => {
    const handleDeletePlant = () => {
        const arrayCopy = [...gardenPlantList];
        arrayCopy.splice(plantIndex, 1);
        setGardenPlantList(arrayCopy);
    }
    return (
        <>
            <div className="garden-card">
                <h1>{name}</h1>
                <img src={src}/>
                <div><strong>Garden Bed Number: </strong>{gardenBed}</div>
                <div><strong>Number Planted: </strong>{numberPlanted}</div>
                <button onClick={handleDeletePlant}>Delete</button>
            </div>
            <div>

            </div>
        </>
    );
};

GardenCard.propTypes = {

};

export default GardenCard;