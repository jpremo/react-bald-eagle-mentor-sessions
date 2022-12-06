import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ title, description, imgSrc }) => {
    return (
        <div className="info-card">
            <h1>{title}</h1>
            <img src={imgSrc}/>
            <p>{description}</p>
        </div>
    );
};

InfoCard.propTypes = {

};

export default InfoCard;