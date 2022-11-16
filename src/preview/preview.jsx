import React from 'react';

const Preview = ({ title, genre, imageUrl }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={imageUrl}/>
            <p>{genre}</p>
        </div>
    );
};

export default Preview;