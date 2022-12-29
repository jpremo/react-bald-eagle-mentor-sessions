import React, { useEffect } from 'react';

const Dog = ({ message, data }) => {
    return (
        <img src={data.message}/>
    );
};

export default Dog;