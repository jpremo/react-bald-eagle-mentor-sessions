import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ title, children }) => {
    return (
        <div className="info-card">
            <h1>{title}</h1>
            {children}
        </div>
    );
};

InfoCard.propTypes = {

};

export default InfoCard;