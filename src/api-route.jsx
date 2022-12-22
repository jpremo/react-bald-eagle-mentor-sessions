import React, { useEffect, useState } from 'react';

const APIRoute = ({ title, fetchUrl }) => {

    const [fetchResponse, setFetchResponse] = useState('');

    const fetchData = async () => {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        const jsonPretty = JSON.stringify(data,null,2);  
        setFetchResponse(jsonPretty);
    }

    return (
        <div className="api-route">
            <h1>{title}</h1>
            <button onClick={fetchData}>Fetch</button>
            <pre>{`${fetchResponse}`}</pre>
        </div>
    );
};


export default APIRoute;