import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

InfoCard.propTypes = {

};

export default InfoCard;