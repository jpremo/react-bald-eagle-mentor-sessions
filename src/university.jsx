import React, { useEffect } from 'react';

const University = ({ country, name, url }) => {
    return (
        <div>
            <a href={url}>{name} ({country})</a>
        </div>
    );
};
export default University;