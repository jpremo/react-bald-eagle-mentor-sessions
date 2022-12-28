import React, { useEffect } from 'react';

const Joke = ({ punchline, setup }) => {
    return (
        <div>
            <h3>{setup}</h3>
            <div>{punchline}</div>
        </div>
    );
};

export default Joke;