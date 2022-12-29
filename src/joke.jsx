import React, { useState } from 'react';

const Joke = ({ punchline, setup }) => {
    const [punchlineVisible, setPunchlineVisible] = useState(false);
    return (
        <div>
            <h3>{setup}</h3>
            <button onClick={() => setPunchlineVisible(!punchlineVisible)}>{punchlineVisible ? 'Hide Punchline' : 'Reveal Punchline'}</button>
            {punchlineVisible &&
                <div>{punchline}</div>
            }
        </div>
    );
};

export default Joke;