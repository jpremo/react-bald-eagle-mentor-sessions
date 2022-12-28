import React, { useEffect, useState } from "react";

const APIRoute = ({ title, fetchUrl, RenderingComponent }) => {
    const [fetchResponses, setFetchResponses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cacheResults, setCacheResults] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const res = await fetch(fetchUrl);
        const data = await res.json();
        const jsonPretty = JSON.stringify(data, null, 2);
        if(cacheResults) {
            setFetchResponses([...fetchResponses, jsonPretty]);
        } else {
            setFetchResponses([jsonPretty]);
        }
        setLoading(false);
    };

    return (
        <div className="api-route">
            <h1>{title}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <label htmlFor="cache">Cache Results</label>
                    <input id="cache" type="checkbox" checked={cacheResults} onChange={(e) => setCacheResults(e.target.checked)}/>
                    <button onClick={fetchData}>Fetch</button>
                    {fetchResponses.map((fetchResponse, idx) => {
                        return (
                            RenderingComponent ? <RenderingComponent {...JSON.parse(fetchResponse)}/> : <pre key={`${title}-${idx}`}>{`${fetchResponse}`}</pre>
                        )
                    })
                    }
                </>
            )}
        </div>
    );
};

export default APIRoute;
